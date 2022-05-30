'use strict';

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.form-field__field');

    inputs.forEach(input => {
      input.value = '';
    });
  });
});
