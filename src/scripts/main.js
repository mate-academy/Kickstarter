'use strict';

let offset = 0;
const sliderLine = document.querySelector('#slider-line');

document.querySelector('#btn-forward').addEventListener('click', function() {
  offset -= 270;

  if (offset < -540) {
    offset = 0;
  }

  sliderLine.style.left = offset + 'px';

});

document.querySelector('#btn-back').addEventListener('click', function() {
  offset += 270;

  if (offset > 0) {
    offset = -540;
  }

  sliderLine.style.left = offset + 'px';
});
