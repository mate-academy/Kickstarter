'use strict';

const form = document.querySelector('.form');
const inputs = document.querySelectorAll('.form__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((elem) => {
    elem.value = '';
  });
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    document.onkeydown = (e) => {
      if (e.which === 9) {
        return false;
      }
    };
  } else {
    document.body.classList.remove('page__body--with-menu');

    document.onkeydown = (e) => {
      if (e.which === 9) {
        return true;
      }
    };
  }
});

const presentationVideo = document.querySelector('.presentation__video');
const buttonStart = document.querySelector('.presentation__button--start');
const buttonStop = document.querySelector('.presentation__button--stop');

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
