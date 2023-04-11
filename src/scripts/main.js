'use strict';

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
