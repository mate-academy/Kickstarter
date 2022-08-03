import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-is-open');
  } else {
    document.body.classList.remove('page__body--menu-is-open');
  }
});

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
});

const sliderAutoWrapper = document.querySelector('.slider-auto__wrapper');
let offset = 0;

function sliderAuto() {
  offset += 100;

  if (offset > 300) {
    offset = 0;
  }
  sliderAutoWrapper.style.left = -offset + '%';
}

setInterval(sliderAuto, 10000);

window.swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  modules: [Navigation, Pagination],
});
