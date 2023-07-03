'use strict';

// menu

const menu = document.querySelector('.top-menu__button');
const menuBody = document.querySelector('.page__menu');
const body = document.querySelector('.page__body');
const menuLinks = document.querySelectorAll('.menu__link');

function menuClose() {
  menu.classList.remove('active');
  menuBody.classList.remove('active');
  body.classList.remove('lock');
}

if (menu) {
  menu.addEventListener('click', function(e) {
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
      const logo = document.querySelector('.top-menu__title');

      menuBody.classList.add('active');
      body.classList.add('lock');

      logo.addEventListener('click', (elem) => {
        elem.preventDefault();
        menuClose();
      });

      if (menuLinks.length > 0) {
        menuLinks.forEach(el => {
          el.addEventListener('click', function() {
            menuClose();
          });
        });
      };
    } else {
      menuClose();
    }
  });
};

// lang

const lang = document.querySelectorAll('.top-menu__btn-lang');

for (let index = 0; index < lang.length; index++) {
  const langS = lang[index];

  langS.addEventListener('click', function(e) {
    for (let i = 0; i < lang.length; i++) {
      const lang1 = lang[i];

      lang1.classList.remove('active');
    }
    lang.classList.add('active');
    e.preventDefault();
  });
};

// form

document.querySelector('.questions__form').addEventListener('submit',
  function(event) {
    event.preventDefault();
    document.querySelector('.questions__form').reset();
  });
