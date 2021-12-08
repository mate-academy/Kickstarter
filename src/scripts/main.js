'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-phone') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');
const email = document.querySelector('.contact-us__field--email');
const textarea = document.querySelector('.contact-us__field--textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  email.value = '';
  textarea.value = '';
});
