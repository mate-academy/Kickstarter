'use strict';

const list = document.querySelector('.slider');
const counter = document.querySelector('.counter');
const left = document.querySelector('.features__button--left');
const right = document.querySelector('.features__button--right');
let position = 0;

function move(shift) {
  const count = list.children.length;

  position = (position + shift + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
  counter.textContent = `0${position + 1}`;
}

right.addEventListener('click', function() {
  move(-1);
});

left.addEventListener('click', function() {
  move(1);
});

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.icon__menu--open');
const menu = document.querySelector('.about__list');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
