'use strict';

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([ Navigation, Pagination ]);

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const forma = document.getElementById('form');

forma.addEventListener('submit', function(event) {
  event.preventDefault();
  forma.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});

const videoWrapper = document.querySelector('.about__wrapper');
const video = document.getElementById('video');
const splash = document.querySelector('.about__movie');
const buttonPlay = document.querySelector('.about__movie-round');

buttonPlay.addEventListener('click', () => {
  splash.style.display = 'none';
  videoWrapper.style.display = 'flex';
  buttonPlay.style.display = 'none';
});
