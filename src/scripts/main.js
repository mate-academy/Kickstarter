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

(function navShadow() {
  let posTop;

  window.onscroll = function() {
    posTop = (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : (document.documentElement
          || document.body.parentNode
          || document.body)
        .scrollTop;

    if (posTop > 672) {
      document.querySelector('.nav').style.boxShadow = '0 0 2px #0db2b3';
    }

    if (posTop <= 672) {
      document.querySelector('.nav').style.boxShadow = 'none';
    }
  };
})();
