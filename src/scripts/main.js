'use strict';
import {
  querySelector,
  toggleHideAndShow,
  classHtml,
  mediaBreakpoint,
  changeThePositionOfTheElement,
  templateHtmlForBenefits,
  templateHtmlForAboutUs,
  templateHtmlForFeatures,
} from "./functions.js";

import {
  benefits,
  aboutUs,
  features,
} from "./array_of_data.js";

// #region button menu
querySelector('top-bar__menu').addEventListener('click', () => {

  querySelector('top-bar__menu').classList.toggle('top-bar__menu--active');
  querySelector('top-bar__icon').classList.toggle('top-bar__icon--active');
  querySelector('drop-down-menu').classList.toggle('drop-down-menu--active');
  querySelector('body').classList.toggle('body__lock');

  // hide items
    toggleHideAndShow (querySelector('drop-down-menu__btn'), rootStyleValueTablet);
    toggleHideAndShow (querySelector('drop-down-menu__switch'), rootStyleValueTablet);
  });
// #endregion

// #region changing the position of elements

function trackScreenSize () {

  // change the position of lemenets when changing the screen size

  if (window.innerWidth >= mediaBreakpoint('--tablet')) {

    // changing the position of the language switcher
    changeThePositionOfTheElement('top-bar', 'drop-down-menu__switch');
    classHtml('drop-down-menu__switch', 'add', 'top-bar__switch');

    // changing the position of the button
    changeThePositionOfTheElement('top-bar', 'drop-down-menu__btn');
    classHtml('drop-down-menu__btn', 'add', 'top-bar__btn');

  } else {
    changeThePositionOfTheElement('drop-down-menu', 'drop-down-menu__btn');
    changeThePositionOfTheElement('drop-down-menu__content', 'drop-down-menu__switch');

    classHtml('drop-down-menu__switch', 'remove', 'top-bar__switch');
    classHtml('drop-down-menu__btn', 'remove', 'top-bar__btn');
  };

  if (window.innerWidth >= mediaBreakpoint('--desktop')) {

    changeThePositionOfTheElement('header', 'menu');
    classHtml('menu', 'add', 'header__menu');
    classHtml('menu__list', 'add', 'header__menu--list');
  } else {

    changeThePositionOfTheElement('drop-down-menu__content', 'menu');
    classHtml('menu', 'remove', 'header__menu');
    classHtml('menu__list', 'remove', 'header__menu--list');
  };
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
querySelector('benefits').innerHTML = benefits.map(templateHtmlForBenefits).join('');

// section about us view all objects
querySelector('about-us').innerHTML = aboutUs.map(templateHtmlForAboutUs).join('');

// section features view all objects
querySelector('features__content').innerHTML = features.map(templateHtmlForFeatures).join('');


