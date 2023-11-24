'use strict';

const menu = document.getElementById('menu');
const open = document.getElementById('open');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  menu.style.transform = 'translateX(0)';
});

close.addEventListener('click', () => {
  menu.style.transform = 'translateX(200%)';
});

const en = document.querySelectorAll('.menu__language--EN');
const ua = document.querySelectorAll('.menu__language--UA');
const en1 = document.getElementById('EN1');
const en2 = document.getElementById('EN2');
const ua1 = document.getElementById('UA1');
const ua2 = document.getElementById('UA2');

en.forEach(english => {
  english.classList.add('activeLang');

  english.addEventListener('click', () => {
    en.forEach(eng => {
      eng.classList.toggle('activeLang', eng === english);
    });

    if (en1.classList.contains('activeLang')) {
      en2.classList.add('activeLang');
    }

    if (en2.classList.contains('activeLang')) {
      en1.classList.add('activeLang');
    }

    ua.forEach(ukr => {
      ukr.classList.remove('activeLang');
    });
  });
});

ua.forEach(ukr => {
  ukr.addEventListener('click', () => {
    ua.forEach(uk => {
      uk.classList.toggle('activeLang', uk === ukr);
    });

    if (ua1.classList.contains('activeLang')) {
      ua2.classList.add('activeLang');
    }

    if (ua2.classList.contains('activeLang')) {
      ua1.classList.add('activeLang');
    }

    en.forEach(eng => {
      eng.classList.remove('activeLang');
    });
  });
});
