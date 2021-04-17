'use strict';

const burger = document.getElementById('burger');
const nav = document.getElementById('mobile__nav');

burger.onclick = function() {
  this.classList.toggle('change');

  if (nav.style.visibility === 'visible') {
    nav.style.visibility = 'hidden';
    nav.style.bottom = '100vh';
  } else {
    nav.style.visibility = 'visible';
    nav.style.bottom = '0';
  };
};
