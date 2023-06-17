'use strict';

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
