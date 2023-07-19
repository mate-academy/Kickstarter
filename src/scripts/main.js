import Swiper, { Navigation } from 'swiper';

// import styles bundle
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-new
new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  modules: [Navigation],
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('.form-send');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});
