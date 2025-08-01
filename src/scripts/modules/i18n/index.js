import { setLanguage } from './i18n.js';
import { getStoredLanguage } from './storage.js';
import { getLanguageLinks } from './dom.js';
import { DEFAULT_LANG } from './constants.js';

function normalizeLang(text) {
  return text.toLowerCase().includes('pt') ? 'pt' : 'en';
}

export function initI18n() {
  const savedLang = getStoredLanguage() || DEFAULT_LANG;

  setLanguage(savedLang);

  getLanguageLinks().forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const lang = normalizeLang(e.target.textContent.trim());

      setLanguage(lang);
    });
  });
}
