'use strict';

let dots = false;

const slider = function(sliderSelector,
  slidesSelector, leftBtnSelector, rightBtnSelector, dotsBoxSelector, wrapper) {
  const sliderContainer = document.querySelector(sliderSelector);
  const slides = document.querySelectorAll(slidesSelector);
  const btnLeft = document.querySelector(leftBtnSelector);
  const btnRight = document.querySelector(rightBtnSelector);
  const dotsContainer = document.querySelector(dotsBoxSelector);
  const sliderWrapper = document.querySelector(wrapper);
  const width = window.getComputedStyle(sliderWrapper).width;

  let currentSlide = 0;
  const maxSlide = slides.length;

  sliderContainer.style.minWidth = 110 * slides.length + 'vw';
  slides.forEach((slide) => (slide.style.minWidth = width));

  const createDots = function() {
    dots = true;

    slides.forEach((_, i) =>
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    );
  };

  if (!dots) {
    createDots();
  }

  const activateDot = function(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function(slide) {
    slides.forEach(
      (s) => (s.style.transform = `translateX(${110 * (-slide)}vw)`)
    );
  };

  const changeSlide = function(slide) {
    activateDot(slide);
    goToSlide(slide);
  };

  changeSlide(currentSlide);

  const nextSlide = function() {
    if (currentSlide >= maxSlide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    changeSlide(currentSlide);
  };

  const prevSlide = function() {
    if (currentSlide <= 0) {
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--;
    }

    changeSlide(currentSlide);
  };

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;

      currentSlide = slide;
      changeSlide(slide);
    }
  });

  const autoslides = setInterval(nextSlide, 7000);

  const checkMinWidth = function() {
    const mediaQuery = window.matchMedia('(min-width: 667px)');

    if (mediaQuery.matches) {
      clearInterval(autoslides);
      sliderContainer.style.minWidth = '100%';
      slides.forEach((slide) => (slide.style.minWidth = '45%'));
    }
  };

  window.addEventListener('resize', checkMinWidth);
};

module.exports = { slider };
