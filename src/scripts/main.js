'use strict';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.button--prev');
const nextButton = document.querySelector('.button--next');
const slides = Array.from(slider.querySelectorAll('.item--slider'));
const slideCount = slides.length;
let slideIndex = 0;
const viewPortWidth = document.documentElement.clientWidth;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

window.addEventListener('resize', doResize);

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
    if (viewPortWidth < 1440) {
      if (index === slideIndex) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    } else {
      slide.style.display = 'block';
    }
  });
}

function doResize() {
  document.location.replace(document.location.href);
}

updateSlider();
