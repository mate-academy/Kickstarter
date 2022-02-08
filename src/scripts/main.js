'use strict';

// #video section

const storyVideo = document.querySelector('.story__video');
const storyButtonPlay = document.querySelector('.story__button--play');
const storyButtonPause = document.querySelector('.story__button--pause');

storyButtonPlay.addEventListener('click', () => {
  storyVideo.play();
  storyButtonPlay.style.display = 'none';
  storyButtonPause.style.display = 'flex';
});

storyButtonPause.addEventListener('click', () => {
  storyVideo.pause();
  storyButtonPlay.style.display = 'flex';
  storyButtonPause.style.display = 'none';
});

// #slider section

const sliderItems = document.querySelector('.slider__items');
const sliderItem = document.querySelector('.slider__item');

const sliderPrevButton = document.querySelector('.slider__button--pre');
const sliderNextButton = document.querySelector('.slider__button--next');

const sliderCurrentPage = document.querySelector('.slider__page--now');
const sliderCountPage = document.querySelector('.slider__page--last');

const slideAmount = sliderItems.children.length;

const slideWidth = sliderItem.offsetWidth;

updatePageNumber(slideAmount, sliderCountPage);

let currentPage = 0;

sliderNextButton.addEventListener('click', () => {
  disableButton(currentPage - 1);

  currentPage--;
  updatePageNumber(-currentPage + 1);

  sliderItems.style.transform = `translateX(${currentPage * slideWidth}px)`;
  sliderPrevButton.removeAttribute('disabled');
});

sliderPrevButton.addEventListener('click', () => {
  disableButton(currentPage + 1);

  currentPage++;
  updatePageNumber(-currentPage + 1);

  sliderItems.style.transform = `translateX(${currentPage * slideWidth}px)`;
  sliderNextButton.removeAttribute('disabled');
});

function disableButton(page) {
  if (page + 1 > 0) {
    sliderPrevButton.setAttribute('disabled', '');
  }

  if (page - 1 === -slideAmount) {
    sliderNextButton.setAttribute('disabled', '');
  }
}

function updatePageNumber(page, element = sliderCurrentPage, numLength = 2) {
  element.textContent = `${
    ''.repeat(numLength - String(page).length)}${page}
  `;
}

// # form clear

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
