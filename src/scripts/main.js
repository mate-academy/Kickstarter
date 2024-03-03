'use strict';

window.addEventListener('hashchange', function () {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-body');
  } else {
    document.body.classList.remove('page-body');
  }
});

// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const slider = document.querySelector('.swiper--3');
const prevButton = document.querySelector('.swiper--3-button-prev');
const nextButton = document.querySelector('.swiper--3-button-next');
const slides = Array.from(slider.querySelectorAll('.swiper-slide'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  // slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  slideIndex -= 1;

  if (slideIndex < 0) {
    slideIndex = 0;
  }
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex += 1;

  if (slideIndex > slideCount - 1) {
    slideIndex = slideCount - 1;
  }
  updateSlider();
}

function disabledButtons() {
  if (slideIndex === 0) {
    prevButton.classList.add('swiper--3-button-prev-disabled');
    prevButton.classList.remove('swiper--3-button-prev-default');
  } else {
    prevButton.classList.add('swiper--3-button-prev-default');
    prevButton.classList.remove('swiper--3-button-prev-disabled');
  }

  if (slideIndex >= slideCount - 1) {
    nextButton.classList.add('swiper--3-button-next-disabled');
    nextButton.classList.remove('swiper--3-button-next-default');
  } else {
    nextButton.classList.add('swiper--3-button-next-default');
    nextButton.classList.remove('swiper--3-button-next-disabled');
  }
}

function numberSlide() {
  document.querySelector('.swiper__number').textContent = `0${slideIndex + 1}`;
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    }
  });

  disabledButtons();
  numberSlide();
}
