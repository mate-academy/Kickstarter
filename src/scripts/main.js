'use strict';

function changeLanguages() {
  const activeClass = 'header__nav-button--active';
  const buttons = [...document.getElementsByClassName('js-language-button')];

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(el => {
        el.classList.remove(activeClass);
      });
      button.classList.add(activeClass);
    });
  });
}

window.addEventListener('load', () => {
  changeLanguages();
});
