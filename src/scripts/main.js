'use strict';

const video = document.querySelector('#video-presentation');
const button = document.querySelector('#video-presentation-button');
const checkbox = document.querySelector('#video-presentation-toggler');

video.addEventListener('ended', () => {
  video.load();

  if (checkbox.checked) {
    checkbox.checked = false;
  }
});

button.addEventListener('change', function handleClick() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
