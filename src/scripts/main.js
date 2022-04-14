'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
// const buttonLeft = document.getElementById('m-block__button-left');
// const buttonRight = document.getElementById('m-block__button-right');
// const paginationLeft = document.getElementById('m-block__pagination-left');
// const paginationRight = document.getElementById('m-block__pagination-right');
