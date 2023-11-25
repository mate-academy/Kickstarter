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

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
