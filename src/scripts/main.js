'use strict';

// #region features

const blocksContainer = document.querySelector('.features__blocks');
const blocks = document.querySelectorAll('.features__blocks article');
const blockNum = document.querySelector('.features__current-num');
const buttonPrev = document.querySelector('.features__button--prev');
const buttonNext = document.querySelector('.features__button--next');
let blockIndex = 0;

showBlock();

function showBlock(index) {
  if (index === blocks.length) {
    blockIndex = 0;
  } else if (index < 0) {
    blockIndex = blocks.length - 1;
  }

  blocks.forEach(block => {
    block.classList.remove('features__block--active')
  });

  blocks[blockIndex].classList.add('features__block--active');

  blocksContainer.style.transform = `translateX(${-blockIndex * 100}%)`;

  blockNum.innerHTML = `0${blockIndex + 1}`;
}

buttonPrev.addEventListener('click', function() {
  blockIndex--;

  showBlock(blockIndex);
});

buttonNext.addEventListener('click', function() {
  blockIndex++;

  showBlock(blockIndex);
});

// #endregion

// #region form

const form = document.querySelector('.get-in-touch__form');
const input = document.querySelector('.get-in-touch__form-input');
const textarea = document.querySelector('.get-in-touch__form-textarea');
const textareaWrapper = document.querySelector('.get-in-touch__form-textarea-wrapper');
const formElements = document.querySelectorAll('.get-in-touch__form-input, .get-in-touch__form-textarea');
const button = document.querySelector('.get-in-touch__form-button');

form.addEventListener('input', function(event) {
  button.removeAttribute('disabled');

  if (input.value.length === 0 && textarea.value.length === 0) {
    button.setAttribute('disabled', '');
  }
})

button.addEventListener('click', function() {
  if (!input.checkValidity()) {
    input.classList.add('get-in-touch__form-input--invalid');
    return;
  } else {
    input.classList.remove('get-in-touch__form-input--invalid');
  }

  if (!textarea.checkValidity()) {
    textarea.classList.add('get-in-touch__form-textarea--invalid');
    textareaWrapper.classList.add('get-in-touch__form-textarea-wrapper--invalid');
    return;
  } else {
    textarea.classList.remove('get-in-touch__form-textarea--invalid');
    textareaWrapper.classList.remove('get-in-touch__form-textarea-wrapper--invalid');
  }

  form.reset();
  button.setAttribute('disabled', '');
})

// #endregion

// #region on-scroll

const headerText = document.querySelector('.header__text-wrapper');
const fadeInElements = document.querySelectorAll('.benefits__blocks, .meet-luna, .our-story, .about-us, .features, .get-in-touch__title, .get-in-touch__form');
const fadeInElementsY = document.querySelectorAll('.benefits__nav, .quote')

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}

window.addEventListener('load', function() {
  if (isInView(headerText)) {
    headerText.classList.add('header__text-wrapper--fade-in');
  }
});

let lastScrollTop = 0;

document.addEventListener('scroll', function() {
  if (isInView(headerText)) {
    headerText.classList.add('header__text-wrapper--fade-in');
  } else {
    headerText.classList.remove('header__text-wrapper--fade-in');
  }

  const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    fadeInElementsY.forEach(element => {
      if (isInView(element)) {
        element.classList.add('start-position-for-scroll-down', 'fade-in-element');
      } else {
        element.classList.remove('start-position-for-scroll-down', 'fade-in-element');
      }
    });
  } else {
    fadeInElementsY.forEach(element => {
      if (isInView(element)) {
        element.classList.add('start-position-for-scroll-up', 'fade-in-element');
      } else {
        element.classList.remove('start-position-for-scroll-up', 'fade-in-element');
      }
    });
  }

  lastScrollTop = currentScrollTop;

  fadeInElements.forEach(element => {
    if (isInView(element)) {
      element.classList.add('fade-in-element');
    } else {
      element.classList.remove('fade-in-element');
    }
  });
});

// #endregion

// #region scroll-button

const scrollButton = document.querySelector('.page__scroll-button');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 660 || document.documentElement.scrollTop > 660) {
    scrollButton.classList.add('fade-in-element');
  } else {
    scrollButton.classList.remove('fade-in-element');
  }
}

// #endregion
