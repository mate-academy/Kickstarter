'use strict';
import langArr from "../scripts/lang.js";

const buttonsLang = document.querySelectorAll('.language__button');

buttonsLang.forEach((button) => {
  button.addEventListener('click', () => {
    changeLanguageSwitherStyle(button.value);
    changeLanguage(button.value);
  })
})

// змінення стилів для кнопок
function changeLanguageSwitherStyle(lang){
  buttonsLang.forEach((button) => {
    if(button.value === lang){
      button.classList.add('language__button--active');
    }else{
      button.classList.remove('language__button--active');
    }
  })
}

// змінення мови для тексту
function changeLanguage(lang){
  for(let key in langArr){
    document.querySelectorAll('.lng-' + key).forEach((element =>{
      element.innerHTML = langArr[key][lang];
    }))
  }
}

// слайдер
const swiper = new Swiper('.swiper', {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 56,
  slidesPerColumnFill: 'column',
  navigation: {
    nextEl: '.swiper-feature__button-next',
    prevEl: '.swiper-feature__button-prev',
  },

  breakpoints: {
    1280: {
      slidesPerView: 2,
      spaceBetween: 56,
      grid : {
        rows: 2,
      },
    }
  }
});

const swiperCurrentSlide = document.querySelector('.swiper-feature__curent');
const swiperAllSlides = document.querySelector('.swiper-feature__total');
const swiperBtnPrev = document.querySelector('.swiper-feature__button-prev');
const swiperBtnNext = document.querySelector('.swiper-feature__button-next');

swiperAllSlides.innerHTML = swiper.slides.length > 9
  ? swiper.slides.length
  : '0' + swiper.slides.length;

function updateNavigationButtons() {
  swiper.realIndex > 0
    ? swiperBtnPrev.classList.add('swiper-feature__button--active')
    : swiperBtnPrev.classList.remove('swiper-feature__button--active');

  swiper.realIndex === swiper.slides.length - 1
    ? swiperBtnNext.classList.remove('swiper-feature__button--active')
    : swiperBtnNext.classList.add('swiper-feature__button--active');
}

function updateCurrentSlide() {
  let currentSlide = swiper.realIndex + 1;
  swiperCurrentSlide.innerHTML = currentSlide > 9
    ? currentSlide
    : '0' + currentSlide;
}

updateCurrentSlide();
updateNavigationButtons();

swiper.on('slideChange', function() {
  updateCurrentSlide();
  updateNavigationButtons();
});

// анімації
AOS.init();
AOS.init({
  duration: 800,
  easing: 'ease-out',
});
