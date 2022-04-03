'use strict';

//  page__body--with-menu - disable page scrolling under the menu
const menu = document.querySelector('.nav');
const iconMenu = document.querySelector('.icon--menu');
const burgerMenu = document.querySelector('.burger');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    menu.classList.add('nav--toggle');
    burgerMenu.classList.add('burger--animation-1');
    burgerMenu.classList.add('burger--animation-2');
    document.body.classList.add('page__body--with-menu');
    iconMenu.setAttribute('href', '#');
  } else {
    menu.classList.remove('nav--toggle');
    burgerMenu.classList.remove('burger--animation-1');
    burgerMenu.classList.remove('burger--animation-2');
    document.body.classList.remove('page__body--with-menu');
    iconMenu.setAttribute('href', '#menu');
  }
});
