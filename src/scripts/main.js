'use strict';

// Menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Presentation

const playButton = document.querySelector('.presentation__play-btn');
const video = document.querySelector('.presentation__video');

playButton.addEventListener('click', () => {
  video.classList.remove('presentation__video--hidden');
  playButton.classList.remove('presentation__play-btn');
});

// Form
const form = document.querySelector('.questions__form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
