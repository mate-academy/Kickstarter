'use strict';

const form = document.getElementById('feedback__form');
const mail = document.getElementById('feedback__mail');
const textarea = document.getElementById('feedback__textarea');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  mail.value = '';
  textarea.value = '';
});

// carousel

document.addEventListener('DOMContentLoaded', function() {
  const pageNumber = document.getElementById('page1');
  const blocks
    = document.querySelectorAll("#carousel > div[id^='carousel__block']");
  const totalBlocks = blocks.length;
  let currentIndex = 0;

  const carousel = document.querySelector('.features__carousel');
  const nextButton
    = document.querySelector('.features__carousel__buttons-right');
  const prevButton
    = document.querySelector('.features__carousel__buttons-left');

  function showBlock(index) {
    blocks.forEach((block, i) => {
      block.style.display = i === index ? 'block' : 'none';
    });
  }

  function checkScreenSize() {
    if (window.innerWidth <= 768) {
      carousel.style.display = 'block';
      // eslint-disable-next-line no-return-assign
      blocks.forEach(block => block.style.display = 'none');
      showBlock(currentIndex); // Show the first block
      nextButton.style.display = 'inline-block';
      prevButton.style.display = 'inline-block';
    } else {
      carousel.style.display = 'none';
      // eslint-disable-next-line no-return-assign
      blocks.forEach(block => block.style.display = 'block');
      nextButton.style.display = 'none';
      prevButton.style.display = 'none';
    }
  }

  checkScreenSize();

  window.addEventListener('resize', checkScreenSize);

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalBlocks;
    showBlock(currentIndex);
    pageNumber.innerText = currentIndex + 1;
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalBlocks) % totalBlocks;
    showBlock(currentIndex);
    pageNumber.innerText = currentIndex + 1;
  });
});

// hashchange
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--no-scrol');
  } else {
    document.body.classList.remove('page__body--no-scrol');
  }
});

// disable enable submit
document.addEventListener('DOMContentLoaded', function() {
  const formEnable = document.getElementById('feedback__form');
  const submitButton = document.getElementById('submitButton');

  function checkFormFields() {
    const allFilled = Array.from(formEnable.elements).every(input => {
      return (input.type === 'email' || input.tagName === 'TEXTAREA')
        && input.value.trim() !== '';
    });

    submitButton.disabled = allFilled;
  }

  formEnable.addEventListener('input', checkFormFields);
});

const vh = window.innerHeight * 0.01;

// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
