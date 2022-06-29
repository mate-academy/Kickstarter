'use strict';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const btnPrev = document.querySelector('.slider__button-prev');
const btnNext = document.querySelector('.slider__button-next');
const list = document.querySelector('.features__list-slider');
const counter = document.querySelector('.slider__pagination-current');

let currentPosition = 0;

function moveTo(targetPosition) {
  if (targetPosition < 0) {
    currentPosition = 2;
  } else if (targetPosition > 2) {
    currentPosition = 0;
  } else {
    currentPosition = targetPosition;
  }

  counter.textContent = currentPosition + 1;

  list.style.transform = `translateX(${-currentPosition * 100}%)`;
}

btnNext.addEventListener('click', () => {
  moveTo(currentPosition + 1);
});

btnPrev.addEventListener('click', () => {
  moveTo(currentPosition - 1);
});
