'use strict';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.button--prev');
const nextButton = document.querySelector('.button--next');
const slides = Array.from(slider.querySelectorAll('.item--slider'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
window.addEventListener('resize', updateSlider);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  document.querySelector('.count').innerText = `0${(slideIndex + 1)}`;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  document.querySelector('.count').innerText = `0${slideIndex + 1}`;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.classList.add('slider__item--active');
    } else {
      slide.classList.remove('slider__item--active');
    }
  });
}

updateSlider();
