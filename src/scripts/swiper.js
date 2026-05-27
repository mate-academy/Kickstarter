'use strict';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-left',
    prevEl: '.swiper-button-right',
  },
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction', // показує "1/3", "2/3" тощо
  },
});
