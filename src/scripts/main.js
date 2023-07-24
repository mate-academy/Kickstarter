'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#mob-menu') {
    document.body.classList.add('page__container--width-menu');
  } else {
    document.body.classList.remove('page__container--width-menu');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form-field');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
