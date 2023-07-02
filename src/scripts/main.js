'use strict';

const form = document.querySelector('.question__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const pageMenu = document.getElementById('page-menu');

menuToggle.addEventListener('click', function() {
  openMenu();
});

menuClose.addEventListener('click', function() {
  closeMenu();
});

function openMenu() {
  pageMenu.style.opacity = '1';
  pageMenu.style.pointerEvents = 'auto';
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  pageMenu.style.opacity = '0';
  pageMenu.style.pointerEvents = 'none';
  document.body.style.overflow = 'auto';
}
