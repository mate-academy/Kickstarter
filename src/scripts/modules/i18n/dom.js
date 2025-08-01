import { SELECTORS, PLACEHOLDER_IDS } from './constants.js';

export const getTranslatableElements = () =>
  document.querySelectorAll(SELECTORS.translatable);
export const getLanguageLinks = () =>
  document.querySelectorAll(SELECTORS.langLinks);
export const getHtmlElement = () => document.documentElement;

export const updateTextContent = (dict) => {
  getTranslatableElements().forEach((el) => {
    const key = el.getAttribute('data-i18n');

    if (!dict[key]) {
      return;
    }

    const tagName = el.tagName.toLowerCase();

    // Evita aplicar textContent em elementos que não devem ter texto direto
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
      return;
    }

    el.textContent = dict[key];
  });
};

export const updatePlaceholders = (dict) => {
  const email = document.getElementById(PLACEHOLDER_IDS.email);
  const message = document.getElementById(PLACEHOLDER_IDS.message);

  if (email && dict.contact_placeholder_email) {
    email.placeholder = dict.contact_placeholder_email;
  }

  if (message && dict.contact_placeholder_message) {
    message.placeholder = dict.contact_placeholder_message;
  }
};

export const updateHtmlLangAttributes = (lang) => {
  const html = getHtmlElement();

  html.setAttribute('data-lang', lang);
  html.classList.remove('lang-en', 'lang-pt');
  html.classList.add(`lang-${lang}`);
};

export const updateActiveLangLinks = (lang) => {
  getLanguageLinks().forEach((link) => {
    const text = link.textContent.trim().toLowerCase();
    const linkLang = text.includes('pt') ? 'pt' : 'en';

    link.classList.toggle('active', linkLang === lang);
  });
};
