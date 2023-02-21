'use strict';

window.addEventListener('load', event => {
  const pageForm = document.querySelector('.questions__form');

  pageForm.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
  });
});
