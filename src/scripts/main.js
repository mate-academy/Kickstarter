'use strict';

const mobMenu = document.querySelector('.menu-mobile');

const burger = document.querySelector('.burger');

burger.onclick = function() {
  this.classList.toggle('burger--active');

  if (this.classList.contains('burger--active')) {
    mobMenu.style.left = '0';
    document.body.style.overflow = 'hidden';
  } else {
    mobMenu.style.left = '-100%';
  }
};

mobMenu.onclick = function() {
  burger.classList.toggle('burger--active');
  mobMenu.style.left = '-100%';
  document.body.style.overflow = 'visible';
};
