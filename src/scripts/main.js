'use strict';

// Menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const playButton = document.querySelector('.presentation__play-btn');
const video = document.querySelector('.presentation__video');

playButton.addEventListener('click', () => {
  video.classList.remove('presentation__video--hidden');
  playButton.classList.remove('presentation__play-btn');
});

// Slider

initSlider1(document.querySelector('.slider--1'));
initSlider2(document.querySelector('.slider--2'));

function initSlider1(sliderElement1) {
  const slider = sliderElement1.querySelector('.slider__list');
  const prevButton = sliderElement1.querySelector('.slider__button-prev');
  const nextButton = sliderElement1.querySelector('.slider__button-next');

  let currentIndex = 0;

  function move(newIndex) {
    if (newIndex < 0) {
      currentIndex = 3;
    } else if (newIndex > 3) {
      currentIndex = 0;
    } else {
      currentIndex = newIndex;
    }
  }

  nextButton.addEventListener('click', () => {
    move(currentIndex + 1);
    render();
    pageCounter();
  });

  prevButton.addEventListener('click', () => {
    move(currentIndex - 1);
    render();
    pageCounter();
  });

  function render() {
    slider.style.transform = `translateX(${currentIndex * -(100)}%`;
  }

  function pageCounter() {
    document.getElementById('slider__page1').innerHTML = `0${currentIndex + 1}`;
  }
}

function initSlider2(sliderElement2) {
  const slider = sliderElement2.querySelector('.slider__list');
  const prevButton = sliderElement2.querySelector('.slider__button-prev');
  const nextButton = sliderElement2.querySelector('.slider__button-next');

  let currentIndex = 0;

  function move(newIndex) {
    if (newIndex < 0) {
      currentIndex = 2;
    } else if (newIndex > 2) {
      currentIndex = 0;
    } else {
      currentIndex = newIndex;
    }
  }

  nextButton.addEventListener('click', () => {
    move(currentIndex + 1);
    render();
    pageCounter();
  });

  prevButton.addEventListener('click', () => {
    move(currentIndex - 1);
    render();
    pageCounter();
  });

  function render() {
    slider.style.transform = `translateX(${currentIndex * -(100)}%`;
  }

  function pageCounter() {
    document.getElementById('slider__page2').innerHTML = `0${currentIndex + 1}`;
  }
}

// Form
const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});
