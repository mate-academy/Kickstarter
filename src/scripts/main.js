'use strict';

import { burgerMenu } from './utils/burgerMenu';
import { slider } from './utils/slider';
import { changeLanguage } from './utils/translations';

document.addEventListener('DOMContentLoaded', () => {
  burgerMenu();
  slider();

  const enButtons = document.querySelectorAll(
    '.language-en, .actions__buttons-en, .language-action__buttons-en',
  );
  const uaButtons = document.querySelectorAll(
    '.language-ua, .actions__buttons-ua, .language-action__buttons-ua',
  );

  enButtons.forEach((btn) =>
    btn.addEventListener('click', () => changeLanguage('en')),
  );
  uaButtons.forEach((btn) =>
    btn.addEventListener('click', () => changeLanguage('ua')),
  );

  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  changeLanguage(savedLanguage);
});
