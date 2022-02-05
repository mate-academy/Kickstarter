'use strict';

const storyVideo = document.querySelector('.story__video');
const storyButtonPlay = document.querySelector('.story__button--play');
const storyButtonPause = document.querySelector('.story__button--pause');

storyButtonPlay.addEventListener('click', () => {
  storyVideo.play();
  storyButtonPlay.style.display = 'none';
  storyButtonPause.style.display = 'flex';
});

storyButtonPause.addEventListener('click', () => {
  storyVideo.pause();
  storyButtonPlay.style.display = 'flex';
  storyButtonPause.style.display = 'none';
});
