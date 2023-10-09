'use strict';

const prev = document.querySelector('.features__prev-img');
const prevSvg = prev.querySelectorAll('path');
const next = document.querySelector('.features__next-img');
const nextSvg = next.querySelectorAll('path');
const num = document.querySelector('.features__now-num');

document.addEventListener('DOMContentLoaded', function() {
  // eslint-disable-next-line
  const swiper = new Swiper('.features__content-swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.features__button-next',
      prevEl: '.features__button-prev',
    },
    on: {
      slideChange: function() {
        const currentSlide = this.realIndex + 1;
        const formattedSlideNumber = currentSlide < 10
          ? `0${currentSlide}` : currentSlide;

        num.textContent = formattedSlideNumber;

        if (currentSlide === 3) {
          nextSvg.forEach((path) => {
            path.setAttribute('fill', '#bdbdbd');
          });
        } else {
          nextSvg.forEach((path) => {
            path.setAttribute('fill', '#333');
          });
        }

        if (currentSlide === 1) {
          prevSvg.forEach((path) => {
            path.setAttribute('fill', '#bdbdbd');
          });
        } else {
          prevSvg.forEach((path) => {
            path.setAttribute('fill', '#333');
          });
        }
      },
    },
  });
});
