/**
 *
 * @param {Record<string, Element>} elements
 * @param {Record<string, string>} modifiers
 *
 */

export function createMapModifiers(elements, modifiers) {
  /**
   * @param {(element: Element, modifier: string) => any} callback
   */
  return (callback) => {
    const result = [];

    for (const key in elements) {
      const element = elements[key];
      const modifier = modifiers[key];

      if (!element || !modifier) continue;

      result.push(callback(element, modifier));
    }
    return result;
  };
}
