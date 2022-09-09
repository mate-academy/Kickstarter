'use strict';

// remove scroll in menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// form actions
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.js-form-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
