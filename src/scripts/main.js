'use strict';

const asideMenu = document.querySelector('.aside');
const btnMenu = document.querySelector('.top-bar__menu-btn');
const btnClose = document.querySelector('.aside__menu-btn');

if (asideMenu && btnMenu && btnClose) {
  btnMenu.addEventListener('click', () => {
    asideMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  });

  btnClose.addEventListener('click', () => {
    asideMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  });
}

const qustionsForm = document.querySelector('.questions-form');

qustionsForm.addEventListener('submit', function(e) {
  e.preventDefault();
  this.reset();
});

const linksMenu = document.querySelectorAll('.aside__nav-link');

linksMenu.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      asideMenu.classList.remove('is-open');
      document.body.style.overflow = '';

      targetElement.scrollIntoView ({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

const mediaQ = window.matchMedia('(min-width: 1280px)');

function minWidth(e) {
  if (e.matches) {
    if (asideMenu.classList.contains('is-open')) {
      asideMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  }
}

mediaQ.addEventListener('change', minWidth);
minWidth(mediaQ);
