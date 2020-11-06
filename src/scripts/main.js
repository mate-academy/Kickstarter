'use strict';

const mobMenu = document.querySelector('.menu-mobile');

const links = document.querySelectorAll('.menu-mobile__item');

const burger = document.querySelector('.burger');

const video = document.querySelector('.presentation__clip');

const playBtn = document.querySelector('.presentation__play');

burger.onclick = function() {
  this.classList.toggle('burger--active');

  if (this.classList.contains('burger--active')) {
    mobMenu.style.transform = 'translate(-8%)';
    document.body.style.overflow = 'hidden';
  } else {
    mobMenu.style.transform = 'translate(-108%)';
    document.body.style.overflow = 'visible';
  }
};

links.forEach(item => {
  item.onclick = function() {
    burger.classList.toggle('burger--active');
    mobMenu.style.transform = 'translate(-108%)';
    document.body.style.overflow = 'visible';
  };
});

playBtn.onclick = function() {
  video.play();
  playBtn.style.display = 'none';
};

video.onpause = function() {
  playBtn.style.display = 'flex';
};
