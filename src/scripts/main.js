'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const pageUp = document.querySelector('.page__page-up-btn');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1200) {
    pageUp.classList.add('active');
  } else {
    pageUp.classList.remove('active');
  }
});
