'use strict';

const sliderBox = document.querySelector('.features2__slider');
const sliderParts = document.querySelectorAll(
  '.features2__slider .features2__list'
);

const prevBtn = document.querySelector('#prevBtn3');
const nextBtn = document.querySelector('#nextBtn3');

const pageNum = document.querySelector('#feat-page');

let counter = 0;
const size = 260;

pageNum.textContent = '0' + (counter + 1);

nextBtn.addEventListener('click', () => {
  if (counter >= sliderParts.length - 1) {
    return;
  };
  sliderBox.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  sliderBox.style.transform = 'translateX(' + (-size * counter) + 'px)';
  pageNum.textContent = '0' + (counter + 1);
  prevBtn.classList.add('buttons-box__button--active');

  if (counter === sliderParts.length - 1) {
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
