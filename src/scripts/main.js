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
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

const headerTop = document.querySelector('.header__top');
const headerWrap = document.querySelector('.header__wrap');
const presentation = document.querySelector('.presentation');

const scrollAnimation = () => {
  const windowCenter = window.innerHeight / 2 + window.scrollY;
  const scrollOffSet = presentation.offsetTop;

  if (window.scrollY >= headerTop.offsetTop + 1) {
    headerTop.classList.add('header__top--top');
    headerWrap.classList.add('header__wrap--top');
  } else {
    headerTop.classList.remove('header__top--top');
    headerWrap.classList.remove('header__wrap--top');
  }

  if (windowCenter >= scrollOffSet) {
    presentation.classList.add('animation');
  }
};

scrollAnimation();

window.addEventListener('scroll', () => {
  scrollAnimation();
});
