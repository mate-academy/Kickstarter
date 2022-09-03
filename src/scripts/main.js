'use strict';

// PREVENT PAGE RELOAD WHEN SUBMIT //

const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll('.contact__field');

function handler(event) {
  event.preventDefault();

  inputs.forEach((input) => {
    input.value = '';
  });
}

form.addEventListener('submit', handler);

// BURGER MENU //

const mobileNavButon = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButon.addEventListener('click', function() {
  mobileNavIcon.classList.toggle('mobile-nav-button__icon--active');
  mobileNav.classList.toggle('mobile-nav--active');
  document.body.classList.toggle('page__body--no-scroll');
});

// FEATURE SLIDER //

// eslint-disable-next-line max-len
// const slides = document.querySelectorAll('.features__article-content--slide');
// const sliderLine = document.querySelector('.features__article--slider-line');
