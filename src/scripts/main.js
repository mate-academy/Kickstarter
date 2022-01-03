'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const promoVideo = document.querySelector('.promo__video');
const buttonStart = document.querySelector('.promo__button--start');
const buttonStop = document.querySelector('.promo__button--stop');

buttonStart.addEventListener('click', () => {
  promoVideo.play();
  buttonStart.style.display = 'none';
  buttonStop.style.display = 'flex';
});

buttonStop.addEventListener('click', () => {
  promoVideo.pause();
  buttonStart.style.display = 'flex';
  buttonStop.style.display = 'none';
});

const form = document.querySelector('.contact-form__area');
const inputs = document.querySelectorAll('.contact-form__form-field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  }
});
