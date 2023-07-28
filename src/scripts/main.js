// 'use strict';

import Flickity from 'flickity';

/* eslint-disable no-unused-vars */
const flkty = new Flickity('.main-gallery', {
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
/* eslint-enable no-unused-vars */

window.onhashchange = (e) => {
  const menu = e.newURL.includes('#menu')
    ? document.body.classList.add('page-overflow')
    : document.body.classList.remove('page-overflow');

  return menu;
};
