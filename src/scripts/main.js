'use strict';

const menu = document.querySelector('.burger-menu');
const btn = document.querySelector('.burger-menu__nav-tgl');
const link = document.querySelector('.burger-menu__nav');
const video = document.querySelector('.video-section__item');
const playBtn = document.querySelector('.video-section__play-button');
const body = document.body;

btn.addEventListener('click', event => {
  menu.classList.toggle('active');
  body.style.overflow = 'hidden';
});

link.addEventListener('click', event => {
  menu.classList.remove('active');
  body.style.overflow = 'visible';
});

playBtn.onclick = function() {
  video.play();
  playBtn.style.display = 'none';
};

video.onpause = function() {
  playBtn.style.display = 'flex';
};
