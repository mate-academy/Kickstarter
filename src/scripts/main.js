'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// eslint-disable-next-line no-undef, no-unused-vars
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 300
     || document.documentElement.scrollTop > 300) {
    document.getElementById('gotop').style.visibility = 'visible';
  } else {
    document.getElementById('gotop').style.visibility = 'hidden';
  }
}

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  form.reset();
  e.preventDefault();
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper2 = new Swiper('.tech__slider', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// eslint-disable-next-line no-undef, no-unused-vars
const swiper = new Swiper('.features__slider', {

  navigation: {
    nextEl: '.features__button--next',
    prevEl: '.features__button--prev',
  },

  loop: true,

  pagination: {
    el: '.features__pagination',
    type: 'fraction',
  },
});
