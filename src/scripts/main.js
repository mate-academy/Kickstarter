'use strict';

const slider = document.querySelector('.slider__content');
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');

let curentIndex = 0;

function move(newIndex) {
  if (newIndex < 0) {
    curentIndex = 2;
  } else if (newIndex > 2) {
    curentIndex = 0;
  } else {
    curentIndex = newIndex;
  }
}

nextButton.addEventListener('click', () => {
  move(curentIndex + 1);
  render();
  pageCounter();
});

prevButton.addEventListener('click', () => {
  move(curentIndex - 1);
  render();
  pageCounter();
});

function render() {
  slider.style.transform = `translateX(${curentIndex * -(100)}%`;
}

function pageCounter() {
  document.getElementById('slider__page').innerHTML = `0${curentIndex + 1}`;
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
