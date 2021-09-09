'use strict';

const list = document.querySelector('.slider__items');
const prev = document.querySelector('.slider__button--prev');
const next = document.querySelector('.slider__button--next');
const curCount = document.querySelector('.slider__current');
let position = 0;

function move(shift) {
  const count = list.children.length;

  position += shift;
  position = (position + count) % count;
  list.style.transform = `translateX(${-position * 100}%)`;
  curCount.textContent = `0${position + 1} `;
}

next.addEventListener('click', () => {
  move(1);
});

prev.addEventListener('click', () => {
  move(-1);
});
