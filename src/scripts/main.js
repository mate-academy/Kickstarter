'use strict';

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#menu') {
      document.body.classList.add('page__body--with-menu');
    } else {
      document.body.classList.remove('page__body--with-menu');
    }
  });

  const form = document.querySelector('#form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.form-field__field');

    inputs.forEach(input => {
      input.value = '';
    });
  });

  const benefits = [...document.querySelectorAll('.benefit')];
  const slider = document.querySelector('.slider');
  let slideIndexToShow = 0;

  slider.addEventListener('click', (e) => {
    const shouldSlideRight = e.target.dataset.direction === 'next'
    && slideIndexToShow < benefits.length - 1;
    const shouldSlideLeft = e.target.dataset.direction === 'prev'
    && slideIndexToShow > 0;

    if (shouldSlideRight) {
      slideIndexToShow++;
    } else if (shouldSlideLeft) {
      slideIndexToShow--;
    }

    for (let i = 0; i < benefits.length; i++) {
      if (i === slideIndexToShow) {
        benefits[i].style.display = 'block';
      } else {
        benefits[i].style.display = 'none';
      }
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      benefits.forEach(benefit => {
        if (benefit.style.display === 'none') {
          benefit.style.display = 'block';
        }
      });
    } else if (window.innerWidth < 768) {
      benefits.forEach((benefit, i) => {
        if (i !== 0 && benefit.style.display === 'block') {
          benefit.style.display = 'none';
        }
      });
    }
  });
});
