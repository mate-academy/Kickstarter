'use strict';

const aboutUsH = document.querySelector('.about-us__headline');
const aboutUsPctr = document.querySelector('.about-us__pctr');
const technologyH = document.querySelector('.technology__headline');
const technologyPctr = document.querySelector('.technology__pctr');
const featuresSection = document.querySelectorAll('.feature__section');

if (window.matchMedia('(max-width: 767px)').matches) {
  aboutUsH.appendChild(aboutUsPctr);
  technologyH.appendChild(technologyPctr);
}

if (window.matchMedia('(max-width: 1023px)').matches) {
  for (let i = 0; i < featuresSection.length; i++) {
    if (i !== featuresSection.length - 1) {
      featuresSection[i].style.display = 'none';
    }
  }
}
