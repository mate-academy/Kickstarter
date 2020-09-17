'use strict';

function swapVideo() {
  player.src = this.getAttribute('data-video-url');
  player.load();
  player.play();
}

const videoPlayButtons = document.querySelectorAll('button');
const player = document.getElementById('player');

for (let i = 0; i < videoPlayButtons.length; i++) {
  videoPlayButtons[i].addEventListener('click', swapVideo);
}
