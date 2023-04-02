'use strict';

// swiper
/* global Swiper */

const swiper = new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.enable();

// form-reset
const form = document.getElementById('form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
