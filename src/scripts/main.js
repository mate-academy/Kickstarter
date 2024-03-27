'use strict';

const cards = Array.from(document.querySelectorAll('.features__card'));
const leftBtn = document.querySelector('.features__slider-left');
const rightBtn = document.querySelector('.features__slider-right');
const currentPosition = document.querySelector('.features__slider-current');

let currentIndex = 0;

function updateSlider(direction) {
  cards[currentIndex].classList.remove('visible');

  if (direction === 'left') {
    currentIndex = Math.max(currentIndex - 1, 0);
  } else {
    currentIndex = Math.min(currentIndex + 1, cards.length - 1);
  }

  cards[currentIndex].classList.add('visible');
  currentPosition.textContent = `0${currentIndex + 1}`;

  leftBtn.classList.toggle('light', currentIndex === 0);
  rightBtn.classList.toggle('light', currentIndex === cards.length - 1);
}

leftBtn.addEventListener('click', () => updateSlider('left'));
rightBtn.addEventListener('click', () => updateSlider('right'));
