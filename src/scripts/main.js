'use strict';

const goTopButton = document.querySelector('.page__go-top');

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    goTopButton.style.pointerEvents = 'auto';
    goTopButton.style.opacity = '1';
  } else {
    goTopButton.style.opacity = '0';
    goTopButton.style.pointerEvents = 'none';
  }
});
