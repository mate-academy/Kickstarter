'use strict';

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.features__button--prev');
const nextButton = document.querySelector('.features__button--next');
const slides = Array.from(slider.querySelectorAll('.slider__slide'));
const slideCount = slides.length;
// const prevArrow = document.querySelector('.features__button--prev');
// const nextArrow = document.querySelector('.features__button--next');
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
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
    prevButton.classList.add('features__button--prev-disabled');
    prevButton.classList.remove('features__button--prev-default');
  } else {
    prevButton.classList.add('features__button--prev-default');
    prevButton.classList.remove('features__button--prev-disabled');
  }

  if (slideIndex >= slideCount - 1) {
    nextButton.classList.add('features__button--next-disabled');
    nextButton.classList.remove('features__button--next-default');
  } else {
    nextButton.classList.add('features__button--next-default');
    nextButton.classList.remove('features__button--next-disabled');
  }
}

function numberSlide() {
  document.querySelector('.features__count-first-num').textContent = `0${slideIndex + 1}`;
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  disabledButtons();
  numberSlide();
}

updateSlider();

function heightSlider() {
  let maxHeight = slides[0].innerHeight;

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].innerHeight >= maxHeight) {
      maxHeight = slides[i].innerHeight;
    }
  }

  slides.forEach((slide) => {
    slide.style.height = maxHeight;
  });
}

heightSlider();

function displayOnTablet() {
  if (window.innerWidth > 1280) {
    slides.forEach((slide) => {
      slide.style.display = 'block';
    });
  }
}

displayOnTablet();
