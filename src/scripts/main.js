'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();

  window.location.href = '#';
});

const vid = document.getElementById('myVid');
const Btn = document.getElementById('playBtn');

Btn.addEventListener('click', () => {
  vid.play();
});
