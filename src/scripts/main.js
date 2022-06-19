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

const checkMedia = function() {
  const mediaQuery = window.matchMedia('(max-width: 666px)');

  if (mediaQuery.matches) {
    slider('.slider-about',
      '.slider-about__slide',
      '.slider-about__btn--left',
      '.slider-about__btn--right',
      '.dots',
      '.wrapper');
  }
};

checkMedia();
window.addEventListener('resize', checkMedia);

const featuresSlider = function(slidesSelector, leftBtnSelector,
  rightBtnSelector, currentSelector, totalSelector, activeSelector) {
  const slides = document.querySelectorAll(slidesSelector);
  const btnLeft = document.querySelector(leftBtnSelector);
  const btnRight = document.querySelector(rightBtnSelector);
  const currentNum = document.querySelector(currentSelector);
  const totalNum = document.querySelector(totalSelector);

  let slideIndex = 1;

  if (slides.length < 10) {
    totalNum.textContent = `/ 0${slides.length}`;
  } else {
    totalNum.textContent = `/ ${slides.length}`;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.classList.remove(activeSelector)));

    slides[slideIndex - 1].classList.add(activeSelector);

    if (slides.length < 10) {
      currentNum.textContent = `0${slideIndex}`;
    } else {
      currentNum.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  btnLeft.addEventListener('click', () => plusSlides(-1));
  btnRight.addEventListener('click', () => plusSlides(1));
};

featuresSlider('.slider__item', '.slider__arrow-left',
  '.slider-arrow-right', '.slider__index-active', '.slider__index-total',
  'slider__item--active');
