'use strict';

const menu = document.querySelector('.header__menu-icon');
const items = document.querySelectorAll('.menu__item');
const closeMenu = document.querySelector('.menu__icon-close');

menu.onclick = () => {
  let time = 200;

  items.forEach((item, index) => {
    item.style.animation = `menu 0.3s ${0.1 + index * 0.1}s`;

    setTimeout(() => {
      item.style.opacity = '1';
    }, time);
    time += 100;
  });
};

closeMenu.onclick = () => {
  items.forEach((item) => {
    item.style.animation = '';
    item.style.opacity = '0';
  });
};
