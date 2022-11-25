'use strict';

// eslint-disable-next-line no-new, no-undef
new Swiper('.features__content', {
  navigation: {
    nextEl: '.features__button-next',
    prevEl: '.features__button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  speed: 500,

  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
