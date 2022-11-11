'use strict';

function getFeaturesSlider() {
  const featuresSliderWrapper = document.querySelector(
    '.features__slider-wrapper'
  );
  const featuresButtonLeft = document.querySelector('.features-button__left');
  const featuresButtonRight = document.querySelector('.features-button__rigth');
  const featuresButtonPaginationStart = document.querySelector(
    '.features-button__pagination-start'
  );

  let offset = 0;

  featuresButtonRight.addEventListener('click', () => {
    if (+featuresButtonPaginationStart.innerHTML > 0
      && +featuresButtonPaginationStart.innerHTML < 3) {
      const newValue = +featuresButtonPaginationStart.innerHTML + 1;

      featuresButtonPaginationStart.innerHTML = `0${newValue}`;
    }

    if (offset < 520 && offset >= 0) {
      offset += 260;
    } else {
      return;
    }

    featuresSliderWrapper.style.left = `-${offset}px`;
  });

  featuresButtonLeft.addEventListener('click', () => {
    if (+featuresButtonPaginationStart.innerHTML > 1
      && +featuresButtonPaginationStart.innerHTML <= 3) {
      const newValue = +featuresButtonPaginationStart.innerHTML - 1;

      featuresButtonPaginationStart.innerHTML = `0${newValue}`;
    }

    if (offset <= 520 && offset > 0) {
      offset -= 260;
    } else {
      return;
    }

    featuresSliderWrapper.style.left = `-${offset}px`;
  });
};

if (document.documentElement.clientWidth >= 320
  && document.documentElement.clientWidth < 1280) {
  getFeaturesSlider();
};
