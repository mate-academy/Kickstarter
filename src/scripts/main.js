'use strict';
import './swiper';
import './form';
import { TIME_OUT } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.benefits__wrapper-articles');
  const articles = document.querySelectorAll('.benefits__article');
  const mediaQuery = window.matchMedia('(max-width: 743px)');
  let currentSlid = 0;
  let intervalId = 0;

  const startAutoScroll = () => {
    const goToSlide = (slide) => {
      const slideWidth = articles[0].offsetWidth + 30;

      container.scrollTo({
        left: slideWidth * slide,
        behavior: 'smooth',
      });
    };

    intervalId = setInterval(() => {
      goToSlide(currentSlid);
      currentSlid = (currentSlid + 1) % articles.length;
    }, TIME_OUT);
  };

  const stopAutoScroll = () => clearInterval(intervalId);

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }
  });

  if (mediaQuery.matches) {
    startAutoScroll();
  }

  container.addEventListener('mouseenter', stopAutoScroll);

  container.addEventListener('mouseleave', () => {
    if (mediaQuery.matches) {
      startAutoScroll();
    }
  });

  container.addEventListener('touchstart', stopAutoScroll);

  container.addEventListener('touchend', () => {
    if (mediaQuery.matches) {
      startAutoScroll();
    }
  });
});
