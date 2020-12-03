'use strict';

const sliderBox = document.querySelector('.technology__container');
const sliderContent = document.querySelector('.technology__slider');

const prevBtn = document.querySelector('#prevBtn2');
const nextBtn = document.querySelector('#nextBtn2');

const pageNum = document.querySelector('#tech-page');

let counter = 0;
const counterMax = 3;

const width = sliderContent.clientWidth;

const size = width / 3;

pageNum.textContent = '0' + (counter + 1);

nextBtn.addEventListener('click', () => {
  if (counter >= counterMax) {
    return;
  };
  sliderBox.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
  pageNum.textContent = '0' + (counter + 1);
  prevBtn.classList.add('buttons-box__button--active');

  if (counter === counterMax - 1) {
    nextBtn.classList.remove('buttons-box__button--active');
  }
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  };
  sliderBox.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
  pageNum.textContent = '0' + (counter + 1);
  nextBtn.classList.add('buttons-box__button--active');

  if (counter === 0) {
    prevBtn.classList.remove('buttons-box__button--active');
  }
});
