'use strict';

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.menu-toggler--opener');
const menu = document.querySelector('.menu');
// We disable page scroll when openning the menu

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

// We enable page scrolling after closing the menu or pressing a nav link
menu.addEventListener('click', function() {
  body.classList.remove('page__body--with-menu');
});

createSlider(document.querySelector('.features__slider'));

// Эта функция активирует слайдер а переданном container
function createSlider(container) {
  // Ищем не во всём документе а в container
  const list = container.querySelector('.features__wrapper');
  const prev = container.querySelector('.features__prev');
  const next = container.querySelector('.features__next');

  let position = 0;

  function move(shift) {
    const count = list.children.length;

    position = (position + shift + count) % count;

    list.style.transform = `translateX(${-position * 100}%)`;
  }

  next.addEventListener('click', function() {
    move(1);
  });

  prev.addEventListener('click', function() {
    move(-1);
  });

  return { move };
}
