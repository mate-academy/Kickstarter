'use strict';

// removing reloading page =======================
document.querySelector('#form').addEventListener('submit', function(event) {
  const email = document.querySelector('#email').value;
  const text = document.querySelector('#textarea').value;

  document.querySelector('#email').value = '';
  document.querySelector('#textarea').value = '';

  event.preventDefault();

  return [email, text];
});

// burger menu remove scroll =======================
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#burger-menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// slider =======================
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
