'use strict';

const burger = document.querySelector('.header__burger');
const burgerIcon = document.querySelector('.burger__icon');
const burgerLine = document.querySelector('.burger__line');
const nav = document.querySelector('.nav');
const navlist = document.querySelector('.nav__list');
const page = document.querySelector('.page');

burger.onclick = function() {
  burger.classList.toggle('header__burger--active');
  burgerIcon.classList.toggle('burger__icon--active');
  burgerLine.classList.toggle('burger__line--active');
  nav.classList.toggle('nav--active');
  navlist.classList.toggle('nav__list--active');
  page.classList.toggle('page--lock');
};

navlist.onclick = function() {
  burger.classList.toggle('header__burger--active');
  burgerIcon.classList.toggle('burger__icon--active');
  burgerLine.classList.toggle('burger__line--active');
  nav.classList.toggle('nav--active');
  navlist.classList.toggle('nav__list--active');
  page.classList.toggle('page--lock');
};

let position = 0;
const slidesToshow = 1;
const slidesToscroll = 1;
const container = document.querySelector('.promo__wrapper-features');
const track = document.querySelector('.promo__features');
// const item = document.querySelector('.promo__feature');
const btnPrev = document.querySelector('.slider-toggle__button--prev');
const btnNext = document.querySelector('.slider-toggle__button--next');
const items = document.querySelectorAll('.promo__feature');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToshow;
const movePosition = slidesToscroll * itemWidth;

if (window.matchMedia('(max-width: 767px)').matches) {
  // items.forEach((item) => {
  //   item.style.minWidth = `${itemWidth}px`;
  // });

  btnPrev.addEventListener('click', () => {
    position += movePosition;

    setPosition();
    checkBtns();
  });

  btnNext.addEventListener('click', () => {
    position -= movePosition;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToshow) * itemWidth;
  };

  checkBtns();
};
