const { langDictionaries, langPlaceholders } = require('./languages');

function changeInnerHTMLLanguage(lang) {
  for (const key in langDictionaries) {
    document.querySelector(`[data-lang="${key}"]`).innerHTML =
      langDictionaries[key][lang];
  }
}

function changePlaceholderLanguage(lang) {
  for (const key in langPlaceholders) {
    document.querySelector(`[data-lang="${key}"]`).placeholder =
      langPlaceholders[key][lang];
  }
}

function changeLanguage(lang) {
  changeInnerHTMLLanguage(lang);
  changePlaceholderLanguage(lang);
}

module.exports = {
  changeLanguage,
};
