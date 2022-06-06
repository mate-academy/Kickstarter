'use strict';

const list = document.querySelector('.features__slider');
const buttonL = document.querySelector('.features__button--left');
const buttonR = document.querySelector('.features__button--right');

buttonL.addEventListener('click', () => {
  list.style.transform = `translateX(-100%)`;
});

buttonR.addEventListener('click', () => {
  list.style.transform = `translateX(100%)`;
});
