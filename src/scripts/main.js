'use strict';

const videoPlayer = document.querySelector('.video-player');
const video = videoPlayer.querySelector('.video');
const playButton = videoPlayer.querySelector('.play-button');

playButton.addEventListener('click', (e) => {
  if (video.paused) {
    video.play();
    playButton.classList.remove('play-button--visiable');
    playButton.classList.add('play-button--opasity');
  } else {
    video.pause();
    playButton.classList.remove('play-button--opasity');
    playButton.classList.add('play-button--visiable');
  }

  if (playButton.hover) {
    e.hover.textContent = 'PLAY';
  }
});
