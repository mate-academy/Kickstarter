'use strict';

const forma = document.getElementById('form');

forma.addEventListener('submit', function(event) {
  event.preventDefault();
  forma.reset();
});
