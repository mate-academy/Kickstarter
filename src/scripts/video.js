'use strict';

/* Play/Pause */
const ppbutton = document.getElementById('luna_vid');
const vidBtn = document.getElementById('video-button');

ppbutton.addEventListener('click', playPause);
vidBtn.addEventListener('click', playPause);

const lunaVid = document.getElementById('luna_vid');

function playPause() {
  if (lunaVid.paused) {
    lunaVid.play(); /* Play video */
    /* Class added to hide button */
    vidBtn.classList.add('presentation__button--clickOn');
    vidBtn.classList.remove('presentation__button--clickOff');
    /* Class added to hide hover */
    lunaVid.classList.add('presentation__video--hover-off');
    lunaVid.classList.remove('presentation__video--hover-on');
  } else {
    lunaVid.pause();
    vidBtn.classList.add('presentation__button--clickOff');
    vidBtn.classList.remove('presentation__button--clickOn');

    lunaVid.classList.add('presentation__video--hover-on');
    lunaVid.classList.remove('presentation__video--hover-off');
  }
}
