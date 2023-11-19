'use strict';

let count = 0;

const sliderLine = document.querySelector('.slider-line');
const currentSlider = document.querySelector('.slider__buttons__count-current');

document.querySelector('.slider__buttons__button-right')
  .addEventListener('click', () => {
    count += 260;

    if (count > 520) {
      count = 0;
    }

    sliderLine.style.left = -count + 'px';
    updateCurrentSlider();
  });

document.querySelector('.slider__buttons__button-left')
  .addEventListener('click', () => {
    count -= 260;

    if (count < 0) {
      count = 520;
    }

    sliderLine.style.left = -count + 'px';
    updateCurrentSlider();
  });

function updateCurrentSlider() {
  switch (count) {
    case 260:
      currentSlider.textContent = '02';
      break;
    case 520:
      currentSlider.textContent = '03';
      break;
    default:
      currentSlider.textContent = '01';
  }
}
