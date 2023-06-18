'use strict';

window.location.hash = '';

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
