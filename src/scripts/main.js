'use strict';
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slider__slide');
const totalSlides = slides.length;
const sliderContainer = document.querySelector('.slider__wrapper');
const currentSlideElement = document.querySelector('.slider__current-slide');
const totalSlidesElement = document.querySelector('.slider__total-slides');
const nextButton = document.querySelector('.slider__button-right');
const prevButton = document.querySelector('.slider__button-left');

totalSlidesElement.textContent = `0${totalSlides}`;

const showSlide = () => {
  let slideWidth = slides[0].offsetWidth;

  window.addEventListener('resize', () => {
    slideWidth = slides[0].offsetWidth;
    showSlide();
  });

  const offset = currentSlideIndex * 30;
  sliderContainer.style.transform = `translateX(-${currentSlideIndex * slideWidth + offset}px)`;

  currentSlideElement.textContent = String(currentSlideIndex + 1).padStart(
    2,
    '0',
  );
};

nextButton.addEventListener('click', (event) => {
  event.preventDefault();

  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide();
  updateButtons(currentSlideIndex);
});

prevButton.addEventListener('click', (event) => {
  event.preventDefault();

  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  showSlide();
  updateButtons(currentSlideIndex);
});

const leftButton = document.querySelector('.slider__button-left');
const rightButton = document.querySelector('.slider__button-right');

function updateButtons(currentSlideIndex) {
  if (currentSlideIndex === 0) {
    leftButton.disabled = true;
    leftButton
      .querySelectorAll('path')
      .forEach((path) => path.setAttribute('fill', '#bdbdbd'));
  } else {
    leftButton.disabled = false;
    leftButton
      .querySelectorAll('path')
      .forEach((path) => path.setAttribute('fill', '#333333'));
  }

  if (currentSlideIndex === totalSlides - 1) {
    rightButton.disabled = true;
    rightButton
      .querySelectorAll('path')
      .forEach((path) => path.setAttribute('fill', '#bdbdbd'));
  } else {
    rightButton.disabled = false;
    rightButton
      .querySelectorAll('path')
      .forEach((path) => path.setAttribute('fill', '#333333'));
  }
}

showSlide();
updateButtons(currentSlideIndex);

// form
const emailInput = document.querySelector('.questions__email');
const messageInput = document.querySelector('.questions__message');

emailInput.addEventListener('focus', function () {
  this.classList.remove('success');
});

messageInput.addEventListener('focus', function () {
  this.classList.remove('success');
});

document
  .querySelector('.questions__form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    event.target.reset();

    document.querySelector('.questions__email').classList.add('success');
    document.querySelector('.questions__message').classList.add('success');
  });


