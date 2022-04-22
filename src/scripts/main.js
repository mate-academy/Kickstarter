'use strict';

const page = document.querySelector('.page');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger-menu') {
    page.classList.add('page--with-menu');
  } else {
    page.classList.remove('page--with-menu');
  }
});

// form

document.querySelector('#form').addEventListener('submit', function(event) {
  const email = document.querySelector('#email').value;
  const text = document.querySelector('#textarea').value;

  document.querySelector('#email').value = '';
  document.querySelector('#textarea').value = '';

  event.preventDefault();

  return [email, text];
});

// form

let offset = 0;
const sliderLine = document.querySelector('#slider-line');

document.querySelector('#btn-forward').addEventListener('click', function() {
  offset -= 270;

  if (offset < -540) {
    offset = 0;
  }

  sliderLine.style.left = offset + 'px';

  if (offset === 0) {
    document.querySelector('#feaActImg').innerHTML = '01';
  } else {
    document.querySelector('#feaActImg').innerHTML
    = `0${Math.abs(offset / 270) + 1}`;
  }
});

document.querySelector('#btn-back').addEventListener('click', function() {
  offset += 270;

  if (offset > 0) {
    offset = -540;
  }

  sliderLine.style.left = offset + 'px';

  if (offset === 0) {
    document.querySelector('#feaActImg').innerHTML = '01';
  } else {
    document.querySelector('#feaActImg').innerHTML
    = `0${Math.abs(offset / 270) + 1}`;
  }
});
