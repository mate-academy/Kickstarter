'use strict';

const menu = document.querySelector('.menu-for-mobile');
const toggler = document.querySelector('#nav-toggler');

toggler.addEventListener('click', () => {
  menu.classList.toggle('menu-for-mobile--active');
});
