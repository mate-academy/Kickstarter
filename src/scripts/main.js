'use strict';

const wrapper = document.querySelector('.wrapper');
const toggler = document.querySelector('.menu__btn');

toggler.addEventListener('click', function() {
  wrapper.classList.toggle('wrapper--open');
});
