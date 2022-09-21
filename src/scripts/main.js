'use strict';

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.form__field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  inputs.forEach(function(elem) {
    elem.value = '';
  });
});
