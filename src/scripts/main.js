'use strict';

const body = document.querySelector('.page__body');
const open = document.querySelector('.top-bar__icon--menu');
const close = document.querySelector('.top-bar__icon--close');
const menu = document.querySelector('.menu');
const scrollUp = document.querySelector('.body__scroll-up');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
  scrollUp.classList.add('hidden');
})

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
  scrollUp.classList.remove('hidden');
})

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    body.classList.remove('no-scroll');
    scrollUp.classList.remove('hidden');
  }
})
