'use strict';
const { changeLanguage } = require('./languageUtils');
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
  });
});

function toggleActive() {
  labels.forEach((label) => {
    label.classList.toggle('langs__btn--active');
  });
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
