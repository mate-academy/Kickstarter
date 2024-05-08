'use strict';
import { toggleHideAndShow, templateHtml, removeTextNodeDom } from "./functions.js";
import { benefits } from "./array_of_data.js";

// querySelector
const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('#menu');
const menuList = document.querySelector('.menu__list');

const topBar = document.querySelector('.top-bar');
const menuButton = document.querySelector('.top-bar__menu');
const menuButtonIcon = document.querySelector('.top-bar__icon');

const burgerMenu = document.querySelector('.drop-down-menu');
const menuContent = document.querySelector('.drop-down-menu__content');
const buyButton = document.querySelector('.drop-down-menu__btn');
const languageSwitcher = document.querySelector('.drop-down-menu__switch');

const benefitsSection = document.querySelector('.benefits');

// #region create a new class for tags
const CLASS_FOR_THE_BODY = 'body__lock';

const CLASS_FOR_THE_BURGERMENU = 'drop-down-menu--active';
const CLASS_FOR_THE_MENU_DESCKOP = 'header__menu';
const CLASS_FOR_THE_MENU_LIST_DESCKOP = 'header__menu--list';

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

  const rootStyleValueDesckop = getComputedStyle(document.documentElement)
    .getPropertyValue('--desktop')
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

  // changing the position of the menu and show it
  if (window.innerWidth >= rootStyleValueDesckop) {
    header.appendChild(menu);
    menuList.classList.add(CLASS_FOR_THE_MENU_LIST_DESCKOP);
    menu.classList.add(CLASS_FOR_THE_MENU_DESCKOP);
  } else {
    menuContent.appendChild(menu);
    menuList.classList.remove(CLASS_FOR_THE_MENU_LIST_DESCKOP);
    menu.classList.remove(CLASS_FOR_THE_MENU_DESCKOP);
  }
};

window.addEventListener('DOMContentLoaded', () => {
  trackScreenSize();
  location.reload;
});

window.addEventListener('resize', () => {
  trackScreenSize();
});
// #endregion

// section benefits view all objects
benefitsSection.innerHTML = benefits.map(templateHtml);
removeTextNodeDom(document.querySelectorAll('.benefits__card'));
