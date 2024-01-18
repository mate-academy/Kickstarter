'use strict';

let n = 1;
const item1 = document.querySelector('.slider-item1');
const item2 = document.querySelector('.slider-item2');
const item3 = document.querySelector('.slider-item3');
const nextBtn = document.querySelector('.section5__content--switcher--next');
const prevBtn = document.querySelector('.section5__content--switcher--prev');
const str = '.section5__content--switcher--count--current';
const current = document.querySelector(str);

currentSlide();
addActive();

nextBtn.addEventListener('click', () => {
  n += 1;

  if (n > 3) {
    n = 1;
  }

  currentSlide();
  addActive();
});

prevBtn.addEventListener('click', () => {
  n -= 1;

  if (n < 1) {
    n = 3;
  }

  currentSlide();
  addActive();
});

function currentSlide() {
  current.textContent = n;
}

function addActive() {
  item1.classList.remove('active');
  item2.classList.remove('active');
  item3.classList.remove('active');

  if (n === 1) {
    item1.classList.add('active');
  } else if (n === 2) {
    item2.classList.add('active');
  } else {
    item3.classList.add('active');
  }
}
