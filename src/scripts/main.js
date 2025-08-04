'use strict';

const innerList = document.querySelector('.header__inner-list');

const leftPaginationSwitch = document
  .querySelector('.pagination__switch--1');
const rightPaginationSwitch = document
  .querySelector('.pagination__switch--2');

const currentPaginationPage = document
  .querySelector('.pagination__number--1');
const maxPaginationPage = document
  .querySelector('.pagination__number--2');

const productCharacteristics = document
  .querySelector('.additional-features__characteristics');
const characteristicsWidth = 260;


const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.site-navigation');
const body = document.body;

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('site-navigation--active');
  innerList.classList.toggle('header__inner-list--active');

  body.classList.toggle('no-scroll');

  burgerMenu.classList.toggle('header__burger-menu--active');
});

function changePaginationNumber(bool) {
  const currentPage = +currentPaginationPage.textContent.slice(1)
    + (bool ? 1 : -1);

  if (currentPage < 10) {
    currentPaginationPage.textContent = '0' + currentPage;
  } else {
    currentPaginationPage.textContent = currentPage;
  }
}


leftPaginationSwitch.addEventListener('click', () => {
  if (currentPaginationPage.textContent !== '01') {
    productCharacteristics.scrollBy({
      left: -characteristicsWidth,
      behavior: 'smooth',
    })

    changePaginationNumber(false);
  }
});

rightPaginationSwitch.addEventListener('click', () => {
  if (currentPaginationPage.textContent !== maxPaginationPage.textContent) {
    productCharacteristics.scrollBy({
      left: characteristicsWidth,
      behavior: 'smooth',
    })

    changePaginationNumber(true);
  }
});

