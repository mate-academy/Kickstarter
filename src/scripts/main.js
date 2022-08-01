const aboutUsH = document.querySelector('.about-us__headline');
const aboutUsPctr = document.querySelector('.about-us__pctr');
const technologyH = document.querySelector('.technology__headline');
const technologyPctr = document.querySelector('.technology__pctr');
const featuresSection = document.querySelectorAll('.feature__section');
const scrollUp = document.querySelector('.scroll-up');
const menuLink = [...document.querySelectorAll('.menu__link')];
const form = document.querySelector('.form');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* Put a headline before the picture */

if (window.matchMedia('(max-width: 767px)').matches) {
  aboutUsH.appendChild(aboutUsPctr);
  technologyH.appendChild(technologyPctr);
}

/* Hide features sections on max-width: 1023px */

if (window.matchMedia('(max-width: 1023px)').matches) {
  for (let i = 0; i < featuresSection.length; i++) {
    if (i !== featuresSection.length - 1) {
      featuresSection[i].style.display = 'none';
    }
  }
}

/* Hide scroll arrow */

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

/* Change checked active menu-link */

menuLink.map(a => a.addEventListener('click', function() {
  menuLink.map(b => b.classList.remove('menu__link--is-active'));
  a.classList.add('menu__link--is-active');
}));

/* Prevent sumbit form */

form.addEventListener('submit', function(event) {
  event.preventDefault();
});

/* Slider */

const arrowRight = document.querySelector('.features__control--right');
const arrowLeft = document.querySelector('.features__control--left');

const numberFirst = document.querySelector('.features__numbers--fist');
const section1 = document.querySelector('.feature__section--1');
const section2 = document.querySelector('.feature__section--2');
const section3 = document.querySelector('.feature__section--3');
let counter = 1;

arrowRight.addEventListener('click', function() {
  counter++;
  numberFirst.textContent = '0' + counter;

  if (counter > 3) {
    counter = 1;
    numberFirst.textContent = '0' + counter;
  }

  if (counter === 1) {
    section1.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
  }

  if (counter === 2) {
    section2.style.display = 'block';
    section3.style.display = 'none';
    section1.style.display = 'none';
  }

  if (counter === 3) {
    section3.style.display = 'block';
    section2.style.display = 'none';
    section1.style.display = 'none';
  }
});

arrowLeft.addEventListener('click', function() {
  counter--;
  numberFirst.textContent = '0' + counter;

  if (counter < 1) {
    counter = 3;
    numberFirst.textContent = '0' + counter;
  }

  if (counter === 1) {
    section1.style.display = 'block';
    section2.style.display = 'none';
    section3.style.display = 'none';
  }

  if (counter === 2) {
    section2.style.display = 'block';
    section3.style.display = 'none';
    section1.style.display = 'none';
  }

  if (counter === 3) {
    section3.style.display = 'block';
    section2.style.display = 'none';
    section1.style.display = 'none';
  }
});
