'use strict';

const slider = document.querySelector('.slider');
const list = slider.querySelector('.slider__wraper--overflow');
const prev = slider.querySelector('.slider__buttons-prev');
const next = slider.querySelector('.slider__buttons-next');

let PositionNow = 0;

const count = list.children.length;

const dots = slider.querySelectorAll('.slider__dots-dot');

moveTo(0);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener('click', () => {
    moveTo(i);
  });
}

next.addEventListener('click', () => {
  moveTo(PositionNow + 1);
});

prev.addEventListener('click', () => {
  moveTo(PositionNow - 1);
});

function moveTo(position) {
  let horisontalX = position;

  if (dots[PositionNow]) {
    dots[PositionNow].querySelector('.fill').setAttribute('fill', '#333333');
  }

  horisontalX = horisontalX % count;

  if (horisontalX < 0) {
    horisontalX = count - 1;
  }

  PositionNow = horisontalX;

  if (dots[PositionNow]) {
    dots[PositionNow].querySelector('.fill').setAttribute('fill', '#0db2b3');
  }

  list.style.transform = `translateX(${-horisontalX * 100}%)`;
}
