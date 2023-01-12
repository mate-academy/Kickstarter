'use strict';

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
