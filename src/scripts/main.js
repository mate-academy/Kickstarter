'use strict';

import { initLanguageSelector } from './modules/language-selector.js';2

document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
});
