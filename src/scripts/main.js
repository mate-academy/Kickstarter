'use strict';

const playButton = document.querySelector('.presentation__play-btn');
const video = document.querySelector('.presentation__video');

playButton.addEventListener('click', () => {
  video.classList.remove('presentation__video--hidden');
  playButton.classList.remove('presentation__play-btn');
});
