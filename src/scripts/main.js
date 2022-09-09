'use strict';

import Swiper, { Navigation, Pagination } from 'swiper';

const rClass = () => {
  document.querySelector('.header__line')
    .classList.remove('header__line--active');
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.body.classList.add('page__body--nav-open');
  } else if (window.location.hash !== '#nav') {
    document.body.classList.remove('page__body--nav-open');
  }
});

window.addEventListener('hashchange', () => {
  const langU = document.querySelectorAll('.menu__language-ua');
  const langE = document.querySelectorAll('.menu__language-en');

  if (window.location.hash === '#ua' || window.location.hash === '#nav-ua') {
    for (let i = 0; i < langU.length; i++) {
      langU[i].classList.add('menu__language-ua--active');
      langE[i].classList.add('menu__language-en--disabled');
    }
  } else if (window.location.hash === '#en'
  || window.location.hash === '#nav-en') {
    for (let i = 0; i < langU.length; i++) {
      langU[i].classList.remove('menu__language-ua--active');
      langE[i].classList.remove('menu__language-en--disabled');
    }
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.querySelector('.header__line')
      .classList.add('header__line--active');
    setTimeout(rClass, 310);
  }
});

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  grabCursor: true,
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
