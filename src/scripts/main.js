'use strict';

import { initLanguageSelector } from './modules/language-selector.js';
import { initFeaturesSlider } from './modules/features-slider.js';

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initFeaturesSlider();
});
