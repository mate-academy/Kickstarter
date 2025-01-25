import ua from '../locale/ua';
import en from '../locale/en';

const translations = {
  en,
  ua,
};

export const changeLanguage = (lang) => {
  const elements = document.querySelectorAll('[data-translate-key]');

  elements.forEach((element) => {
    const key = element.getAttribute('data-translate-key');
    element.textContent = translations[lang][key];
  });

  const enButtons = document.querySelectorAll(
    '.language-en, .actions__buttons-en, .language-action__buttons-en',
  );
  const uaButtons = document.querySelectorAll(
    '.language-ua, .actions__buttons-ua, .language-action__buttons-ua',
  );

  if (lang === 'en') {
    uaButtons.forEach((btn) => btn.classList.remove('active-lang'));
    enButtons.forEach((btn) => btn.classList.add('active-lang'));
  } else if (lang === 'ua') {
    enButtons.forEach((btn) => btn.classList.remove('active-lang'));
    uaButtons.forEach((btn) => btn.classList.add('active-lang'));
  }

  localStorage.setItem('selectedLanguage', lang);
};
