'use strict';

// carousel section
const features = document.querySelector('.features__carousel');
const slides = Array.from(features.children);
const nextButton = document.querySelector('.features__button--right');
const prevButton = document.querySelector('.features__button--left');
const questions = document.getElementById('questions-form');

function handleForm(event) {
  event.preventDefault();
  event.target.reset();
}

const slideWidth = slides[0].getBoundingClientRect().width;
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index * 1.2 + 'px';
};

const slideIndex = new Map();
const generateMapOfSlideIndexes = (slide, index) => {
  slideIndex.set(slide, '0' + (index + 1));
};

const slideNumberIndicatorChange = (current, targetSlide, e) => {
  const moveToRight = e.target.classList[1] === 'features__button--right';

  // nextButton pressed
  if (moveToRight) {
    const hasMoreSlidesAhead = targetSlide.nextElementSibling;

    if (hasMoreSlidesAhead) {
      const nextLabel = '/ ' + slideIndex.get(targetSlide.nextElementSibling);
      const prevLabel = slideIndex.get(current);

      nextButton.innerHTML = nextLabel;
      prevButton.innerHTML = prevLabel;
    } else {
      nextButton.innerHTML = 'end';
      prevButton.innerHTML = slideIndex.get(current);
    }
  } else { // prevButton pressed
    const hasMoreSlidesBehind = targetSlide.previousElementSibling;

    if (hasMoreSlidesBehind) {
      const prevLabel = slideIndex.get(targetSlide.previousElementSibling);
      const nextLabel = '/ ' + slideIndex.get(current);

      prevButton.innerHTML = prevLabel;
      nextButton.innerHTML = nextLabel;
    } else {
      prevButton.innerHTML = 'start';
      nextButton.innerHTML = '/ ' + slideIndex.get(current);
    }
  }
};

const moveToSlide = (scope, current, targetSlide) => {
  scope.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  current.classList.remove('features__section--current');
  targetSlide.classList.add('features__section--current');
};

slides.forEach(setSlidePosition);
slides.forEach(generateMapOfSlideIndexes);

nextButton.addEventListener('click', e => {
  const current = features.querySelector('.features__section--current');
  const nextSlide = current.nextElementSibling;

  slideNumberIndicatorChange(current, nextSlide, e);
  moveToSlide(features, current, nextSlide);
});

prevButton.addEventListener('click', e => {
  const current = features.querySelector('.features__section--current');
  const prevSlide = current.previousElementSibling;

  slideNumberIndicatorChange(current, prevSlide, e);
  moveToSlide(features, current, prevSlide);
});

questions.addEventListener('submit', handleForm);
