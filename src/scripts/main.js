'use strict';

const aboutUsH = document.querySelector('.about-us__headline');
const aboutUsPctr = document.querySelector('.about-us__pctr');

if (window.matchMedia('(max-width: 767px)').matches) {
  aboutUsH.appendChild(aboutUsPctr);
}
