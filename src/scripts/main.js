'use strict';

const slider = document.querySelector('.features__slider');
const prevButton = document.querySelector('.features__button--left');
const nextButton = document.querySelector('.features__button--right');

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
