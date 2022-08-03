import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
}, true);

function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  modules: [Navigation, Pagination],

  grabCursor: true,
  rewind: true,

  pagination: {
    el: '.swiper-pagination',

    modifierClass: 'swiper-pagination-wrap ',

    currentClass: 'swiper-current-slide',

    totalClass: 'swiper-total-slides',

    type: 'fraction',

    formatFractionCurrent: addZero,

    formatFractionTotal: addZero,

  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--scroll-remove');
  } else {
    document.body.classList.remove('page__body--scroll-remove');
  }
});
