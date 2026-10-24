'use strict';

const carousel = document.querySelector('.benefits__carousel');
const tracker = document.querySelector('.benefits__track');

let startPoint = 0;
let currentPoint = 0;
let isDragging = false;

const itemWidth = 260;
let activeItem = 0;

carousel.addEventListener('pointerdown', (event) => {
  if (window.screen.width > 640) {
    return;
  }

  startPoint = event.clientX;
  currentPoint = startPoint;
  isDragging = true;
});

carousel.addEventListener('pointermove', (event) => {
  if (!isDragging) {
    return;
  }

  currentPoint = event.clientX;

  const distance = currentPoint - startPoint;

  tracker.style.transform = `translateX(${-(activeItem * itemWidth) + distance}px)`;
});

carousel.addEventListener('pointerup', (event) => {
  if (!isDragging) {
    return;
  }

  const distance = currentPoint - startPoint;

  if (distance < -100 && activeItem < 3) {
    activeItem++;
  } else if (distance > 100 && activeItem > 0) {
    activeItem--;
  }

  tracker.style.transform = `translateX(-${activeItem * itemWidth}px)`;
  isDragging = false;
});

const arrowLeft = document.querySelector('.icon__arrow--left');
const arrowRight = document.querySelector('.icon__arrow--right');
const slide = document.querySelector('.features__slide');
const amount = document.querySelector('.feature__current');

let currentSlide = 0;

arrowRight.addEventListener('click', () => {
  if (currentSlide === 2) {
    return;
  }

  currentSlide++;

  slide.style.transform = `translateX(-${currentSlide * 260 + currentSlide * 20}px)`;
  amount.textContent = `0${currentSlide + 1}`;
});

arrowLeft.addEventListener('click', () => {
  if (currentSlide === 0) {
    return;
  }

  currentSlide--;

  slide.style.transform = `translateX(-${currentSlide * 260 + currentSlide * 20}px)`;
  amount.textContent = `0${currentSlide + 1}`;
});

const en = document.querySelectorAll('.lang__en');
const ua = document.querySelectorAll('.lang__ua');

en[0].addEventListener('click', () => {
  ua[0].style.color = '#828282';
  ua[1].style.color = '#828282';
  en[0].style.color = '#333';
  en[1].style.color = '#333';
});

ua[0].addEventListener('click', () => {
  en[0].style.color = '#828282';
  en[1].style.color = '#828282';
  ua[0].style.color = '#333';
  ua[1].style.color = '#333';
});

en[1].addEventListener('click', () => {
  ua[1].style.color = '#828282';
  ua[0].style.color = '#828282';
  en[1].style.color = '#333';
  en[0].style.color = '#333';
});

ua[1].addEventListener('click', () => {
  en[1].style.color = '#828282';
  en[0].style.color = '#828282';
  ua[1].style.color = '#333';
  ua[0].style.color = '#333';
});

const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.icon--burger-menu');


openMenu.addEventListener('click', () => {
  document.body.classList.add('page__body__no-scroll');
});

menu.addEventListener('click', () => {
  document.body.classList.remove('page__body__no-scroll');
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body__no-scroll');
  }
})

const form = document.querySelector('.questions__form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  input.value = '';
  textarea.value = '';
})
