'use strict';

/* presentation video play-pause code */

const ctrlVideo = document.getElementById('video');
const button = document.getElementById('playpause');
let intFrameWidth = window.innerWidth;

if (!button.classList.contains('active')) {
  if (intFrameWidth < 768) {
    button.innerHTML = '<p class="video-pause"></p>';
  } else {
    button.innerHTML = 'Pause';
  }
} else {
  if (intFrameWidth < 768) {
    button.innerHTML = '<p class="video-play"></p>';
  } else {
    button.innerHTML = 'Play';
  }
}

window.addEventListener('resize', function(event) {
  intFrameWidth = window.innerWidth;

  if (!button.classList.contains('active')) {
    if (intFrameWidth < 768) {
      button.innerHTML = '<p class="video-pause"></p>';
    } else {
      button.innerHTML = 'Pause';
    }
  } else {
    if (intFrameWidth < 768) {
      button.innerHTML = '<p class="video-play"></p>';
    } else {
      button.innerHTML = 'Play';
    }
  }
});

button.addEventListener('click', function() {
  if (button.classList.contains('active')) {
    ctrlVideo.play();

    if (intFrameWidth < 768) {
      button.innerHTML = '<p class="video-pause"></p>';
    } else {
      button.innerHTML = 'Pause';
    }
    button.classList.toggle('active');
  } else {
    ctrlVideo.pause();

    if (intFrameWidth < 768) {
      button.innerHTML = '<p class="video-play"></p>';
    } else {
      button.innerHTML = 'Play';
    }
    button.classList.toggle('active');
  }
});

button.addEventListener('mouseleave', e => {
  if (!button.classList.contains('active')) {
    button.style.opacity = '0';
  }
});

button.addEventListener('mouseenter', e => {
  if (!button.classList.contains('active')) {
    button.style.opacity = '1';
  }
});
