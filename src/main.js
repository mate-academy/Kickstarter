'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--in-menu');
  } else {
    document.body.classList.remove('page__body--in-menu');
  }
});

const form = document.querySelector('.contact-us__form-fields');

form.addEventListener('submit', handleEvent);

function handleEvent(event) {
  event.preventDefault();
  form.reset();
}
