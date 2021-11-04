'use strict';

const video = document.querySelector('.presentation__video');

const playButton = document.querySelector('.presentation__button-play');
const pauseButton = document.querySelector('.presentation__button-pause');

playButton.addEventListener('click', () => {
  video.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
  video.pause();
  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
});
