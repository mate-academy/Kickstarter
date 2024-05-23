import { createMapModifiers } from '../utils/createMapModifiers';

export class SlideInfo {
  #elements;
  #mapModifiers;
  #lastIndex;
  /**
   *
   * @param {Record<'currentSlide' | 'slideCount', HTMLElement>} elements
   * @param {Record<'currentSlide' | 'slideCount', string>} modifiers
   * @param {number} slideCount
   */
  constructor(elements, modifiers, lastIndex) {
    this.#elements = elements;
    this.#mapModifiers = createMapModifiers(elements, modifiers);
    this.#lastIndex = lastIndex;

    this.#elements.slideCount.innerText = this.#formatInnerText(
      this.#lastIndex,
    );
  }

  update(index) {
    this.#elements.currentSlide.innerText = this.#formatInnerText(index);

    this.#mapModifiers((element, modifier) => {
      if (index === this.#lastIndex) {
        element.classList.add(modifier);
      } else {
        element.classList.remove(modifier);
      }
    });
  }

  /**
   *
   * @param {number} value
   */
  #formatInnerText(value) {
    return (value + 1).toString().padStart(2, 0);
  }
}
