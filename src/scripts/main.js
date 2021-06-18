'use strict';

const checkbox = document.querySelector('.burger__toggle');
const menu = document.querySelector('.burger__list');

checkbox.addEventListener('click', () => {
  menu.classList.toggle('burger__list--active');
  checkbox.classList.toggle('burger__toggle--active');
});

menu.addEventListener('click', () => {
  menu.classList.remove('burger__list--active');
  checkbox.classList.remove('burger__toggle--active');
});
