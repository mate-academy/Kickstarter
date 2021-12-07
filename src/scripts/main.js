'use strict';

const wrapper = document.querySelector('.wrapper');
const toggler = document.querySelector('.menu__btn');
const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__field');

toggler.addEventListener('click', function() {
  wrapper.classList.toggle('wrapper--open');
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  }
});
