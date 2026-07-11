'use strict';

/* swiper */

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  speed: 300,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: (currentClass, totalClass) => {
      return `<span class="${currentClass}"></span><span class="features__pagination-divider">/</span><span class="${totalClass}"></span>`;
    },
  },
  navigation: {
    prevEl: '.features__arrow--prev',
    nextEl: '.features__arrow--next',
  },
  breakpoints: {
    1280: {
      enabled: false,
    },
  },
});

/* check form inputs */

const form = document.querySelector('.form-contact__form');
const inputs = form.querySelectorAll('.form-contact__input');

let submitAttempted = false;

const validateField = (field) => {
  const isValid = field.checkValidity();
  field.classList.toggle('form-contact__input--error', !isValid);
  return isValid;
};

inputs.forEach((field) => {
  field.addEventListener('input', () => {
    if (submitAttempted) {
      validateField(field);
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitAttempted = true;

  let isFormValid = true;

  inputs.forEach((field) => {
    if (!validateField(field)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    form.reset();
    submitAttempted = false;
  }
});
