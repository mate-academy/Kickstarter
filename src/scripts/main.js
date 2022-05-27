'use strict';

const video = document.querySelector('.presentation__video');
const splash = document.querySelector('.presentation__splash-screen');
const buttonPlay = document.querySelector('.presentation__play');
const buttonPause = document.querySelector('.presentation__stop-button');

buttonPlay.addEventListener('click', () => {
  splash.style.display = 'none';
  video.style.display = 'block';
  video.play();
  buttonPlay.style.display = 'none';
  buttonPause.style.display = 'block';
});

buttonPause.addEventListener('click', () => {
  video.pause();

  splash.style.display = 'block';
  buttonPlay.style.display = 'block';
  buttonPause.style.display = 'none';
});
