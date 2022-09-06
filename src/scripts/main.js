'use strict';

// Form Inputs clear after submit:
const form = document.querySelector('.contacts__form');
const inputs = document.querySelectorAll('.js-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  inputs.forEach((i) => {
    i.value = '';
  });
});

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
  } else if (n < 1) {
    slideIndex = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    // x[i].style.display = 'none';
    x[i].style.opacity = '0';
    x[i].style.transition = 'opacity 0.5s, transform 1s';
    y[i].style.backgroundColor = '#cfeff0';

    if (i >= slideIndex) {
      x[i].style.transform = 'translateX(100%)';
    } else if (i <= slideIndex) {
      x[i].style.transform = 'translateX(-100%)';
    }
    x[i].style.transition = 'opacity 0.5s, transform 1s';
    y[i].style.backgroundColor = '#cfeff0';
  }
  // x[i].style.display = 'flex';
  x[slideIndex - 1].style.transform = 'translateX(0)';
  x[slideIndex - 1].style.opacity = '1';
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
  const y = document.getElementsByClassName('features__pag');

  if (n > x.length) {
    sliderIndex = 1;
  } else if (n < 1) {
    sliderIndex = x.length;
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
    y[i].style.display = 'none';
  }
  x[sliderIndex - 1].style.display = 'flex';
  y[sliderIndex - 1].style.display = 'inline-block';
}

showDivs2(sliderIndex);

buttonPlus1.addEventListener('click', () => {
  plusDivs2(1);
});

buttonMinus1.addEventListener('click', () => {
  plusDivs2(-1);
});

const checkbox = document.querySelector('input[name=checkbox]');

window.addEventListener('hashchange', () => {
  if (window.location.hash !== '') {
    checkbox.checked = false;
  }
});
