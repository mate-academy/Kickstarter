'use strict';

const slider = document.querySelector('.slider__content');
const prevButton = document.querySelector('.slider__button--prev');
const nextButton = document.querySelector('.slider__button--next');

let currentIndex = 0;

function move(newIndex) {
  if (newIndex < 0) {
    currentIndex = 2;
  } else if (newIndex > 2) {
    currentIndex = 0;
  } else {
    currentIndex = newIndex;
  }
}

nextButton.addEventListener('click', () => {
  move(currentIndex + 1);
  render();
  pageCounter();
});

prevButton.addEventListener('click', () => {
  move(currentIndex - 1);
  render();
  pageCounter();
});

function render() {
  slider.style.transform = `translateX(${currentIndex * -(100)}%`;
}

function pageCounter() {
  document.getElementById('slider__page').innerHTML = `0${currentIndex + 1}`;
}

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});
