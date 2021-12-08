'use strict';

const form = document.querySelector('.question__form');
const inputs = document.querySelectorAll('.questions__input');
const textarea = document.querySelector('.questions__input--text');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });
  textarea.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__content--with-menu');
  } else {
    document.body.classList.remove('page__content--with-menu');
  }
});

// const video = document.querySelector('.presentation__item');
// const playBtn = document.querySelector('presentation__controls-play');
// const stopBtn = document.querySelector('presentation__controls-stop');

// function toggleVideo() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// playBtn.addEventListener('click', toggleVideo);

const presentationVideo = document.querySelector('.presentation__item');
const buttonStart = document.querySelector('.presentation__controls-play');
const buttonStop = document.querySelector('.presentation__controls-stop');

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
