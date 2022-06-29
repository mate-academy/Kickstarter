'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// Slide
const parentElement = document.querySelector('.slider__parent-elements');
const nextButton = document.querySelector('.slider__arrow--right');
const prevButton = document.querySelector('.slider__arrow--left');
const currentCounter = document.querySelector('.slider__text-current');
const allBlocksCounter = document.querySelector('.slider__text-all');

allBlocksCounter.textContent = parentElement.childElementCount;

function setCurrentText() {
  currentCounter.textContent
    = [...parentElement.children]
      .indexOf(parentElement.querySelector('.slider--current-block')) + 1;
}

function AddRemoveClass(currentSlide, targetSlide) {
  currentSlide.classList.remove('slider--current-block');
  targetSlide.classList.add('slider--current-block');

  setCurrentText();
}

nextButton.addEventListener('click', e => {
  const currentSlide = parentElement.querySelector('.slider--current-block');

  const nextSlide = currentSlide.nextElementSibling === null
    ? parentElement.firstElementChild
    : currentSlide.nextElementSibling;

  AddRemoveClass(currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
  const currentSlide = parentElement.querySelector('.slider--current-block');
  const nextSlide = currentSlide.previousElementSibling === null
    ? parentElement.lastElementChild
    : currentSlide.previousElementSibling;

  AddRemoveClass(currentSlide, nextSlide);
});

// Scroll Top
const scrollTopButton = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 500) {
    scrollTopButton.style.pointerEvents = 'auto';
    scrollTopButton.style.opacity = '1';
  } else {
    scrollTopButton.style.opacity = '0';
    scrollTopButton.style.pointerEvents = 'none';
  }
});
