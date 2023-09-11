'use strict';

function toggleLang() {
  lang.forEach(item => item.classList.toggle('toolbar__lang--chosen'));
}

const lang = document.querySelectorAll('.toolbar__lang');

lang.forEach(item => item.addEventListener('click', toggleLang));
