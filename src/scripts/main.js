'use strict';

const aboutUsH = document.querySelector('.about-us__headline');
const aboutUsPctr = document.querySelector('.about-us__pctr');
const technologyH = document.querySelector('.technology__headline');
const technologyPctr = document.querySelector('.technology__pctr');
const featuresSection = document.querySelectorAll('.feature__section');
const scrollUp = document.querySelector('.scroll-up');

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

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20
    || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
}

const menuLink = [...document.querySelectorAll('.menu__link')];

menuLink.map(a => a.addEventListener('click', function() {
  menuLink.map(b => b.classList.remove('menu__link--is-active'));
  a.classList.add('menu__link--is-active');
}));
