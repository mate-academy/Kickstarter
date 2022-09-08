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
  document.body.classList.toggle('page__body--no-scroll');
  mobileNav.classList.toggle('mobile-nav--active');
});

// DISABLE SCROLL WHEN MENU OPEN //

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '#popup-menu') {
    mobileNavIcon.classList.remove('mobile-nav-button__icon--active');
    document.body.classList.remove('page__body--no-scroll');
    mobileNav.classList.remove('mobile-nav--active');
  }
});

// FEATURES SLIDER //

const list = document.querySelector('.features__article');
const prev = document.querySelector('.features__btn-left');
const next = document.querySelector('.features__btn-right');
const counter = document.querySelector('.features__counter');

let currentPosition = 1;
const count = list.children.length;

function moveTo(position) {
  currentPosition = position;

  if (currentPosition > count - 1) {
    currentPosition = 0;
  } else if (currentPosition < 0) {
    currentPosition = count - 1;
  }
  counter.textContent = '0' + (currentPosition + 1).toString();

  list.style.transform = `translateX(${-currentPosition * 100}%)`;
}

next.addEventListener('click', () => {
  moveTo(currentPosition + 1);
});

prev.addEventListener('click', () => {
  moveTo(currentPosition - 1);
});

// BENEFITS SLIDER //
