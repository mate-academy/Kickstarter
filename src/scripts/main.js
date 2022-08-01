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
