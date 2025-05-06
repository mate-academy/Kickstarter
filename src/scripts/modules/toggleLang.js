import en from '../../locales/en.json';
import ua from '../../locales/ua.json';

const setENBtn = [...document.querySelectorAll('[data-type="translate-EN"]')];
const setUABtn = [...document.querySelectorAll('[data-type="translate-UA"]')];

const toggleLang = {
  en: {
    btn: setENBtn,
    lang: 'en',
    toggledLang: 'ua',
  },

  ua: {
    btn: setUABtn,
    lang: 'ua',
    toggledLang: 'en',
  },
};

let translations = en;

function translatePage() {
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n').split('.');

    el.innerText = translations[key[0]][key[1]];
  });
}

function setLanguage(newLang) {
  const pageTitle = document.querySelector('h1');

  if (newLang === 'ua') {
    if (pageTitle.classList.contains('ua')) {
      return;
    }

    pageTitle.classList.add('ua');
  } else {
    pageTitle.classList.remove('ua');
  }

  translations = newLang === 'en' ? en : ua;

  translatePage();
}

function toggleLangFunc(langToToggle) {
  if (!Object.hasOwn(toggleLang, langToToggle)) {
    return;
  }

  const currentProperties = toggleLang[langToToggle];

  setLanguage(currentProperties.lang);

  toggleLang[currentProperties.toggledLang].btn.forEach((el) => {
    el.classList.add('inactive');
  });
}

module.exports = {
  toggleLangFunc,
  setENBtn,
  setUABtn,
};
