'use strict';

const body = document.querySelector('.page__body');
const open = document.querySelector('.top-bar__icon--menu');
const close = document.querySelector('.top-bar__icon--close');
const menu = document.querySelector('.menu');
const scrollUp = document.querySelector('.body__scroll-up');

open.addEventListener('click', () => {
  body.classList.add('no-scroll');
  scrollUp.classList.add('hidden');
});

close.addEventListener('click', () => {
  body.classList.remove('no-scroll');
  scrollUp.classList.remove('hidden');
});

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    body.classList.remove('no-scroll');
    scrollUp.classList.remove('hidden');
  }
});

const cards = document.querySelectorAll('.feature-card');
const right = document.querySelector('.switcher__arrow--right');
const left = document.querySelector('.switcher__arrow--left');
const cardNumber = document.querySelector('.switcher__card-number');
const numbers = ['02', '03', '01'];
let index = 2;

left.addEventListener('click', () => {
  changeCard(-1);
});

right.addEventListener('click', () => {
  changeCard(1);
});

function changeCard(value) {
  cards[index].classList.add('feature-card--hidden');

  if (value === 1 && index === 0) {
    right.classList.add('switcher__arrow--right--disabled');
  }

  if (value === -1 && index === 1) {
    right.classList.remove('switcher__arrow--right--disabled');
  }

  if (value === -1 && index === 0) {
    left.classList.add('switcher__arrow--left--disabled');
  }

  if (value === 1 && index === 2) {
    left.classList.remove('switcher__arrow--left--disabled');
  }

  index += value;

  if (index === 3) {
    index = 0;
  }

  if (index === -1) {
    index = 2;
  }

  cards[index].classList.remove('feature-card--hidden');
  cardNumber.textContent = numbers[index];
}
