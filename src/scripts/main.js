'use strict';

const wrapper = document.querySelector('.menu');
const toggler = document.querySelector('.menu__button');

toggler.addEventListener('click', function() {
  wrapper.classList.toggle('menu--open');
});

function getDynamicInformation(selector) {
  const input = document.querySelector(selector);

  input.addEventListener('input', () => {
    if (input.value.match(/[@]/g)) {
      input.style.border = '1px solid green';
    } else {
      input.style.border = '1px solid red';
    }
  });

  const form = document.querySelector('.questions__form');
  const inputs = document.querySelectorAll('.questions__field');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    for (const elem of inputs) {
      elem.value = '';
      input.style.border = '';
    }
  });
}
getDynamicInformation('.questions__field');
