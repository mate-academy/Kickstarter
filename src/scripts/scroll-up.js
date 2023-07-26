'use strict';
/* Hide scroll arrow */

const scrollUp = document.querySelector('.scroll-up');

// Функція для показу/приховування знака scroll-up
function toggleScrollUp() {
  if (window.scrollY > 4000) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}

// Викликаємо функцію при завантаженні сторінки
toggleScrollUp();

// Додаємо подію прокручування сторінки
window.addEventListener('scroll', toggleScrollUp);

const arrowRight = document.querySelector('.features__control--right');
const arrowLeft = document.querySelector('.features__control--left');

const numberFirst = document.querySelector('.features__numbers--fist');
const featureSection = document.querySelectorAll('.feature__section');
const section1 = document.querySelector('.feature__section--1');
const section2 = document.querySelector('.feature__section--2');
const section3 = document.querySelector('.feature__section--3');

let counter = 1;

arrowRight.addEventListener('click', function() {
  counter++;
  numberFirst.textContent = '0' + counter;

  if (counter > featureSection.length) {
    counter = 1;
    numberFirst.textContent = '0' + counter;
  }

  if (counter === 1) {
    section1.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
  }

  if (counter === 2) {
    section2.style.display = 'block';
    section3.style.display = 'none';
    section1.style.display = 'none';
  }

  if (counter === 3) {
    section3.style.display = 'block';
    section2.style.display = 'none';
    section1.style.display = 'none';
  }
});

arrowLeft.addEventListener('click', function() {
  counter--;
  numberFirst.textContent = '0' + counter;

  if (counter < 1) {
    counter = featureSection.length;
    numberFirst.textContent = '0' + counter;
  }

  if (counter === 1) {
    section1.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
  }

  if (counter === 2) {
    section2.style.display = 'block';
    section3.style.display = 'none';
    section1.style.display = 'none';
  }

  if (counter === 3) {
    section3.style.display = 'block';
    section2.style.display = 'none';
    section1.style.display = 'none';
  }
});
