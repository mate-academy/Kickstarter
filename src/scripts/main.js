
import Swiper, { Navigation, Pagination } from 'swiper';

// eslint-disable-next-line
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    currentClass: 'features-slider__pagination-current',
    totalClass: 'features-slider__pagination-total',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },

});
