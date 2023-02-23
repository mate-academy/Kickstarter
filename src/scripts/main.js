'use strict';

window.addEventListener('load', event => {
  const pageForm = document.querySelector('.questions__form');

  pageForm.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
  });
});

const burger = document.querySelector('.burger');
const hiddenBlockHeader = document.querySelector('.header__wrapper');

burger.addEventListener('click', e => {
  e.target.classList.toggle('burger-active');
  hiddenBlockHeader.classList.toggle('header__wrapper-visible');
});
