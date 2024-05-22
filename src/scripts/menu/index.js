import { createMapModifiers } from '../utils/createMapModifiers';
import { MenuController } from './MenuController';

export const useMenu = () => {
  const DOM_ELEMENTS_MODIFIER = {
    button: 'top-bar__menu-button--active',
    menu: 'main-nav--active',
    page: 'page--menu-open',
    topBar: 'top-bar--active',
  };

  const DOMElements = {
    button: document.querySelector('[data-menu="button"]'),
    menu: document.querySelector('[data-menu="menu"]'),
    page: document.querySelector('[data-menu="page"]'),
    topBar: document.querySelector('[data-menu="top-bar"]'),
  };

  const mapModifiers = createMapModifiers(DOMElements, DOM_ELEMENTS_MODIFIER);
  const menuController = new MenuController(mapModifiers);

  DOMElements.button.addEventListener('click', () => menuController.toggle());
  window.addEventListener('resize', () => menuController.close());

  DOMElements.menu.addEventListener('click', (e) => {
    if (e.target?.localName !== 'a') {
      return;
    }

    menuController.close();
  });
};
