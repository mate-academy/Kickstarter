'use strict';

const slider = document.querySelector('.features__slide');
const sliderStyle = window.getComputedStyle(slider, null);
const slides = document.getElementsByClassName('features__group');
const counter = slider.getElementsByClassName('features__number')[0];
const counterTotal = slider.getElementsByClassName('features__number')[1];
let slideIndex = 1;
let isActive = false;

const form = document.querySelector('.questions__form');

form.addEventListener('submit', buttonClick, false);

function buttonClick(evt) {
  evt.preventDefault();
  form.reset();
};

setInterval(() => {
  if (sliderStyle.display === 'none' && isActive) {
    for (let i = 0; i < slides.length; i += 1) {
      slides[i].style.display = 'block';
    }

    isActive = false;
  } else if (sliderStyle.display !== 'none' && !isActive) {
    showSlides(slideIndex);

    isActive = true;
  }
}, 100);

slider.addEventListener('click', buttonSlide, false);

function buttonSlide(evt) {
  if (evt.target.attributes[0].value
    === 'features__arrow features__arrow--left'
    || evt.target.parentNode.attributes[0].value
    === 'features__arrow features__arrow--left'
  ) {
    plusSlides(-1);
  }

  if (evt.target.attributes[0].value
    === 'features__arrow features__arrow--right'
     || evt.target.parentNode.attributes[0].value
     === 'features__arrow features__arrow--right'
  ) {
    plusSlides(1);
  }
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const totalSlides = slides.length < 10 ? `0${slides.length}` : slides.length;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
  counter.innerHTML = `0${slideIndex}`;
  counterTotal.innerHTML = `<span>/</span> ${totalSlides}`;
}
