'use strict';

const btnPlay = document.getElementById(`play-btn`);
const videoProduct = document.getElementById(`video`);

btnPlay.onclick = function() {
  videoProduct.src += `?autoplay=1`;

  setTimeout(function() {
    videoProduct.style.display = `block`;
  }, 200);
};
