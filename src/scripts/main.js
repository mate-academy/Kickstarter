'use strict';

const form = document.querySelector('.question__form');
const inputs = document.querySelectorAll('.question__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

const presentationVideo = document.querySelector('.presentation__img');
const buttonStart = document.querySelector('.presentation__play');
const buttonStop = document.querySelector('.presentation__stop');

buttonStart.addEventListener('click', () => {
  presentationVideo.play();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'block';
});

buttonStop.addEventListener('click', () => {
  presentationVideo.pause();
  buttonStart.style.display = 'block';
  buttonStop.style.display = 'none';
});
