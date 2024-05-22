/**
 * @typedef SliderCounterObserver
 * @property {(value: number) => void} update
 */

export class SliderCounter {
  #observers;
  #value;
  #min;
  #max;

  /**
   *
   * @param {number} min
   * @param {number} max
   * @param {SliderCounterObserver[]} observers
   */

  constructor(min, max, observers) {
    this.#observers = observers;
    this.#value = min;
    this.#min = min;
    this.#max = max;
  }

  /**
   * @param {number} newValue
   */
  set value(newValue) {
    this.#value =
      newValue <= this.#max && newValue >= this.#min ? newValue : this.#value;

    this.#update();
  }

  get value() {
    return this.#value;
  }

  #update() {
    this.#observers.forEach((observer) => observer.update(this.#value));
  }
}
