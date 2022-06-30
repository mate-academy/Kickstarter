'use strict';

const { removeScroll } = require('./modules/removeScroll');
const { activeByScroll } = require('./modules/activeByScroll');
const { checkMedia } = require('./modules/checkMedia');
const { slider } = require('./modules/slider');
const { featuresSlider } = require('./modules/features-slider');

removeScroll('#menu');
activeByScroll('.page__page-up-btn');

checkMedia(slider('.slider-about',
  '.slider-about__slide',
  '.slider-about__btn--left',
  '.slider-about__btn--right',
  '.dots',
  '.wrapper'));
window.addEventListener('resize', checkMedia);

featuresSlider('.slider__item', '.slider__arrow-left',
  '.slider-arrow-right', '.slider__index-active', '.slider__index-total',
  'slider__item--active');
