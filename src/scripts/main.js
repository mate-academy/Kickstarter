'use strict';

const list = document.querySelector('.slider__items');
const prev = document.querySelector('.slider__button--prev');
const next = document.querySelector('.slider__button--next');
const curCount = document.querySelector('.slider__current');
const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.header__menu-link');
const menuCloser = document.querySelector('.mobile-menu__cross-link');
const closeLinks = document.querySelectorAll('.nav__link');

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

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

menuCloser.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});

for (let i = 0; i < closeLinks.length; i++) {
  closeLinks[i].addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  });
}
