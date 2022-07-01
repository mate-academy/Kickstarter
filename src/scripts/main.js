'use strict';

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.questions__field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

// new Swiper ('.option-slider', {
//   // navigation: {
//   //   nextEl: '.swiper-button-next',
//   //   prevEl: '.swiper-butoon-prev'
//   // },

//   pagination: {
//     el: '.swiper-pagination',

//     type: 'fraction',
//   },

//   loop: true,

//   autoplay: {
//     delay: 2000,

//     stopOnLastSide: true,

//     disableOnInteraction: false
//   }
// });
