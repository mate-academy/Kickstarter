'use strict';

const list = document.querySelector('.features__box');
const pager = document.querySelector('.features__toggler-number-count--1');
const prev = document.querySelector('.features__button--prev');
const next = document.querySelector('.features__button--next');

let position = 0;

move(0);

function move(shift) {
  const page = list.children.length;

  position += shift;

  next.disabled = position >= page - 1;
  prev.disabled = position <= 0;
  // position = (position + count) % count;
  pager.textContent = position + 1;

  list.style.transform = `translateX(${-position * 100}%)`;
}

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});
