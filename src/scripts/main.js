'use strict';

const pageUp = document.querySelector('.page__page-up-btn');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 600) {
    pageUp.classList.add('active');
  } else {
    pageUp.classList.remove('active');
  }
});
