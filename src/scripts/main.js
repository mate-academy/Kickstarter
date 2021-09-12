'use strict';
//turn off scroll on body when menu open
const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.header__burger');
const menu = document.querySelectorAll('.nav__link--mobile');
const cross = document.querySelector('.menu__cross');
const lang = document.querySelectorAll('.languages__country');

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
})

cross.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
})

menu.forEach((item) => {
  item.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  })
})

lang.forEach((item) => {
  item.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  })
})
