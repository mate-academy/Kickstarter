'use strict';

const { removeScroll } = require('./modules/removeScroll');
const { activeByScroll } = require('./modules/activeByScroll');
const { sliderAbout } = require('./modules/slider');
const { featuresSlider } = require('./modules/features-slider');
const { modal } = require('./modules/modal');
const { form } = require('./modules/form');

removeScroll('#menu');
activeByScroll('.page__page-up-btn');
sliderAbout();

featuresSlider('.slider__item',
  '.slider__arrow-left',
  '.slider-arrow-right',
  '.slider__index-active',
  '.slider__index-total',
  'slider__item--active');

modal('.modal', '.overlay', '.modal__close', '.button--open-modal');
form('feedback-form');
form('modal-form');
