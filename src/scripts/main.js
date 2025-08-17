'use strict';

const body = document.querySelector('.page__body');
const menu = document.querySelector('.page__menu');
const menuContent = document.querySelector('.menu__content');
const menuBtn = document.querySelector('.top-bar__menu-btn');
const specsBtn = document.querySelector('.top-bar__specs');
const langBtn = document.querySelector('.top-bar__lang-btn');
const buyBtn = document.querySelector('.top-bar__btn');
const navList = document.querySelector('.nav');
const benefits = document.querySelector('.benefits__content');
const topBar = document.querySelector('.top-bar__buttons');
const menuButtons = document.querySelector('.menu__buttons');
const buttons = document.querySelectorAll('.top-bar__lang-value');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('top-bar__lang-value--active'));

    button.classList.add('top-bar__lang-value--active');
  });
});

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('page__menu--active');
  menuBtn.classList.toggle('top-bar__menu-btn--active');
  body.classList.toggle('page__body--lock');
});

function moveBtn() {
  if (window.innerWidth < 1280) {
    menuContent.prepend(navList);
  } else {
    benefits.prepend(navList);
  };

  if (window.innerWidth < 768) {
    menuButtons.append(specsBtn);
    menuButtons.append(langBtn);
    menuContent.append(buyBtn);
  } else {
    topBar.prepend(buyBtn);
    topBar.prepend(langBtn);
    topBar.prepend(specsBtn);
  };
}

window.addEventListener('load', moveBtn);
window.addEventListener('resize', moveBtn);

let mySwiper = null;

function initSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1280 && !mySwiper) {
    mySwiper = new Swiper('.swiper', {
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          return number < 10 ? '0' + number : number;
        },
        formatFractionTotal: function (number) {
          return number < 10 ? '0' + number : number;
        }
      },
      navigation: {
        nextEl: ".swiper__arrow-next",
        prevEl: ".swiper__arrow-prev",
      },

    });
  } else if (screenWidth >= 1280 && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
};

window.addEventListener('load', initSwiper);
window.addEventListener('resize', initSwiper);

document.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('page__menu--active');
    menuBtn.classList.remove('top-bar__menu-btn--active');
    body.classList.remove('page__body--lock');
  });
});
