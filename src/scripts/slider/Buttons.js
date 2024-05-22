export class Buttons {
  #buttons;
  #lastIndex;

  /**
   *
   * @param {Record<'prevBtn' | 'nextBtn', HTMLElement>} buttons
   * @param {number} slideCount
   */
  constructor(buttons, lastIndex) {
    this.#buttons = buttons;
    this.#lastIndex = lastIndex;
  }
  /**
   *
   * @param {number} value
   */
  update(value) {
    if (value === this.#lastIndex) {
      this.#buttons.nextBtn.setAttribute('disabled', true);
    } else {
      this.#buttons.nextBtn.removeAttribute('disabled');
    }
    if (value === 0) {
      this.#buttons.prevBtn.setAttribute('disabled', true);
    } else {
      this.#buttons.prevBtn.removeAttribute('disabled');
    }
  }
}
