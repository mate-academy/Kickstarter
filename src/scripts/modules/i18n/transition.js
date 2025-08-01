import { LANG_CLASSES } from './constants.js';
import { getHtmlElement } from './dom.js';

export const startTransition = () => {
  getHtmlElement().classList.add(LANG_CLASSES.changing);
};

export const endTransition = () => {
  setTimeout(() => {
    getHtmlElement().classList.remove(LANG_CLASSES.changing);
  }, 150);
};
