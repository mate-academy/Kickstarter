'use strict';

const preventSubmit = require('./prevent-submit');
const scrollUpArrow = require('./scroll-up');
const activeLink = require('./active-menu-link');
const matchMedia = require('./match-media');
const featureSlider = require('./feature-slider');

preventSubmit();
scrollUpArrow();
activeLink();
matchMedia();
featureSlider();

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
