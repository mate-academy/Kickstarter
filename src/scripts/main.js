'use strict';

function toggleLang() {
  lang.forEach(item => item.classList.toggle('toolbar__lang--chosen'));
}

const lang = document.querySelectorAll('.toolbar__lang');

lang.forEach(item => item.addEventListener('click', toggleLang));

const blocks = document.querySelectorAll('.features__block');
const blocksCount = blocks.length;
const nextBlock = document.querySelector('.features__next-btn');
const prevBlock = document.querySelector('.features__prev-btn');
let count = 0;
const currentPage = document.querySelector('.features__current-page');

currentPage.innerHTML = `0${count + 1}`;

function showNextBlock() {
  blocks[count].classList.remove('features__block--active');

  if (count < blocksCount - 1) {
    count++;
    prevBlock.removeAttribute('disabled');
    currentPage.innerHTML = `0${count + 1}`;
  }

  if (count === blocksCount - 1) {
    nextBlock.setAttribute('disabled', '');
  }

  blocks[count].classList.add('features__block--active');
}

function showPrevBlock() {
  blocks[count].classList.remove('features__block--active');

  if (count > 0) {
    currentPage.innerHTML = `0${count}`;
    count--;
    nextBlock.removeAttribute('disabled');
  }

  if (count === 0) {
    prevBlock.setAttribute('disabled', '');
  }

  blocks[count].classList.add('features__block--active');
}

nextBlock.addEventListener('click', showNextBlock);
prevBlock.addEventListener('click', showPrevBlock);
