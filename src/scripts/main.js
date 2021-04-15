'use strict';

const burgerToggler = document.querySelector('.burger-toggler');
const nav = document.querySelector('.nav-burger');
const button = document.querySelector('#burgerToggler');

button.addEventListener('click', () => {
  burgerToggler.classList.toggle('burger-toggler--active');
  nav.classList.toggle('nav-burger--active');
});

const video = document.querySelector('video');

video.onclick = () => video.paused ? video.play() : video.pause();
