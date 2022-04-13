'use strict';

const togglerOn = document.getElementById('menuOn');
const togglerOff = document.getElementById('menuOff');
const menu = document.getElementById('menu');
const menuNav = document.getElementById('menuNav');

togglerOn.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
  menuNav.style.display = 'contents';
  document.body.classList.add('page--with-menu');
});

togglerOff.addEventListener('click', () => {
  menu.style.transform = 'translateX(-100%)';
  document.body.classList.remove('page--with-menu');
});
