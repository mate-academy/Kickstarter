'use strict';

/* global Swiper */ // Додаємо, щоб ESLint не скаржився на невідомий Swiper

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.features__swiper', {
  loop: true, // Зациклення
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    init: function() {
      const totalSlides = this.slides.length;

      document.querySelector('.swiper-pagination-total').textContent
      = totalSlides.toString().padStart(2, '0');

      const currentSlide = this.realIndex + 1;

      document.querySelector('.swiper-pagination-current').textContent
      = currentSlide.toString().padStart(2, '0');
    },
    slideChange: function() {
      // Оновлюємо числову пагінацію
      const currentSlide = this.realIndex + 1; // Поточний слайд

      document.querySelector('.swiper-pagination-current').textContent
      = currentSlide.toString().padStart(2, '0');
    },
  },
});
