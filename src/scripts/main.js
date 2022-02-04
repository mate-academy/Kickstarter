'use strict';

// #region MenuEvents
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
// #endregion MenuEvents

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

// #region ScrollTo
const scrollToElement = (toElement) => {
  const elementPosY = toElement.getBoundingClientRect().top;

  toElement.scrollTo(0, elementPosY);
};

const html = document.querySelector('.page');
const toTopButton = document.querySelector('.go-top');

toTopButton.addEventListener('click', () => scrollToElement(html));

// #endregion ScrollTo

// #region dynamicNavigation
const navLinks = document.querySelectorAll('.navigation__item');
const sections = document.querySelectorAll('[data-name]');

const sectionPos = {};
const navTo = {};

for (const link of navLinks) {
  const linkName = link.getAttribute('data-link-to');

  navTo[linkName] = link;
}

for (const section of sections) {
  const sectionName = section.getAttribute('data-name');

  sectionPos[sectionName] = section.getBoundingClientRect();
}

window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;

  for (const section in sectionPos) {
    const sectionPosTop = sectionPos[section].top;
    const sectionPosBottom = sectionPosTop + sectionPos[section].height;

    if (y > sectionPosTop - 45 && y < sectionPosBottom + 45) {
      navTo[section].style.fontWeight = '500';
      navTo[section].style.transform = 'scale(1.05)';
    } else {
      navTo[section].style.fontWeight = '300';
    }
  }
});
// #endregion dynamicNavigation
