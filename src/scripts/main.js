'use strict';

import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/main.scss';
import { initMobileSwiper } from './swiper.js';
import { initSlider } from './slider.js';
import { initFormValidation } from './form.js';
import { initLanguages } from './changeLanguage.js';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 900,
    once: false,
    offset: 150,
    easing: 'ease-in-out',
    disableMutationObserver: false,
  });
  initMobileSwiper();
  initSlider();
  initFormValidation();
  initLanguages();
});
