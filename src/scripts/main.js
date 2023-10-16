/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const swiper1 = new Swiper('.swiper__systems', {
  loop: true,

  pagination: {
    el: '.swiper__systems-pagination',
    clickable: true,
  },
});

const swiper2 = new Swiper('.swiper__features', {
  loop: true,

  pagination: {
    el: '.swiper__features-pagination',
    clickable: true,
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return '0<span class="' + currentClass + '"></span>'
        + '<div class="swiper-pagination-wrapper"> / 0<span class="'
        + totalClass + '"></span></div>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('scroll', () => {
  const arrow = document.querySelector('.page__arrow-up');

  arrow.classList.toggle('page__arrow-up--active', window.scrollY > 100);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('click', () => {
  const video = document.querySelector('.video__wraper');
  const videoFirst = document.querySelector('.video__first');

  video.removeChild(videoFirst);
});
