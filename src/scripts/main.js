'use strict';

const scrollTopButton = document.querySelector('.footer__arrow');

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    scrollTopButton.style.pointerEvents = 'auto';
    scrollTopButton.style.opacity = '1';
  } else {
    scrollTopButton.style.opacity = '0';
    scrollTopButton.style.pointerEvents = 'none';
  }
});
