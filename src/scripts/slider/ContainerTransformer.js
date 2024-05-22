export class ContainerTransformer {
  #container;
  #slides;
  /**
   *
   * @param {HTMLElement} container
   * @param {NodeListOf<HTMLElement>} slides
   */
  constructor(container, slides) {
    this.#container = container;
    this.#slides = slides;
  }

  update(value) {
    const currentIndex = Math.min(value, this.#slides.length - 1);
    const transformValue =
      this.#slides[currentIndex].offsetLeft - this.#slides[0].offsetLeft;
    const isValidtransform =
      transformValue <=
      this.#container.scrollWidth - this.#container.clientWidth;

    this.#container.style.transform = `translateX(-${isValidtransform ? transformValue : 0}px)`;
  }
}
