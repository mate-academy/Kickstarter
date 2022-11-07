'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let slideIndex = 1;
const prev = document.querySelector('.features__slide--prev');
const next = document.querySelector('.features__slide--next');
const current = document.querySelector('.features__slide--current');
const total = document.querySelector('.features__slide--total');
const slides = document.querySelectorAll('.features__info');

total.textContent = `/ 0${slides.length}`;

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    slides[i].classList.remove('fade');
  }

  slides[slideIndex - 1].style.display = 'block';
  slides[slideIndex - 1].classList.add('fade');

  current.textContent = `0${slideIndex}`;
}

window.addEventListener('resize', () => {
  const x = window.matchMedia('(min-width: 1280px)');

  if (x.matches) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  } else {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
      slides[slideIndex - 1].style.display = 'block';
    }
  }
});

prev.addEventListener('click', () => {
  showSlides(slideIndex += -1);
});

next.addEventListener('click', () => {
  showSlides(slideIndex += 1);
});
