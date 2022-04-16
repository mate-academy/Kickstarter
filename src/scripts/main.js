'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

const iframe = document.getElementById('iframe');
const iframePlaceholder = document.getElementById('iframe-placeholder');
const iframePlaceholderBtn = document.getElementById('iframe-placeholder-btn');

iframePlaceholderBtn.onclick = function() {
  if (iframePlaceholderBtn.style.display !== 'none'
  || iframePlaceholderBtn.style.display !== '') {
    iframe.style.display = 'block';
    iframePlaceholder.style.display = 'none';
  } else {
    iframe.style.display = 'none';
  }
};

const buttonLeft = document.querySelector('#m-block__button-left');
const buttonLeftBlack = document.querySelector('#m-block__button-left-2');
const buttonRight = document.querySelector('#m-block__button-right');
const buttonRightGrey = document.querySelector('#m-block__button-right-2');
const card1 = document.querySelector('#features-card-1');
const card2 = document.querySelector('#features-card-2');
const card3 = document.querySelector('#features-card-3');
const paginationFirst = document.querySelector('.m-block__page--first');
const paginationSecond = document.querySelector('.m-block__page--second');

buttonRight.onclick = function paginationRight() {
  if (card1.style.display !== 'none') {
    card1.style.display = 'none';
    card2.style.display = 'block';
    paginationFirst.classList.remove('m-block__page--focus');
    paginationSecond.classList.add('m-block__page--focus');
    buttonLeftBlack.style.display = 'unset';
    buttonLeft.style.display = 'none';
  } else if (card2.style.display !== 'none') {
    card2.style.display = 'none';
    card3.style.display = 'block';
    paginationFirst.classList.remove('m-block__page--focus');
    paginationSecond.classList.add('m-block__page--focus');
    paginationSecond.textContent = '03';
    paginationFirst.textContent = '02';
    buttonRightGrey.style.display = 'unset';
    buttonRight.style.display = 'none';
  }
};

buttonLeft.onclick = function paginationLeft() {
  if (card3.style.display !== 'none') {
    card3.style.display = 'none';
    card2.style.display = 'block';
    paginationFirst.classList.add('m-block__page--focus');
    paginationSecond.classList.remove('m-block__page--focus');
  } else if (card2.style.display !== 'none') {
    card2.style.display = 'none';
    card1.style.display = 'block';
    paginationFirst.classList.add('m-block__page--focus');
    paginationSecond.classList.remove('m-block__page--focus');
    paginationSecond.textContent = '02';
    paginationFirst.textContent = '01';
  }
};

buttonLeftBlack.onclick = function paginationLeft() {
  if (card3.style.display !== 'none') {
    card3.style.display = 'none';
    card2.style.display = 'block';
    paginationFirst.classList.add('m-block__page--focus');
    paginationSecond.classList.remove('m-block__page--focus');
    buttonRightGrey.style.display = 'none';
    buttonRight.style.display = 'unset';
  } else if (card2.style.display !== 'none') {
    card2.style.display = 'none';
    card1.style.display = 'block';
    paginationFirst.classList.add('m-block__page--focus');
    paginationSecond.classList.remove('m-block__page--focus');
    paginationSecond.textContent = '02';
    paginationFirst.textContent = '01';
    buttonLeftBlack.style.display = 'none';
    buttonLeft.style.display = 'unset';
  }
};

const langEN = document.getElementById('lang-en');

langEN.focus();
