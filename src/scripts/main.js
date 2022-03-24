'use strict';

function play(id) {
  const video = document.querySelector(id);

  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

const button = document.querySelector('#video-presentation-button');

button.addEventListener('click', function handleClick() {
  play('#video-presentation');
});
