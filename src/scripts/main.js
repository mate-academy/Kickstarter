'use strict';

const form = document.querySelector('.question__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.addEventListener('hashchange', toggleScroll);

function toggleScroll() {
  const body = document.body;
  const menu = document.getElementById('page-menu');
  const menuComputedStyle = window.getComputedStyle(menu);

  if (menuComputedStyle.opacity === '1') {
    body.style.overflow = 'auto';
  } else {
    body.style.overflow = 'hidden';
  }
}


