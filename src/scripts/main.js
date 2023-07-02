'use strict';

const form = document.querySelector('form');
const toTop = document.querySelector('.page__to-top');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('page__body--with-menu')
    : document.body.classList.remove('page__body--with-menu');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 3500) {
    toTop.classList.add('page__to-top--active');
  } else {
    toTop.classList.remove('page__to-top--active');
  }
});
