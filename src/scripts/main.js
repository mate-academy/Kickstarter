'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger') {
    document.body.classList.add('page__body--with-burger');
  } else {
    document.body.classList.remove('page__body--with-burger');
  }
});

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__input');

function handler(event) {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);
