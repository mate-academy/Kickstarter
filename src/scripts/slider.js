'use strict';

function createSlider(element, params = {}) {
  const {
    auto = false,
    touchEvents = false,
  } = params;

  if (window.matchMedia('(max-width: 767px)').matches) {
    const sliderSlide = element.querySelector('.slider__slide');
    const sliderSlideHeight = sliderSlide.offsetHeight + 'px';

    sliderSlide.style.setProperty('min-height', sliderSlideHeight);
  }

  const items = element.querySelectorAll('.slider__item');
  const nextButton = element.querySelector('.button--next');
  const prevButton = element.querySelector('.button--prev');
  const totalItems = element.querySelector('.slider-controls__total-items');
  const currentItem = element.querySelector('.slider-controls__item');

  let count = 0;
  let activeSlide = [items[count], items[count + 1]];

  totalItems.textContent = '0' + (items.length / 2).toString();

  function render() {
    const itemsWithDisplay = element.querySelectorAll('.slider__item--display');

    itemsWithDisplay
      .forEach((elem) => elem.classList
        .remove('slider__item--display'));
    activeSlide.forEach((elem) => elem.classList.add('slider__item--display'));
  }

  function changeSlide(index) {
    if (count > items.length - 1) {
      count = 0;
      activeSlide = [items[count], items[count + 1]];
      currentItem.textContent = '0' + (count / 2 + 1).toString();
    } else if (count < 0) {
      count = items.length - 2;
      activeSlide = [items[count], items[count + 1]];
      currentItem.textContent = '0' + (count / 2 + 1).toString();
    } else {
      activeSlide = index;
    }

    render();
  }

  function next() {
    count += 2;
    activeSlide = [items[count], items[count + 1]];
    currentItem.textContent = '0' + (count / 2 + 1).toString();

    changeSlide(activeSlide);
  }

  function prev() {
    count -= 2;
    activeSlide = [items[count], items[count + 1]];
    currentItem.textContent = '0' + (count / 2 + 1).toString();

    changeSlide(activeSlide);
  }

  function initButtons() {
    if (nextButton && prevButton) {
      nextButton.addEventListener('click', next);
      prevButton.addEventListener('click', prev);
    }
  }

  function initTouchEvents() {
    let startPosition = 0;

    const endListener = (event) => {
      const endPosition = event.changedTouches[0].clientX;
      const delta = endPosition - startPosition;

      if (delta < 0) {
        next();
      } else if (delta > 0) {
        prev();
      }

      element.removeEventListener('touchend', endListener);
    };

    const startListener = (event) => {
      startPosition = event.changedTouches[0].clientX;

      element.addEventListener('touchend', endListener);
    };

    element.addEventListener('touchstart', startListener);
  }

  initButtons();

  if (touchEvents) {
    initTouchEvents();
  }

  if (auto) {
    if (window.matchMedia('(max-width: 767px)').matches) {
      setInterval(next, 2000);
    }
  }
}

createSlider(document.querySelector('.slider--1'), {
  touchEvents: true,
  auto: false,
});

createSlider(document.querySelector('.slider--2'), {
  touchEvents: true,
  auto: true,
});
