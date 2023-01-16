'use strict';

// Show menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Show arrow to top

const showArrow = document.querySelector('.arrow-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 450) {
    showArrow.classList.add('arrow-to-top--show');
  } else {
    showArrow.classList.remove('arrow-to-top--show');
  }
});
