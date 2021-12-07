'use strict';

const wrapper = document.querySelector('.wrapper');
const toggler = document.querySelector('.top-bar__btn');

toggler.addEventListener('click', function() {
  wrapper.classList.toggle('wrapper--open');
});

const form = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__field');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const elem of inputs) {
    elem.value = '';
  };
});
