'use strict';
// slider for features section

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

// scripts for form
const questionsForm = document.querySelector('.questions__form');

questionsForm.addEventListener('submit', (event) => {
  event.preventDefault();
  questionsForm.reset();
});

const formButton = document.querySelector('.form__button');
const formFieldInput = document.querySelector('.form__field--input');

formFieldInput.addEventListener('change', (event) => {
  if (event.target.value) {
    formButton.classList.remove('form__button--disabled');
    formButton.classList.add('form__button--active');
  }
});

// onTable scripts
if (document.documentElement.clientWidth >= 768) {
  const headerNavigation = document.querySelector('.header__navigation');

  headerNavigation.hidden = false;

  // change position for benefits__image
  const copyBenefitImageWrapper = document.querySelector(
    '.benefits__image-wrapper'
  ).cloneNode(true);

  document.querySelector(
    '.benefits__image-wrapper'
  ).remove();

  const benefitsContent = document.querySelector('.benefits__content');

  benefitsContent.after(copyBenefitImageWrapper);

  // delete class swiper on technology
  const swiper = document.querySelector('.swiper');

  swiper.classList.remove('swiper');

  // change position first block__title
  const copyFirtstBlockTitle = document.querySelector('.block__title')
    .cloneNode(true);
  const blockContentFirst = document.querySelector('.block__content');

  document.querySelector('.block__title').remove();
  blockContentFirst.prepend(copyFirtstBlockTitle);

  // change positions second block__title & picture.block__img

  const copyBlockTitleLarger = document.querySelector('.block__title--larger')
    .cloneNode(true);
  const blockContentSecond = document.querySelectorAll('.block__content')[1];

  document.querySelectorAll('.block__title')[1].remove();
  blockContentSecond.prepend(copyBlockTitleLarger);

  const copySecondPictureBlockImg = document.querySelectorAll(
    'picture.block__img'
  )[1].cloneNode(true);

  document.querySelectorAll('picture.block__img')[1].remove();
  blockContentSecond.after(copySecondPictureBlockImg);

  // add container for features section
  const containerDisabled = document.querySelector('.container--disabled');

  containerDisabled.classList.remove('container--disabled');
  containerDisabled.classList.add('container');
}
