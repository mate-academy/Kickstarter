'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.features__slider', {

  navigation: {
    nextEl: '.features__button--next',
    prevEl: '.features__button--prev',
  },

  loop: true,

  pagination: {
    el: '.features__pagination',
    type: 'fraction',
  },
});
