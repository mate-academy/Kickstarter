'use strict';

const featuresContent = document.querySelector('.features__content');
const slidesBlock = document.querySelector('.features__slides');
const allSlides = [...document.querySelectorAll('.features__slide')];
const pagination = document.querySelector('.features__pagination');
const spanActiveSlide = document.querySelector('.features__active');

const form = document.querySelector('.questions__form');

let currentSlide = 0;
const slideCount = allSlides.length - 1;

pagination.addEventListener('click', (e) => {
  const button = e.target.closest('button');

  if (button) {
    const stylesSlides = getComputedStyle(slidesBlock);
    const widthOneSlide = parseInt(stylesSlides.width) / 3;

    allSlides[currentSlide].classList.remove('features__slide--active');

    if (button.classList.contains('features__button--right')) {
      if (currentSlide < slideCount) {
        currentSlide++;
      }
    } else {
      if (currentSlide > 0) {
        currentSlide--;
      }
    }

    allSlides[currentSlide].classList.add('features__slide--active');
    spanActiveSlide.innerHTML = `0${currentSlide + 1}`;
    slidesBlock.style.marginLeft = `-${currentSlide * widthOneSlide}px`;
  }
});

const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const newWidth = entry.contentRect.width;

    slidesBlock.style.marginLeft = `-${currentSlide * newWidth}px`;
  }
});

observer.observe(featuresContent);

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1280 && window.location.hash.includes('#menu')) {
    window.location.hash = '';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const button = document.querySelector('.questions__button');
  const inputs = document.querySelectorAll('.questions__input');
  inputs.forEach((input) => input.classList.add('questions__input--done'));
  button.setAttribute('disabled', 'true');
  setTimeout(() => {
    button.removeAttribute('disabled');
    inputs.forEach((input) => input.classList.remove('questions__input--done'));
  }, 2000);
  form.reset();
});
