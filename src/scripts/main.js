'use strict';

const form = document.getElementById('main-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  e.stopPropagation();

  const inputs = document.getElementsByClassName('main__form-input');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
});
