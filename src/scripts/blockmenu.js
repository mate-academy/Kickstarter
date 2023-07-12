'use strict';

let isScrollBlocked = false;

document.querySelector(
  '.header__menu-opener').addEventListener('click', function() {
  if (!isScrollBlocked) {
    document.querySelector('.page__body').style.overflow = 'hidden';
    document.querySelector('header').style.overflow = 'hidden';
    document.querySelector('main').style.overflow = 'hidden';
    isScrollBlocked = true;
  } else {
    document.querySelector('.page__body').style.overflow = '';
    document.querySelector('header').style.overflow = '';
    document.querySelector('main').style.overflow = '';
    isScrollBlocked = false;
  }
});

document.querySelector('.menu__cross').addEventListener('click', function() {
  if (isScrollBlocked) {
    document.querySelector('.page__body').style.overflow = '';
    document.querySelector('header').style.overflow = '';
    document.querySelector('main').style.overflow = '';
    isScrollBlocked = false;
  }
});
