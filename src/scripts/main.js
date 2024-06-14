'use strict';
const { changeLanguage } = require('./languageUtils');
const { langDictionaries } = require('./languages');
const {
  updateClassesForAboutUsCardText,
  updateClassesForFeaturesInnerText,
} = require('./classUtils');
const { sliderBenefits } = require('./sliderBenefits');
const { sliderFeatures } = require('./sliderFeatures');
const {
  adaptTitleFontSize,
  removeTitleFontStyle,
} = require('./heroTitleUtils');

// #region languages
const radioInputs = document.querySelectorAll('input[name="lang"]');
const labels = Array.from(document.querySelectorAll('.langs__btn'));

radioInputs.forEach((input) => {
  input.addEventListener('change', function () {
    const checkedLanguage = this.value;
    changeLanguage(checkedLanguage);
    toggleActive();

    if (window.innerWidth < 768) {
      adaptTitleFontSize();
    } else {
      removeTitleFontStyle();
    }
  });
});

function toggleActive() {
  labels.forEach((label) => {
    label.classList.toggle('langs__btn--active');
  });
}
// #endregion

// #region classes
updateClassesForAboutUsCardText();
updateClassesForFeaturesInnerText();

window.addEventListener('resize', function () {
  updateClassesForAboutUsCardText();
  updateClassesForFeaturesInnerText();
});
// #endregion

// region sliders
sliderBenefits();
sliderFeatures();
// #endregion
