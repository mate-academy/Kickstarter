// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-new, no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#header-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
