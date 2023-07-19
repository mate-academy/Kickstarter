'use strict';

const menuLink = [...document.querySelectorAll('.menu__link')];
const b = document.querySelector('.menu__cross__lis');

b.addEventListener('click', function() {
  menuLink.map(a => a.classList.remove('menu__link--is-active'));
  b.classList.add('menu__link--is-active');
});
