'use strict';

const videoButton = document.querySelector('.button--video');
const video = document.querySelector('.main-content__video');

videoButton.addEventListener('click', () => {
  videoButton.style.setProperty('display', 'none');
  video.setAttribute('controls', '');
  video.play();
});

video.addEventListener('click', () => {
  videoButton.style.setProperty('display', 'flex');
  video.removeAttribute('controls', '');
  video.pause();
});
