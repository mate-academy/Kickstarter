export class MenuController {
  #mapModifiers;

  /**
   *
   * @param {(callback: (element: Element, modifier: string) => any) => any[]} mapModifiers
   */
  constructor(mapModifiers) {
    this.#mapModifiers = mapModifiers;
  }

  toggle() {
    this.#controll((isMenuOpen) => !isMenuOpen);
  }

  close() {
    this.#controll(() => false);
  }

  /**
   *
   * @param {(isMenuOpen: boolean) => boolean} cb
   */
  #controll(cb) {
    const containResults = this.#mapModifiers((element, modifier) =>
      element.classList.contains(modifier),
    );
    const isMenuOpen = containResults.every((value) => value);

    this.#mapModifiers((element, modifier) => {
      if (cb(isMenuOpen)) {
        element.classList.add(modifier);
      } else {
        element.classList.remove(modifier);
      }
    });
  }
}
