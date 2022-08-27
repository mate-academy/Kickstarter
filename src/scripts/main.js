'use strict';

// SLIDER TOP + PAGINATION:
let slideIndex = 1;
const buttonPlus = document.querySelector('button[name=slide-plus]');
const buttonMinus = document.querySelector('button[name=slide-minus]');

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  const x = document.getElementsByClassName('benefits-mobile__item');
  const y = document.getElementsByClassName('benefits-mobile__pag');

  if (n > x.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    y[i].style.backgroundColor = '#cfeff0';
  }
  x[slideIndex - 1].style.display = 'flex';
  y[slideIndex - 1].style.backgroundColor = '#0db2b3';
}

showDivs(slideIndex);

buttonPlus.addEventListener('click', () => {
  plusDivs(1);
});

buttonMinus.addEventListener('click', () => {
  plusDivs(-1);
});

// SLIDER BOTTOM + PAGINATION:
let sliderIndex = 1;
const buttonPlus1 = document.querySelector('button[name=arrow-slider-plus]');
const buttonMinus1 = document.querySelector('button[name=arrow-slider-minus]');

function plusDivs2(n) {
  showDivs2(sliderIndex += n);
}

function showDivs2(n) {
  const x = document.getElementsByClassName('features__feature--slide');
  // const y = document.getElementsByClassName('benefits-mobile__pag');

  if (n > x.length) {
    sliderIndex = 1;
  }

  if (n < 1) {
    sliderIndex = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    // y[i].style.backgroundColor = '#cfeff0';
  }
  x[sliderIndex - 1].style.display = 'flex';
  // y[sliderIndex - 1].style.backgroundColor = '#0db2b3';
}

showDivs2(sliderIndex);

buttonPlus1.addEventListener('click', () => {
  plusDivs2(1);
  console.log('click')
});

buttonMinus1.addEventListener('click', () => {
  plusDivs2(-1);
});
