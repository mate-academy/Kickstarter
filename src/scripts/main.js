'use strict';

window.addEventListener('hashchange', () => {
  const langU = document.querySelectorAll('.menu__language-ua');
  const langE = document.querySelectorAll('.menu__language-en');

  if (window.location.hash === '#ua' || window.location.hash === '#nav-ua') {
    for (let i = 0; i < langU.length; i++) {
      langU[i].classList.add('menu__language-ua--active');
      langE[i].classList.add('menu__language-en--disabled');
    }
  } else if (window.location.hash === '#en'
  || window.location.hash === '#nav-en') {
    for (let i = 0; i < langU.length; i++) {
      langU[i].classList.remove('menu__language-ua--active');
      langE[i].classList.remove('menu__language-en--disabled');
    }
  }
});

function rClass() {
  document.querySelector('.header__line')
    .classList.remove('header__line--active');
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav') {
    document.querySelector('.header__line')
      .classList.add('header__line--active');
    setTimeout(rClass, 310);
  }
});
