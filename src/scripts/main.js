'use strict';

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.page__menu');
  const burger = document.querySelector('.top-bar__burger');
  const closeBtn = document.querySelector('.menu__close');
  const navLinks = document.querySelectorAll('.menu__nav .nav__link');

  const openMenu = () => {
    menu.classList.add('active');
    document.body.classList.add('no-scroll');
  };

  const closeMenu = () => {
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  burger.addEventListener('click', (e) => {
    e.preventDefault();
    openMenu();
  });

  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();

      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
});
