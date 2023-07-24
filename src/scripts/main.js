'use strict';

const { default: Swiper } = require('swiper');

Swiper('.text-slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
