'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const textBlocks = document.querySelectorAll('.slider__text');
  let currentIndex = 0;

  function showNextBlock() {
    textBlocks[currentIndex].classList.add('active');
    currentIndex = (currentIndex + 1) % textBlocks.length;
    textBlocks[currentIndex].classList.remove('active');
  }

  function showPrevBlock() {
    textBlocks[currentIndex].classList.add('active');
    currentIndex = (currentIndex - 1 + textBlocks.length) % textBlocks.length;
    textBlocks[currentIndex].classList.remove('active');
  }

  const nextButton = document.getElementById('increment');

  nextButton.addEventListener('click', showNextBlock);

  const prevButton = document.getElementById('decrement');

  prevButton.addEventListener('click', showPrevBlock);

  textBlocks[currentIndex].classList.remove('active');
});

const fraction = [1, 3];
const numeratorValue = document.getElementById('numerator');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
  fraction[0]++;

  if (fraction[0] > fraction[1]) {
    fraction[0] = 1;
  }
  updateSliderValue();
});

decrementButton.addEventListener('click', () => {
  fraction[0]--;

  if (fraction[0] < 1) {
    fraction[0] = fraction[1];
  }
  updateSliderValue();
});

function updateSliderValue() {
  numeratorValue.classList.remove('fade-in');
  numeratorValue.classList.add('fade-out');

  setTimeout(() => {
    numeratorValue.textContent = ('0' + fraction[0]).slice(-2);
    numeratorValue.classList.remove('fade-out');

    setTimeout(() => {
      numeratorValue.classList.add('fade-in');
    }, 25);
  }, 200);
}// slider

const placeholderTexts = [
  'Your message',
  'Your message.',
  'Your message..',
  'Your message...',
  'Your message..',
  'Your message.',
];

const messageInput = document.getElementById('messageInput');
let currentIndexx = 0;

function updatePlaceholder() {
  messageInput.placeholder = placeholderTexts[currentIndexx];
  currentIndexx = (currentIndexx + 1) % placeholderTexts.length;
}

setInterval(updatePlaceholder, 1000);// placeholder

const enElements = document.querySelectorAll('#en');
const uaElements = document.querySelectorAll('#ua');

enElements.forEach(function(enElement) {
  enElement.addEventListener('click', function() {
    enElements.forEach(function(el) {
      el.classList.remove('gray');
      el.classList.add('darkgray');
    });

    uaElements.forEach(function(el) {
      el.classList.remove('darkgray');
      el.classList.add('gray');
    });
  });
});

uaElements.forEach(function(uaElement) {
  uaElement.addEventListener('click', function() {
    uaElements.forEach(function(el) {
      el.classList.remove('gray');
      el.classList.add('darkgray');
    });

    enElements.forEach(function(el) {
      el.classList.remove('darkgray');
      el.classList.add('gray');
    });
  });
});// lang

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.design__container');
  let currentSlide = 0;

  function showSlide(slideIndex) {
    slides.forEach(function(slide) {
      slide.classList.remove('visible');
      slide.classList.add('hidden');
    });

    setTimeout(function() {
      slides[slideIndex].classList.remove('hidden');
      slides[slideIndex].classList.add('visible');
    }, 900);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function startSlider() {
    showSlide(currentSlide);
    setInterval(nextSlide, 6500);
  }

  startSlider();
});// timerslider
