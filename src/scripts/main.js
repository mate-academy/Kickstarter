// 'use strict';

import Flickity from 'flickity';

/* eslint-disable no-unused-vars */
const flkty = new Flickity('.benefits__gallery', {
  // options
  cellAlign: 'center',
  wrapAround: true,
  autoPlay: 2000,
  contain: true,
  watchCSS: true,
  selectedAttraction: 0.05,
  friction: 0.3,
  prevNextButtons: false,
});

const flkty2 = new Flickity('.features__gallery', {
  // options
  cellAlign: 'center',
  wrapAround: true,
  autoPlay: 2000,
  contain: true,
  watchCSS: true,
  selectedAttraction: 0.05,
  friction: 0.3,
  pageDots: false,
  prevNextButtons: true,
  arrowShape: {
    x0: 0,
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x3: 0,
  },
  prevArrow: 'next',
  nextArrow: '<button class="carousel-next-button">next</button>',
});

/* eslint-enable no-unused-vars */

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page-overflow')
    : document.body.classList.remove('page-overflow');

  return menu;
};

// Функція, яка додоє клас container при ширині вікна більше мібльного
const windowElement = window;

function handleResize() {
  const windowWidth = window.innerWidth;
  const element = document.querySelector('.features__main');

  windowWidth > 744
    ? element.classList.add('container')
    : element.classList.remove('container');
}

windowElement.addEventListener('resize', handleResize);
