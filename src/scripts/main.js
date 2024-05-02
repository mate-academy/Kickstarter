'use strict';

// Button Bac-To-Top
const backtoTop = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 500) {
    backtoTop.style.opacity = '1';
  } else {
    backtoTop.style.opacity = '0';
  }
});

backtoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Unscroll only for Safari
const body = document.body;
const pageMenu = document.querySelector('.page__menu');
const iconMenu = document.querySelector('.icon--menu');

iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

pageMenu.addEventListener('click', () => {
  body.classList.remove('unscroll');
});
