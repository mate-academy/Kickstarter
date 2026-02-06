'use strict';

/* eslint-disable no-console */
import translationEnglish from './translate-en.json';
import translationUkrainian from './translate-ua.json';

const DATA_ACTION_TRANSLATE_EN = 'translate-en';
const DATA_ACTION_TRANSLATE_UA = 'translate-ua';
const DATA_TRANSLATE_PREFIX = 'data-translate-';
const ATTR_DATA_TRANSLATE_VARS = `${DATA_TRANSLATE_PREFIX}vars`;
const CLASS_SELECTED_LNG_BTN = 'language-selector__button--selected';
const KEY_EN = 'en';
const KEY_UA = 'ua';
const STORAGE_LANG_KEY = 'pref-lang';

const languageEnBtns = document.querySelectorAll(
  `[data-action="${DATA_ACTION_TRANSLATE_EN}"]`,
);
const languageUaBtns = document.querySelectorAll(
  `[data-action="${DATA_ACTION_TRANSLATE_UA}"]`,
);

const LANG_BUTTONS = {
  [KEY_EN]: languageEnBtns,
  [KEY_UA]: languageUaBtns,
};

const TRANSLATE_TARGETS = {
  text: 'textContent',
  'aria-label': 'aria-label',
  placeholder: 'placeholder',
  alt: 'alt',
};

let currentLang = null;

if (!languageEnBtns.length || !languageUaBtns.length) {
  console.error('Language buttons not found in DOM');
}

const getValue = (key, dictionary) => {
  return key.split('.').reduce((obj, part) => {
    return obj && obj[part] ? obj[part] : null;
  }, dictionary);
};

const translate = (lang) => {
  const dictionary =
    lang === KEY_UA ? translationUkrainian : translationEnglish;

  Object.entries(TRANSLATE_TARGETS).forEach(([dataKey, target]) => {
    document
      .querySelectorAll(`[${DATA_TRANSLATE_PREFIX}${dataKey}]`)
      .forEach((el) => {
        const key = el.getAttribute(`${DATA_TRANSLATE_PREFIX}${dataKey}`);
        const vars = el.hasAttribute(ATTR_DATA_TRANSLATE_VARS)
          ? JSON.parse(el.getAttribute(ATTR_DATA_TRANSLATE_VARS))
          : {};
        let value = getValue(key, dictionary);

        if (!value) {
          return;
        }

        Object.entries(vars).forEach(([varKey, varValue]) => {
          const varTranslation = getValue(varValue, dictionary) || varValue;

          value = value.replaceAll(`{${varKey}}`, varTranslation);
        });

        if (target === 'textContent') {
          el.textContent = value;
        } else {
          el.setAttribute(target, value);
        }
      });
  });
};

const updateLangBtns = (lang) => {
  Object.entries(LANG_BUTTONS).forEach(([key, btns]) => {
    btns.forEach((btn) => {
      btn.classList.toggle(CLASS_SELECTED_LNG_BTN, key === lang);
    });
  });
};

const applyLang = (lang) => {
  if (lang === currentLang) {
    localStorage.setItem(STORAGE_LANG_KEY, lang);

    return;
  }
  translate(lang);
  updateLangBtns(lang);
  currentLang = lang;
  localStorage.setItem(STORAGE_LANG_KEY, lang);
};

const addBtnListeners = () => {
  Object.entries(LANG_BUTTONS).forEach(([key, btns]) => {
    btns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        applyLang(key);
      });
    });
  });
};

window.addEventListener('load', (e) => {
  const storedLang = localStorage?.getItem(STORAGE_LANG_KEY);

  const lang = storedLang || KEY_EN;

  applyLang(lang);

  addBtnListeners();
});
