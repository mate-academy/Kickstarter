'use strict';

const langSwitcher
  = document.querySelectorAll('.lang-switch');

const changeLang = () => {
  const langItems = document.querySelectorAll('.lang-case');

  langItems.forEach(i => {
    i.classList.toggle('lang-case-active');
  });
};

langSwitcher.forEach(i => {
  i.addEventListener('click', (e) => {
    e.preventDefault();
    changeLang();
  });
});
