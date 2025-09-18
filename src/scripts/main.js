'use strict';

const form = document.querySelector('.questions__form');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  this.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.page__menu');
  const burger = document.querySelector('.header__burger');
  const closeBtn = document.querySelector('.menu__close');
  const navLinks = document.querySelectorAll('.menu__nav .nav__link');
  const body = document.body;

  let scrollPosition = 0;

  const openMenu = () => {
    scrollPosition = window.scrollY;
    menu.classList.add('active');
    body.style.position = 'fixed';
    body.style.top = `-${scrollPosition}px`;
    body.style.left = '0';
    body.style.right = '0';
  };

  const closeMenu = () => {
    menu.classList.remove('active');
    body.style.position = '';
    body.style.top = '';
    body.style.left = '';
    body.style.right = '';
    window.scrollTo(0, scrollPosition);
  };

  burger.addEventListener('click', openMenu);

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  navLinks.forEach((link) => link.addEventListener('click', closeMenu));
});

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.menu__nav .nav__link');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
