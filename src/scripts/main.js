'use strict';

const form = document.querySelector('.question__form');
const inputs = document.querySelectorAll('.question__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
