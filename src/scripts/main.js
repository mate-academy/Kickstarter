'use strict';

const toggler = document.querySelector('.presentation__img-play');

toggler.addEventListener('click', () => {
  toggler.classList.toggle('img-play--active');
});
