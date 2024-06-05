'use strict';
const { changeLanguage } = require('./languageUtils');
const { langDictionaries } = require('./languages');
const {
  updateClassesForAboutUsCardText,
  updateClassesForFeaturesInnerText,
} = require('./classUtils');
const { sliderBenefits } = require('./sliderBenefits');
const { sliderFeatures } = require('./sliderFeatures');

// #region languages
const radioInputs = document.querySelectorAll('input[name="lang"]');
const labels = Array.from(document.querySelectorAll('.langs__btn'));

radioInputs.forEach((input) => {
  input.addEventListener('change', function () {
    const checkedLanguage = this.value;
    changeLanguage(checkedLanguage);
    toggleActive();

    if (window.innerWidth < 768) {
      setTitleFontSize(checkedLanguage);
    }
  });
});

function toggleActive() {
  labels.forEach((label) => {
    label.classList.toggle('langs__btn--active');
  });
}

function setTitleFontSize(lang) {
  const titleFontSizeOnMobile = 40;
  const allowableNumberOfLettersInAWord = 10;
  const reduceTheFontSizeByOneLetter = 4;

  const str = langDictionaries.hero__title[lang];
  const longestWordLenght = str.split(' ').map((v) => v.trim().length)[0];

  const title = document.querySelector('[data-lang="hero__title"]');

  if (longestWordLenght > allowableNumberOfLettersInAWord) {
    title.style.fontSize = `${titleFontSizeOnMobile - reduceTheFontSizeByOneLetter * (longestWordLenght - allowableNumberOfLettersInAWord)}px`;
    title.style.lineHeight = `1.3`;
  } else {
    title.style.fontSize = null;
    title.style.lineHeight = null;
  }
}
// #endregion

// #region classes
// Initial update on page load
updateClassesForAboutUsCardText();
updateClassesForFeaturesInnerText();

// Add event listener for window resize
window.addEventListener('resize', function () {
  updateClassesForAboutUsCardText();
  updateClassesForFeaturesInnerText();
});
// #endregion

// region sliders
sliderBenefits();
sliderFeatures();
// #endregion
