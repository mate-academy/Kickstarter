'use strict';

const wrapper = document.querySelector('.menu');
const toggler = document.querySelector('.menu__button');

toggler.addEventListener('click', function() {
  wrapper.classList.toggle('menu--open');
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  };
});
