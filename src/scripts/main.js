/* eslint-disable-next-line */
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
