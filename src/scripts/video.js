'use strict';

/* Play/Pause */
const ppbutton = document.getElementById('video-button');

ppbutton.addEventListener('click', playPause);

const lunaVid = document.getElementById('luna_vid');

function playPause() {
  if (lunaVid.paused) {
    lunaVid.play();
    ppbutton.classList.add('presentation__button--clickOn');
    ppbutton.classList.remove('presentation__button--clickOff');
  } else {
    lunaVid.pause();
    ppbutton.classList.add('presentation__button--clickOff');
    ppbutton.classList.remove('presentation__button--clickOn');
  }
}
