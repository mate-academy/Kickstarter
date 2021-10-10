'use strict';

const list = document.querySelector('.booklet__card');
const pager = document.querySelector('.booklet__toggler-number-count--1');
const prev = document.querySelector('.booklet__button--prev');
const next = document.querySelector('.booklet__button--next');

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
