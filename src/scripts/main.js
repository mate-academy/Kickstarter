'use strict';
import { toggleHideAndShow } from "./functions.js";

// querySelector
const body = document.querySelector('body');

const topBar = document.querySelector('.top-bar');
const menuButton = document.querySelector('.top-bar__menu');
const menuButtonIcon = document.querySelector('.top-bar__icon');

const burgerMenu = document.querySelector('.drop-down-menu');
const menuContent = document.querySelector('.drop-down-menu__content');
const buyButton = document.querySelector('.drop-down-menu__btn');
const languageSwitcher = document.querySelector('.drop-down-menu__switch');

// #region create a new class for tags
const CLASS_FOR_THE_BODY = 'body__lock';

const CLASS_FOR_THE_BURGERMENU = 'drop-down-menu--active';

const CLASS_FOR_THE_BUTTON = 'top-bar__btn';
const CLASS_FOR_THE_SWITCH = 'top-bar__switch';
const CLASS_FOR_THE_MENU_BUTTON = 'top-bar__menu--active';
const CLASS_FOR_THE_MENU_BUTTON_ICON = 'top-bar__icon--active';
// #endregion


// #region button menu
menuButton.addEventListener('click', () => {

  menuButton.classList.toggle(CLASS_FOR_THE_MENU_BUTTON);
  menuButtonIcon.classList.toggle(CLASS_FOR_THE_MENU_BUTTON_ICON);
  burgerMenu.classList.toggle(CLASS_FOR_THE_BURGERMENU);
  body.classList.toggle(CLASS_FOR_THE_BODY);

  // hide items
    toggleHideAndShow (buyButton, rootStyleValue);
    toggleHideAndShow (languageSwitcher, rootStyleValue);
  });
// #endregion


  // #region changing the position of elements
  const rootStyleValue = getComputedStyle(document.documentElement)
    .getPropertyValue('--tablet')
    .slice(0, -2)
  ;

function trackScreenSize () {

  if (window.innerWidth >= rootStyleValue) {

    // changing the position of the language switcher
    topBar.appendChild(languageSwitcher);
    buyButton.classList.add(CLASS_FOR_THE_BUTTON);

    // changing the position of the button
    topBar.appendChild(buyButton);
    languageSwitcher.classList.add(CLASS_FOR_THE_SWITCH);

  } else if (window.innerWidth < rootStyleValue) {
    
    menuContent.appendChild(languageSwitcher);
    languageSwitcher.classList.remove(CLASS_FOR_THE_SWITCH);

    burgerMenu.appendChild(buyButton);
    buyButton.classList.remove(CLASS_FOR_THE_BUTTON);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  trackScreenSize();
});

window.addEventListener('resize', () => {
  trackScreenSize();
});
// #endregion
