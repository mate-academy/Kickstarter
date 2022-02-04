'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// #region Slider

const sliderItems = document.querySelector('.slider__items');
const sliderItem = document.querySelector('.slider__item');

const sliderPrevButton = document.querySelector('.slider__prev-button');
const sliderNextButton = document.querySelector('.slider__next-button');

const sliderCurrentPage = document.querySelector('.slider__page-current');
const sliderCountPage = document.querySelector('.slider__page-last');

const slideAmount = sliderItems.children.length;

let slideWidth = sliderItem.offsetWidth;

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
    '0'.repeat(numLength - String(page).length)}${page}
  `;
}

window.onresize = () => {
  slideWidth = sliderItem.offsetWidth;
};

// #endregion Slider
