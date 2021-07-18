'use strict';

const sliderNext = document.querySelector('.slider__next');
const sliderPrev = document.querySelector('.slider__prev');
const listCount = document.querySelectorAll('.slider__list').length;
const sliderLine = document.querySelector('.slider__line');
const sliderCounter = document.querySelector('.slider__count');
const listWidth = document.querySelector('.slider__list').offsetWidth;

let offset = 0;

document.querySelector('.slider__nav').addEventListener('click', (ev) => {
  if (ev.path[0] === sliderNext) {
    offset += listWidth;
    sliderCounter.innerHTML++;

    if (offset >= listWidth * listCount) {
      offset = 0;
      sliderCounter.innerHTML = 1;
    }

    sliderLine.style.left = -offset + 'px';
  } else if (ev.path[0] === sliderPrev) {
    offset += listWidth;
    sliderCounter.innerHTML--;

    if (offset > 0) {
      offset = -listWidth * (listCount - 1);
      sliderCounter.innerHTML = listCount;
    }

    sliderLine.style.left = offset + 'px';
  }
});
