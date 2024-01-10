'use strict';

const sliderButtons = document.querySelector('.slider__button-wrap');
const slides = document.querySelectorAll('.slide');
const currentNum = document.querySelector('.slider__num--current');

sliderButtons.addEventListener('click', moveSlide);

let counter = 1;

function moveSlide({ target }) {
  const left = target.classList.contains('slider__button--right');

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  switch (true) {
    case left === true:
      if (counter === 3) {
        counter = 1;
      } else {
        counter++;
      }

      changeSlideNumber();
      break;

    default:
      if (counter === 1) {
        counter = 3;
      } else {
        counter--;
      }

      changeSlideNumber();
  }
}

function changeSlideNumber() {
  document.querySelector(`.slide--${counter}`).style.display = 'block';
  currentNum.textContent = `0${counter}`;
}
