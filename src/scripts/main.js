'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__burger--with-menu');
  } else {
    document.body.classList.remove('page__burger--with-menu');
  }
});

document.querySelector('.contact-us__form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    // value from input (property)
    const firstNameInput = document
      .querySelector('.contact-us__field');

    const emailInput = document
      .querySelector('.form-field--textarea');
    // Send value to server

    firstNameInput.value = '';
    emailInput.value = '';
  }, false);
