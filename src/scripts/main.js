'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const enBtn = document.querySelector('.top__lang--item-en');
  const uaBtn = document.querySelector('.top__lang--item-ua');

  async function changeLang(lang) {
    try {
      const response = await fetch(`../translate/${lang}.json`);

      if (!response.ok) {
        console.log('Error');
      }

      const texts = await response.json();

      Object.entries(texts).forEach(([key, text]) => {
        document.querySelectorAll(`[data-key="${key}"]`).forEach((el) => {
          el.textContent = text;
        });
      });

      localStorage.setItem('lang', lang);
    } catch (error) {
      console.log('Error');
    }
  }

  enBtn?.addEventListener('click', () => changeLang('en'));
  uaBtn?.addEventListener('click', () => changeLang('ua'));

  changeLang(localStorage.getItem('lang') || 'en');
});
