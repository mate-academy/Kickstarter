'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#Menu'){
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'auto';
  }
});

const form = document.getElementById('Myform');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});