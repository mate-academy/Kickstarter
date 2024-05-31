'use strict';
import {
  querySelector,
  querySelectorAll,
  classHtml,
  toggleHideAndShow,
  mediaBreakpoint,
  changeThePositionOfTheElement,
  templateHtmlForBenefits,
  templateHtmlForAboutUs,
  templateHtmlForFeatures,
  renderingList,
} from "./functions.js";

import {
  benefits,
  aboutUs,
  features,
} from "./array_of_data.js";

// #region menu

// button burger-menu
querySelector('top-bar__menu').addEventListener('click', () => {

  querySelector('top-bar__menu').classList.toggle('top-bar__menu--active');
  querySelector('top-bar__icon').classList.toggle('top-bar__icon--active');
  querySelector('drop-down-menu').classList.toggle('drop-down-menu--active');

  (querySelector('top-bar__icon--active')
    ? classHtml('body', 'add', 'body__lock')
    : classHtml('body', 'remove', 'body__lock')
  );

  // hide items
    toggleHideAndShow (querySelector(
      'drop-down-menu__btn',
      'drop-down-menu__switch'
    ), mediaBreakpoint('--tablet'));
  });

  // menu content
  querySelector('menu').addEventListener('click', (event) => {
    // check clisk in an empty space
    if(event.target.tagName !== 'A') {
      return false;
    }

    querySelectorAll('menu').forEach(() => {
      classHtml('body', 'remove', 'body__lock');
      classHtml('top-bar__menu', 'remove', 'top-bar__menu--active');
      classHtml('top-bar__icon', 'remove', 'top-bar__icon--active');
      classHtml('drop-down-menu', 'remove', 'drop-down-menu--active');
    })
  });

  // button BUY
  querySelector('drop-down-menu__btn').addEventListener('click', () => {
    querySelector('stub-btn-BUY').style.transform = 'scale(1)';
    classHtml('body', 'add', 'body__lock');
  });

  querySelector('stub-btn-BUY__btn').addEventListener('click', () =>{
    querySelector('stub-btn-BUY').style.transform = 'scale(0)';
    classHtml('body', 'remove', 'body__lock');
  });

  // button SEND
  querySelector('questions__form').addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const yourMessage = document.getElementById('your-message').value;

    if (email && yourMessage) {
      querySelector('stub-btn-SEND').style.transform = 'scale(1)';

      setTimeout ( () => {
        querySelector('stub-btn-SEND').style.transform = 'translateX(500%)';
        }, 3000);

      setTimeout ( () =>{
        querySelector('stub-btn-SEND').style.transform = 'scale(0)';
      }, 3200);
    }

    document.getElementById('questions__form').reset();
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
    changeThePositionOfTheElement('drop-down-menu__content', 'drop-down-menu__switch');
    changeThePositionOfTheElement('drop-down-menu', 'drop-down-menu__btn');

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
querySelector('benefits__container').innerHTML = benefits.map(templateHtmlForBenefits).join('');

// section about us view all objects
querySelector('about-us__container').innerHTML = aboutUs.map(templateHtmlForAboutUs).join('');

// #region section features view all objects
querySelector('features__content').innerHTML = features.map(templateHtmlForFeatures).join('');
renderingList(querySelectorAll('features__item'));

// section features navigation
const slides = querySelectorAll('features__block');
const btnNext = document.querySelector('input[name="switch-2"]');
const btnPrev = document.querySelector('input[name="switch-1"]');
const ACTIVE = 'features__block--active';
const NO_ACTIVE = 'features__switch--no-active';
let currentIndex = 0;

function displaingCurrentIndex () {
  querySelector('features__display-index--corrent').textContent = '0' + (currentIndex + 1);

  (currentIndex === 0)
  ? btnPrev.classList.add(NO_ACTIVE)
  : btnPrev.classList.remove(NO_ACTIVE);

  (currentIndex === slides.length -1)
  ? btnNext.classList.add(NO_ACTIVE)
  : btnNext.classList.remove(NO_ACTIVE);
}

slides[currentIndex].classList.add(ACTIVE);
displaingCurrentIndex();

btnNext.addEventListener('click', () => {
  slides[currentIndex].classList.remove(ACTIVE);

  currentIndex ++;
  slides[currentIndex].classList.add(ACTIVE);

  displaingCurrentIndex();
});

btnPrev.addEventListener('click', () => {
  slides[currentIndex].classList.remove(ACTIVE);

  currentIndex --;
  slides[currentIndex].classList.add(ACTIVE);

  displaingCurrentIndex();
});
// #endregion
