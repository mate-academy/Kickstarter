'use strict';

const form = document.querySelector('.question__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
