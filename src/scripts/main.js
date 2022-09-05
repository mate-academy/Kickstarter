'use strict';

const slider = document.querySelector('.swiper');
/* eslint-disable */
new Swiper(slider, {
/* eslint-enable */
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  autoplay: {
    delay: 3000,
  },
});
