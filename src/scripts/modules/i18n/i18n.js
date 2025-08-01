import { translations } from './config.js';
import {
  updateTextContent,
  updatePlaceholders,
  updateHtmlLangAttributes,
  updateActiveLangLinks,
} from './dom.js';
import { startTransition, endTransition } from './transition.js';
import { setStoredLanguage } from './storage.js';

export function setLanguage(lang) {
  const dict = translations[lang];

  startTransition();

  setTimeout(() => {
    updateTextContent(dict);
    updatePlaceholders(dict);
    updateActiveLangLinks(lang);
    updateHtmlLangAttributes(lang);
    setStoredLanguage(lang);
    endTransition();
  }, 250);
}
