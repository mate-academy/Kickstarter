'use strict';

const lang = document.querySelectorAll('.specs__link');
const slider = document.querySelector('.features__slider');
/* global alert */

for (let i = 0; i < lang.length; i++) {
  lang[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}

slider.addEventListener('click', () => {
  alert('The feature is still under development');
});
