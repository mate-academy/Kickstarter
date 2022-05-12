'use strict';
/* eslint-disable no-undef */
/* eslint-disable no-new */

const swiperFeatur = document.querySelector('.featur-swiper');
const langEn = document.querySelector('.lang-block__lang--en');
const langUa = document.querySelector('.lang-block__lang--ua');

const nextActive = swiperFeatur.querySelector('.swiper-next-active');
const nextPassive = swiperFeatur.querySelector('.swiper-next-passive');
const prevActive = swiperFeatur.querySelector('.swiper-prev-active');
const prevPassive = swiperFeatur.querySelector('.swiper-prev-passive');

langUa.addEventListener('click', (e) => {
  langUa.classList.remove('lang-block__lang--passive');
  langEn.classList.add('lang-block__lang--passive');
  e.preventDefault();
});

langEn.addEventListener('click', (e) => {
  langEn.classList.remove('lang-block__lang--passive');
  langUa.classList.add('lang-block__lang--passive');
  e.preventDefault();
});

new Swiper('.benefits-swiper', {
  a11y: {
    enabled: true,
  },
});

const featurSwiper = new Swiper('.featur-swiper', {
  slidesPerView: 1,
  a11y: {
    enabled: true,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  spaceBetween: 23,
});

const currentPagi = swiperFeatur.querySelector('.swiper-pagination-current');
const totalPagi = swiperFeatur.querySelector('.swiper-pagination-total');

currentPagi.textContent = `0${featurSwiper.activeIndex + 1}`;
totalPagi.textContent = `03`;

featurSwiper.on('slideChange', function() {
  currentPagi.textContent = `0${featurSwiper.activeIndex + 1}`;
  totalPagi.textContent = `03`;

  if (featurSwiper.activeIndex === 2) {
    nextActive.setAttribute('hidden', true);
    nextPassive.removeAttribute('hidden');
    prevActive.removeAttribute('hidden');
    prevPassive.setAttribute('hidden', true);
  } else if (featurSwiper.activeIndex === 1) {
    nextActive.removeAttribute('hidden');
    nextPassive.setAttribute('hidden', true);
    prevActive.removeAttribute('hidden');
    prevPassive.setAttribute('hidden', true);
  } else if (featurSwiper.activeIndex === 0) {
    nextActive.removeAttribute('hidden');
    nextPassive.setAttribute('hidden', true);
    prevActive.setAttribute('hidden', true);
    prevPassive.removeAttribute('hidden');
  }
});
