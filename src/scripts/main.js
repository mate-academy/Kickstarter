'use strict';

const forma = document.getElementById('form');

forma.addEventListener('submit', function(event) {
  event.preventDefault();
  forma.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('body--with-menu');
  } else {
    document.body.classList.remove('body--with-menu');
  }
});
