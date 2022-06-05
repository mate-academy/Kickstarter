'use strict';

const videoButton = document.querySelector('.about-us__play-button');
const videoButtonContainer
  = document.querySelector('.about-us__button-container');
const video = document.querySelector('.about-us__video');

videoButton.addEventListener('click', () => {
  videoButtonContainer.className = 'about-us__hidden';
  video.className = 'about-us__video--visible';
  video.play();
});

video.addEventListener('ended', () => {
  videoButtonContainer.className = 'about-us__button-container';
  video.className = 'about-us__video';
});

const form = document.querySelector('.questions__form');
const email = form.querySelector('.form__text--email');
const textMessage = form.querySelector('.form__text--description');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  email.value = '';
  textMessage.value = '';
});
