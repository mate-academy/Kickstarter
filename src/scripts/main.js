'use strict';

const page = document.querySelector('.page');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    page.style.overflowY = 'hidden';
  } else {
    page.style.overflowY = 'scroll';
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  form.reset();
});
