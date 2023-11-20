'use strict';

const sliderButtons = document.querySelector('.slider__btn-wrap');
const slides = document.querySelectorAll('.slider__item');
const currentNum = document.querySelector('.slider__num--current');

sliderButtons.addEventListener('click', moveSlide);

let counter = 1;

function moveSlide({ target }) {
  const left = target.classList.contains('slider__btn--right');

  slides.forEach(slide => {
    slide.style.opacity = '0';
  });

  switch (true) {
    case left === true:
      if (counter === 3) {
        counter = 1;
      } else {
        counter++;
      }

      changeSlideData();
      break;

    default:
      if (counter === 1) {
        counter = 3;
      } else {
        counter--;
      }

      changeSlideData();
  }
}

function changeSlideData() {
  document.querySelector(`.slider__item--${counter}`).style.opacity = '1';
  currentNum.textContent = `0${counter}`;
}
