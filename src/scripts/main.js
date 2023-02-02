'use strict';

// eslint-disable-next-line no-undef
AOS.init();

const pageBody = document.querySelector('.page__body');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const scrollToTop = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function() {
  if (pageBody.getBoundingClientRect().top < -250) {
    scrollToTop.classList.add('scroll-to-top--show');
  } else {
    scrollToTop.classList.remove('scroll-to-top--show');
  }
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,

  pagination: {
    el: '.swiper-pagination--custom',
    type: 'fraction',
    formatFractionCurrent: function(number) {
      return '0' + number;
    },
    formatFractionTotal: function(number) {
      return '0' + number;
    },
  },

  navigation: {
    nextEl: '.swiper-button-next--custom',
    prevEl: '.swiper-button-prev--custom',
  },
});

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
