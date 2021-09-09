'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.header__menu--menu-opener');
const menuCloser = document.querySelector('.menu__closer');

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
