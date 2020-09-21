'use strict';

const mobMenu = document.querySelector('.menu-mobile');

const burger = document.querySelector('.burger');

const video = document.querySelector('.presentation__clip');

const playBtn = document.querySelector('.presentation__play');

burger.onclick = function() {
  this.classList.toggle('burger--active');

  if (this.classList.contains('burger--active')) {
    mobMenu.style.left = '0';
    document.body.style.overflow = 'hidden';
  } else {
    mobMenu.style.left = '-100%';
    document.body.style.overflow = 'visible';
  }
};

mobMenu.onclick = function() {
  burger.classList.toggle('burger--active');
  mobMenu.style.left = '-100%';
  document.body.style.overflow = 'visible';
};

playBtn.onclick = function() {
  video.play();
  // video.requestFullscreen();
  playBtn.style.display = 'none';
};
