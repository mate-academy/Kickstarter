'use strict';
// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');

// document.querySelector('.slider-next').addEventListener('click', function() {
//   offset = offset + 400;
//   if (offset > 900) {
//     offset = 0;
//   }
//   sliderLine.style.left = -offset + 'px'
// });

// document.querySelector('.slider-prev').addEventListener('click', function() {
//   offset = offset - 400;
//   if (offset < 0) {
//     offset = 1200;
//   }
//   sliderLine.style.left = -offset + 'px'
// });

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.questions__field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
