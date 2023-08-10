'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('page__section--animation');
    }
  });
}

const options = { threshold: [0.5] };
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.page__section');

for (const elm of elements) {
  observer.observe(elm);
}

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = form.querySelectorAll('input, textarea');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
});

const slides = document.querySelector('.features__slides');
const previousButton = document.querySelector('.features__previous-button');
const nextButton = document.querySelector('.features__next-button');
const activeSlideBlock = document.querySelector('.features__active-slide');
let activeSlide = 0;

const moveSlides = () => {
  slides.style.transform = `translateX(-${33.33 * activeSlide}%)`;
  activeSlideBlock.innerText = `0${activeSlide + 1}`;
};

previousButton.addEventListener('click', () => {
  if (activeSlide > 0) {
    activeSlide--;

    if (activeSlide === 0) {
      previousButton.classList.add('features__previous-button--not-active');
    }

    moveSlides();

    nextButton.classList.remove('features__next-button--not-active');
  }
});

nextButton.addEventListener('click', () => {
  if (activeSlide < 2) {
    activeSlide++;

    if (activeSlide === 2) {
      nextButton.classList.add('features__next-button--not-active');
    }

    moveSlides();

    previousButton.classList.remove('features__previous-button--not-active');
  }
});

document.body.style.overflowX = 'hidden';

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.benefits__slider-mob');
  const dots = document.querySelectorAll('.sliders__dots');

  let currentSlideIndex = 0;

  function showSlide(index) {
    slider.style.transform = `translateX(-${index * 25}%)`;

    dots[currentSlideIndex].classList.remove('sliders__dots--active');
    dots[index].classList.add('sliders__dots--active');

    currentSlideIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  function adjustSlider() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 768) {
      slider.style.transform = 'translateX(0)';
    } else {
      showSlide(currentSlideIndex);
    }
  }
  adjustSlider();

  window.addEventListener('resize', adjustSlider);
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
