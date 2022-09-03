'use strict';

// eslint-disable-next-line no-undef
const swiper = new Swiper('.swiper', {
  direction: 'vertical',

  mousewheel: {
    releaseOnEdges: true,
    forceToAxis: true,
  },

  on: {
    slideChange: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = false;
      }, 500);
    },

    reachEnd: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 750);
    },

    reachBeginning: function() {
      setTimeout(function() {
        swiper.params.mousewheel.releaseOnEdges = true;
      }, 750);
    },
  },

  touchReleaseOnEdges: true,

  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
});
