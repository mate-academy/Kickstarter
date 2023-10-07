'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

const navLinks = document.querySelectorAll('.shop__nav-link');
const cards = document.querySelector('.shop__cards');

const targetLink = document.querySelector('#target');
const bodyLink = document.querySelector('#body');
const hairLink = document.querySelector('#hair');
const candlesLink = document.querySelector('#candles');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    navLinks.forEach(a => {
      a.classList.remove('shop__nav-link--target');
    });

    const face = 156;
    const body = 53;
    const hair = -50;
    const candles = -154;

    const targetId = link.getAttribute('href');

    if (targetId === '#face') {
      cards.style.transform = 'translateX(' + face + '%)';
      targetLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#body') {
      cards.style.transform = 'translateX(' + body + '%)';
      bodyLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#hair') {
      cards.style.transform = 'translateX(' + hair + '%)';
      hairLink.classList.add('shop__nav-link--target');
    }

    if (targetId === '#candles') {
      cards.style.transform = 'translateX(' + candles + '%)';
      candlesLink.classList.add('shop__nav-link--target');
    }
  });
});
