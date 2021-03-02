'use strict';

const burgerButton = document.querySelector('.menu__btn');
const burgerMenu = document.querySelector('.menu__burger');

burgerButton.addEventListener('click', (e) => {
  const flag = e.target.closest('.menu__btn').classList.toggle('flag');

  if (flag) {
    burgerMenu.style.display = 'flex';
  } else {
    burgerMenu.style.display = 'none';
  }

  window.onresize = function(e) {
    const currentWidth = e.target.innerWidth;

    if (currentWidth < 768 && flag) {
      burgerMenu.style.display = 'flex';
    } else {
      burgerMenu.style.display = 'none';
    }
  };
});
