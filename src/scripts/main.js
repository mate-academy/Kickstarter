'use strict';

// eslint-disable-next-line no-undef
swiper = new Swiper('.swiper', {
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

// eslint-disable-next-line no-undef
swiper2 = new Swiper('.slider2', {
  pagination: {
    el: '.features__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.features__swiper-button-next',
    prevEl: '.features__swiper-button-prev',
  },
});
