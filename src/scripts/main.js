'use strict';

// убрать скролл с моб.меню
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// очищение форм после submit
const form = document.querySelector('.questions__form-box');
const inputs = document.querySelectorAll('.questions__form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  }
});

// старт-стоп видео через кнопку
const presentationVideo = document.querySelector('.presentation__video');
const buttonStart = document.querySelector('.presentation__button--start');
const buttonStop = document.querySelector('.presentation__button--stop');

buttonStart.addEventListener('click', () => {
  presentationVideo.play();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'flex';
});

buttonStop.addEventListener('click', () => {
  presentationVideo.pause();
  buttonStart.style.display = 'flex';
  buttonStop.style.display = 'none';
});
