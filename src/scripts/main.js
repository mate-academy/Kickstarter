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

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

const number = document.getElementById('number');

next.addEventListener('click', () => {
  if (one.style.display !== 'none') {
    one.style.display = 'none';
    two.style.display = 'block';
    number.innerHTML = '02';
  } else if (two.style.display !== 'none') {
    two.style.display = 'none';
    three.style.display = 'block';
    number.innerHTML = '03';
  }
});

prev.addEventListener('click', () => {
  if (two.style.display !== 'none') {
    two.style.display = 'none';
    one.style.display = 'block';
    number.innerHTML = '01';
  } else if (three.style.display !== 'none') {
    three.style.display = 'none';
    two.style.display = 'block';
    number.innerHTML = '02';
  }
});
