'use strict';

const slider = document.querySelector('.swiper');
/* eslint-disable */
new Swiper(slider, {
/* eslint-enable */
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000,
  },
});
/* eslint-disable */
new Swiper('.features-mob__swiper', {
/* eslint-enable */
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
