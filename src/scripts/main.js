'use strict';
var tetxSwiper = new Swiper('.slider-content',{
  slidesPerView: 1,
  spaceBetween: 20,
  grabCursor: true,
  slideToClickedSlide: true,
  loop: true,
  speed: 700,
  autoplay: {
    deplay: 900,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  }
});
