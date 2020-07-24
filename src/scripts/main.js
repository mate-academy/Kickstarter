'use strict';

(function videoplayer() {
  const vid = document.querySelector('.movie__video');
  const img = document.querySelector('.movie__img');
  const play = document.querySelector('.movie__play-button');
  const darker = document.querySelector('.movie__darker');

  vid.onclick = function() {
    vid.pause();
    darker.style.display = 'block';
    img.style.display = 'block';
    play.style.display = 'block';
  };

  play.onclick = function() {
    darker.style.display = 'none';
    img.style.display = 'none';
    play.style.display = 'none';
    vid.play();
  };
})();
