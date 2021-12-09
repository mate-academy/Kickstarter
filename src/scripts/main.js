'use strict';

//  form
const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });
});

//  menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.onkeydown = (e) => {
      if (e.which === 9) {
        return false;
      }
    };
  } else {
    document.body.classList.remove('page__body--with-menu');

    document.onkeydown = (e) => {
      if (e.which === 9) {
        return true;
      }
    };
  }
});

//  presentation
const presentationVideo = document.querySelector('.presentation__video');
const buttonStart = document.querySelector('.presentation__button--start');
const buttonStop = document.querySelector('.presentation__button--stop');

buttonStart.addEventListener('click', () => {
  presentationVideo.play();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'block';
});

buttonStop.addEventListener('click', () => {
  presentationVideo.pause();
  buttonStart.style.display = 'block';
  buttonStop.style.display = 'none';
});

//  slider
let offset = 0;
const left = document.querySelector('.button--arrow-left');
const right = document.querySelector('.button--arrow-right');
const sliderLine = document.querySelector('.features__slider-line');

right.addEventListener('click', () => {
  offset += 260;

  if (offset > 520) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

left.addEventListener('click', () => {
  offset -= 260;

  if (offset < 0) {
    offset = 520;
  }
  sliderLine.style.left = -offset + 'px';
});

window.addEventListener(`resize`, event => {
  if (window.innerWidth > 767) {
    sliderLine.style.left = 0;
  }
}, false);
