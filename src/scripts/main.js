'use strict';

import { initLanguageSelector } from './modules/language-selector.js';
import { initFeaturesSlider } from './modules/features-slider.js';
import { initFormHandler } from './modules/form-handler.js';

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initFeaturesSlider();
  initFormHandler();
});
