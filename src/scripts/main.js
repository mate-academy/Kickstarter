'use strict';

const left = document.querySelector('.features__mobile--left');
const right = document.querySelector('.features__mobile--right');
const section = document.querySelector('.features__content');
const block = document.querySelector('.features__mobile--block-1');
let item = 1;

left.addEventListener('click', (e) => {
  if (item === 0) {
    return;
  } else {
    item--;
  }

  if (item === 1) {
    section.children[0].style.display = 'block';
    section.children[2].style.display = 'none';
    section.children[1].style.display = 'none';
    block.textContent = '1';
  }

  if (item === 2) {
    section.children[0].style.display = 'none';
    section.children[2].style.display = 'none';
    section.children[1].style.display = 'block';
    block.textContent = '2';
  }
});

right.addEventListener('click', (e) => {
  if (item === 3) {
    return;
  }
  item++;

  if (item === 2) {
    section.children[0].style.display = 'none';
    section.children[2].style.display = 'none';
    section.children[1].style.display = 'block';
    block.textContent = '2';
  }

  if (item === 3) {
    right.classList.remove('features__shryft');
    left.classList.add('features__shryft');
    block.textContent = '3';
    section.children[0].style.display = 'none';
    section.children[2].style.display = 'block';
    section.children[1].style.display = 'none';
  }
});
