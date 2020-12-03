'use strict';

const placeholder = document.querySelector('.video__container');
const buttons = document.querySelector('.video__play');
const video = document.querySelector('.video__file');

buttons.addEventListener('click', () => {
  placeholder.style.display = 'none';
  buttons.style.display = 'none';
  video.style.display = 'block';
});
