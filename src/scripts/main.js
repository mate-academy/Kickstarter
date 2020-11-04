'use strict';

const mobMenu = document.querySelector('.mobile-nav');
const links = document.querySelectorAll('.mobile-nav__item');
const burger = document.querySelector('.burger');

burger.onclick = function() {
  this.classList.toggle('burger--active');

  if (this.classList.contains('burger--active')) {
    mobMenu.style.transform = 'translate(-8%)';
    document.body.style.overflow = 'hidden';
  } else {
    mobMenu.style.transform = 'translate(-108%)';
    document.body.style.overflow = 'visible';
  }
};

links.forEach(item => {
  item.onclick = function() {
    burger.classList.toggle('burger--active');
    mobMenu.style.transform = 'translate(-108%)';
    document.body.style.overflow = 'visible';
  };
});
