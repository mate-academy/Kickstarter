export const DEFAULT_LANG = 'en';

export const LANG_CLASSES = {
  changing: 'lang-changing',
  prefix: 'lang-',
};

export const SELECTORS = {
  translatable: '[data-i18n]',
  langLinks: [
    // Header language switch
    '.header__nav--list-item-change-language-link',

    // Aside menu language switch
    '.aside__menu--bottom-i18n-link',
  ].join(', '),
};

export const PLACEHOLDER_IDS = {
  email: 'email',
  message: 'message',
};
