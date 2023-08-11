'use strict';

document.querySelector('#consult').addEventListener('submit',
  function(event) {
    event.preventDefault();

    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
