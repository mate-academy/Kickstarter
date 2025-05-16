'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const featuresList = document.querySelectorAll('.features__list');
  const nextBtn = document.querySelector('.features__arrow--next');
  const prevBtn = document.querySelector('.features__arrow--prev');
  const page = document.querySelector('.features__page--active');
  const languages = document.querySelectorAll('.controls__language-option');

  let currentIndex = 0;
  const maxIndex = featuresList.length - 1;

  function updateDisplay() {
  featuresList.forEach((feature, i) => {
    // if (i !== currentIndex) {
    //   feature.classList.remove('is-visible');
    // } else {
    //   feature.classList.add('is-visible');
    // }

    // feature.classList.remove('is-visible');

    //  feature.classList.toggle('is-visible', i === currentIndex);

    feature.classList.toggle('is-visible', i === currentIndex);
  });

    page.textContent = `0${currentIndex + 1}`;

    prevBtn.classList.toggle('disabled', currentIndex === 0);
    nextBtn.classList.toggle('disabled', currentIndex === maxIndex);
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateDisplay();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateDisplay();
    }
  });

  updateDisplay();

  function changeLanguage() {
    languages.forEach((el) => {
       el.classList.toggle('controls__language-option--active');
    });
  }

  languages.forEach(lang => lang.addEventListener('click', changeLanguage));
});
