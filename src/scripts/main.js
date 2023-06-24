'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// eslint-disable-next-line no-undef
const swiper = new Swiper('.slider1', {
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

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.slider2', {

  navigation: {
    nextEl: '.features__swiper-button-next',
    prevEl: '.features__swiper-button-prev',
  },

  loop: true,

  pagination: {
    el: '.features__swiper-pagination',
    type: 'fraction',
  },
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  form.reset();
  e.preventDefault();
});

// Show arrow to top

const showArrow = document.querySelector('.arrow-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    showArrow.classList.add('arrow-top--show');
  } else {
    showArrow.classList.remove('arrow-top--show');
  }
});
