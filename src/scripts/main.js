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

function newSlider(slider) {
  const btnPrev = slider.querySelector('.slider__button-prev');
  const btnNext = slider.querySelector('.slider__button-next');
  const list = slider.querySelector('.slider__list');
  const counter = slider.querySelector('.slider__pagination-current');

  const slideCount = list.childElementCount;

  let currentPosition = 0;

  function moveTo(targetPosition) {
    if (targetPosition < 0) {
      currentPosition = slideCount - 1;
    } else if (targetPosition > slideCount - 1) {
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
}

const slider1 = document.getElementById('slider-1');
const slider2 = document.getElementById('slider-2');

newSlider(slider1);
newSlider(slider2);
