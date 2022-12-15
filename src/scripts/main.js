'use strict';

// Slider functionality for `Features` section
function newSlider(slider) {
  const buttonPrevious = slider.querySelector('.nav-panel__button--prev');
  const buttonNext = slider.querySelector('.nav-panel__button--next');

  const cards = slider.querySelector('.features__cards');
  const slideCount = cards.childElementCount; // how many cards do we have

  const currentCard = slider.querySelector('.nav-panel__currentCard');

  let currentPosition = 0;

  function moveToPosition(targetPosition) {
    if (targetPosition < 0) {
      currentPosition = slideCount - 1;
    } else if (targetPosition > slideCount - 1) {
      currentPosition = 0;
    } else {
      currentPosition = targetPosition;
    }

    currentCard.textContent = currentPosition + 1;

    cards.style.transform = `translateX(${-currentPosition * 100}%)`;
  }

  buttonNext.addEventListener('click', () => {
    moveToPosition(currentPosition + 1);
  });

  buttonPrevious.addEventListener('click', () => {
    moveToPosition(currentPosition - 1);
  });

  moveToPosition(0); // reset on refresh
}

const sliderForFeatures = document.getElementById('slider-feature-cards');

newSlider(sliderForFeatures); // activate
