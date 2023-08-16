'use strict';

// Sliding mobile menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Prevent from submitting to (and refreshing) the page
const formHomepageBottom = document.querySelector('#form-homepage-bottom');
const inputs = document.querySelectorAll('.form__field');

formHomepageBottom.addEventListener('submit', function(e) {
  e.preventDefault();

  // Clear all input fields when submitted
  for (const input of inputs) {
    input.value = '';
  }
});

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
