import { translations } from './translation.js';

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    const keys = key.split('.');
    let translation = translations[lang];

    keys.forEach((k) => {
      translation = translation[k];
    });

    element.textContent = translation;
  });
}

export function initLanguageSelector() {
  const langOptions = document.querySelectorAll('.specs__language-option');
  const currentLang = localStorage.getItem('selectedLang') || 'en';

  updateLanguage(currentLang);

  langOptions.forEach((option) => {
    option.addEventListener('click', () => {
      const selectedLang = option.dataset.lang;

      langOptions.forEach((opt) => {
        if (opt.dataset.lang === selectedLang) {
          opt.classList.add('specs__language-option--active');
        } else {
          opt.classList.remove('specs__language-option--active');
        }
      });

      localStorage.setItem('selectedLang', selectedLang);
      updateLanguage(selectedLang);
    });
  });
}
