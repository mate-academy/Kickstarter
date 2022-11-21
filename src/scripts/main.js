'use strict';
// import Swiper from "swiper";

const forms = document.querySelectorAll('.form__field');

const formField = document.querySelector('.form');

formField.addEventListener('submit', (event) => {
  event.preventDefault();

  forms.forEach((form) => {
    form.value = '';
  });
});

// const swiper = new Swiper('.features__slider, .swiper', {
//   navigation: {
//     nextEl: '.features__button--next',
//     prevEl: '.features__button--prev',
//   },

//   pagination: {
//     type: 'fraction',
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

const swiper = new Swiper('.swiper, .features__slider', {
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
