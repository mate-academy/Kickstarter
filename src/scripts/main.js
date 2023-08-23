'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu--on');
  } else {
    document.body.classList.remove('menu--on');
  }
});

const showArrow = document.querySelector('.arrow-to-top');
const contactUsForm = document.querySelector('.contact-us__form');

window.addEventListener('scroll', () => {
  if (window.scrollY > 450) {
    showArrow.classList.add('arrow-to-top--show');
  } else {
    showArrow.classList.remove('arrow-to-top--show');
  }
});

contactUsForm.addEventListener('submit', event => {
  contactUsForm.reset();
  event.preventDefault();
});

// eslint-disable-next-line no-undef, no-unused-vars
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
