'use strict';

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.slider1', {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.slider2', {
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
