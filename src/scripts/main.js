'use strict';

const form = document.querySelector('.contact-form__form');
const textarea = document.querySelector('.form-field--texterea');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  textarea.value = '';
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
