'use strict';

const form = document.querySelector('#form');

function submit(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', submit);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menuR') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
