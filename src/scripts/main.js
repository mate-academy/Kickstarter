'use strict';

AOS.init();

const pageBody = document.querySelector('.page__body');

if (window.location.hash === '#mobile-menu') {
  document.body.classList.add('page__body--menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#mobile-menu') {
    document.body.classList.add('page__body--menu');
  } else {
    document.body.classList.remove('page__body--menu');
  }
});

const up = document.querySelector('.up');

window.addEventListener('scroll', function() {
  if (pageBody.getBoundingClientRect().top < -250) {
    up.classList.add('up--show');
  } else {
    up.classList.remove('up--show');
  }
});

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
