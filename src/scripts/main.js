'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  form.reset();
  e.preventDefault();
});

// Show arrow to top

const showArrow = document.querySelector('.arrow-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    showArrow.classList.add('arrow-top--show');
  } else {
    showArrow.classList.remove('arrow-top--show');
  }
});

// Show menu

const opener = document.querySelector('#opener');
const cross = document.querySelector('#cross');
const menu = document.querySelector('#menu');

const hideMenu = () => {
  menu.classList.remove('menu--show');
};

const showMenu = () => {
  menu.classList.add('menu--show');
};

opener.addEventListener('click', () => {
  showMenu();
});

cross.addEventListener('click', () => {
  hideMenu();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hideMenu();
  }
});
