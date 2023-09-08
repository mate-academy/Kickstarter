'use strict';

// eslint-disable-next-line no-undef
AOS.init();

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu-mobile'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

const pageBody = document.querySelector('.page__body');
const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
  pageBody.getBoundingClientRect().top < -250
    ? scrollToTop.classList.add('scroll-to-top--show')
    : scrollToTop.classList.remove('scroll-to-top--show');
});

/* global Swiper */
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,

  pagination: {
    el: '.swiper-pagination--custom',
    type: 'fraction',
    formatFractionCurrent: number => '0' + number,
    formatFractionTotal: number => '0' + number,
  },

  navigation: {
    nextEl: '.swiper-button-next--custom',
    prevEl: '.swiper-button-prev--custom',
  },
});

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
