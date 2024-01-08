'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const arrow = document.querySelector('.footer__link-arrow');
const form = document.querySelector('form');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    arrow.classList.remove('footer__link-arrow_none');
  } else {
    arrow.classList.add('footer__link-arrow_none');
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

arrow.addEventListener('click', topFunction);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  e.target.reset();
});
