'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function newSlider(slider) {
  const btnPrev = slider.querySelector('.slider__button--prev');
  const btnNext = slider.querySelector('.slider__button--next');
  const list = slider.querySelector('.futures__card-block');
  const counter = slider.querySelector('.slider__counter');

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

  moveTo(0);
}

const slider1 = document.getElementById('slider1');

newSlider(slider1, true);
