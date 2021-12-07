'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// очищение форм после submit
const form = document.querySelector('.questions__form-box');
const inputs = document.querySelectorAll('.questions__form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  }
});
