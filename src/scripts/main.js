'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const pageUp = document.querySelector('.page__page-up-btn');

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1200) {
    pageUp.classList.add('active');
  } else {
    pageUp.classList.remove('active');
  }
});

// Slider
const slider = function(sliderSelector,
  slidesSelector, leftBtnSelector, rightBtnSelector) {
  const sliderWrapper = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slidesSelector);
  const btnLeft = document.querySelector(leftBtnSelector);
  const btnRight = document.querySelector(rightBtnSelector);

  let currentSlide = 0;
  const maxSlide = slides.length;

  sliderWrapper.style.width = 110 * slides.length + 'vw';

  const goToSlide = function(slide) {
    slides.forEach(
      (s) => (s.style.transform = `translateX(${90 * (-slide)}vw)`)
    );
  };

  const changeSlide = function(slide) {
    goToSlide(slide);
  };

  const nextSlide = function() {
    if (currentSlide === maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    changeSlide(currentSlide);
  };

  const prevSlide = function() {
    if (currentSlide === 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    changeSlide(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);
};

slider('.slider-about',
  '.slider-about__slide',
  '.slider-about__btn--left',
  '.slider-about__btn--right');
