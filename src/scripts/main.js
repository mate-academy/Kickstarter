'use strict';

const langEn = document.querySelector('.options__languigeEN');
const langUa = document.querySelector('.options__languigeUA');

langEn.addEventListener('click', () => {
  langEn.classList.add('options__languigeEN--active');
  langEn.classList.remove('options__languigeEN--passive');
  langUa.classList.add('options__languigeUA--passive');
  langUa.classList.remove('options__languigeUA--active');
});

langUa.addEventListener('click', () => {
  langEn.classList.add('options__languigeEN--passive');
  langEn.classList.remove('options__languigeEN--active');
  langUa.classList.add('options__languigeUA--active');
  langUa.classList.remove('options__languigeUA--passive');
});

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    header.classList.add('page__header--with-menu');
    main.classList.add('page__main--with-menu');
    footer.classList.add('page__footer--with-menu');
  } else {
    header.classList.remove('page__header--with-menu');
    main.classList.remove('page__main--with-menu');
    footer.classList.remove('page__footer--with-menu');
  }
});

const form = document.querySelector('.questions__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
