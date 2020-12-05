'use strict';

const sliderContent = document.querySelector('.technology__slider');

const prevBtn = document.querySelector('#prevBtn2');
const nextBtn = document.querySelector('#nextBtn2');

const pageNum = document.querySelector('#tech-page');

sliderContent.style.transition = 'transform 0.5s ease-in-out';

let counter = 0;
const counterMax = 2;

const width = sliderContent.clientWidth;

const size = width / 3;

pageNum.textContent = '0' + (counter + 1);

nextBtn.addEventListener('click', () => {
  if (counter >= counterMax) {
    return;
  };

  sliderContent.style.transform = 'translateX('
   + (-size * (counter + 1)) + 'px)';
  counter++;
  pageNum.textContent = '0' + (counter + 1);
  prevBtn.classList.add('buttons-box__button--active');

  if (counter === counterMax) {
    nextBtn.classList.remove('buttons-box__button--active');
  }
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) {
    return;
  };
  counter--;
  sliderContent.style.transform = 'translateX(' + (-size * counter) + 'px)';
  pageNum.textContent = '0' + (counter + 1);
  nextBtn.classList.add('buttons-box__button--active');

  if (counter === 0) {
    prevBtn.classList.remove('buttons-box__button--active');
  }
});
