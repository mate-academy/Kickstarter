'use strict';

// #region slider
let currentSlide = 0;
const slides = document.querySelectorAll('.tablet-slider__slide');
const totalSlides = slides.length;
const counterElement = document.querySelector('.tablet-slider__counter');
const leftArrow = document.querySelector('.tablet-slider__arrow-link--left');
const rightArrow = document.querySelector('.tablet-slider__arrow-link--right');

function updateCounter() {
  counterElement.textContent = String(currentSlide + 1).padStart(2, '0');
}

function updateArrowStyles() {
  if (currentSlide === 0) {
    leftArrow.classList.add('disabled');
    rightArrow.classList.remove('disabled');
  } else if (currentSlide === totalSlides - 1) {
    rightArrow.classList.add('disabled');
    leftArrow.classList.remove('disabled');
  } else {
    leftArrow.classList.remove('disabled');
    rightArrow.classList.remove('disabled');
  }
}

leftArrow.addEventListener('click', () => {
  if (currentSlide > 0) {
    slides[currentSlide].classList.remove('active');
    currentSlide--;
    slides[currentSlide].classList.add('active');
    updateCounter();
    updateArrowStyles();
  }
});

rightArrow.addEventListener('click', () => {
  if (currentSlide < totalSlides - 1) {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    slides[currentSlide].classList.add('active');
    updateCounter();
    updateArrowStyles();
  }
});

updateCounter();
updateArrowStyles();

// #endregion

// #region language-switcher
document.addEventListener('DOMContentLoaded', () => {
  const languageOptions = document.querySelectorAll(
    '.language-switcher__option',
  );

  languageOptions.forEach((option) => {
    option.addEventListener('click', () => {
      languageOptions.forEach((opt) => {
        opt.classList.remove('language-switcher__option--checked');
        opt.style.transition = 'color 0.3s ease, background-color 0.3s ease';
      });
      option.classList.add('language-switcher__option--checked');
    });
  });
});
// #endregion
