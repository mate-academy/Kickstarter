'use strict';
/* eslint-disable */

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');
const textarea = document.querySelector('.questions__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(elem => elem.value = '');

  textarea.value = '';
});
