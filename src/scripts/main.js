'use strict';

const langEn = document.querySelector('.top__languigeEN');
const langUa = document.querySelector('.top__languigeUA');

langEn.addEventListener('click', () => {
  langEn.classList.add('top__languigeEN--active');
  langEn.classList.remove('top__languigeEN--passive');
  langUa.classList.add('top__languigeUA--passive');
  langUa.classList.remove('top__languigeUA--active');
});

langUa.addEventListener('click', () => {
  langEn.classList.add('top__languigeEN--passive');
  langEn.classList.remove('top__languigeEN--active');
  langUa.classList.add('top__languigeUA--active');
  langUa.classList.remove('top__languigeUA--passive');
});
