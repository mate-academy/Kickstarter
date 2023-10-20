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

const check = document.querySelector('#menu__toggle-label');
const menuItem = document.querySelectorAll('.nav__js-close');

menuItem.forEach(el => {
  el.addEventListener('click', () => {
    check.checked = !check.checked;
  });
});

const headerTop = document.querySelector('.header__top');
const headerWrap = document.querySelector('.header__wrap');
const presentation = document.querySelector('.presentation__img');

const scrollAnimation = () => {
  if (window.scrollY >= headerTop.offsetTop + 1) {
    headerTop.classList.add('header__top--top');
    headerWrap.classList.add('header__wrap--top');
  } else {
    headerTop.classList.remove('header__top--top');
    headerWrap.classList.remove('header__wrap--top');
  }

  if (window.scrollY >= presentation.offsetTop - 500) {
    presentation.classList.add('animation');
  }
};

scrollAnimation();

window.addEventListener('scroll', () => {
  scrollAnimation();
});
