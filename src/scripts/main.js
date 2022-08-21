import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper__pagination',

    modifierClass: 'swiper__pagination-wrap',

    currentClass: 'swiper__current-slide',

    totalClass: 'swiper__total-slides',

    type: 'fraction',

    formatFractionCurrent: addZero,

    formatFractionTotal: addZero,

  },

  navigation: {
    nextEl: '.swiper__arrow-next',
    prevEl: '.swiper__arrow-prev',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
