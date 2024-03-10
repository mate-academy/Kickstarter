'use strict';

const lang = document.querySelectorAll('.specs__link');
/* global alert */

for (let i = 0; i < lang.length; i++) {
  lang[i].addEventListener('click', () => {
    alert('The feature is still under development');
  });
}
