'use strict';

const form = document.querySelector('.footer__form');

const sendButton = document.querySelector(
  '.form__button'
);

sendButton.addEventListener('click', e => {
  form.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});
