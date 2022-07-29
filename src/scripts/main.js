'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-is-open');
  } else {
    document.body.classList.remove('page__body--menu-is-open');
  }
});

const sliderAutoWrapper = document.querySelector('.slider-auto__wrapper');
let offset = 0;

function sliderAuto() {
  offset += 100;

  if (offset > 300) {
    offset = 0;
  }
  sliderAutoWrapper.style.left = -offset + '%';
}

setInterval(sliderAuto, 8000);
