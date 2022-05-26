'use strict';

let offset = 0;
const sliderline = document.querySelector('.features__line');

document.querySelector('.features__next')
  .addEventListener('click', function() {
    offset = offset + 214;
    sliderline.style.top = -offset + 'px';
  });

document.querySelector('.features__prev')
  .addEventListener('click', function() {
    offset = offset - 214;
    sliderline.style.top = -offset + 'px';
  });
