'use strict';

import { en, ua } from "./languages";



/* page */


const page = document.querySelector('.page');
const pageLanguages = document.querySelectorAll('.page__language');

// language conversion logic

pageLanguages.forEach(lang => {
  lang.addEventListener('click', function() {
    const key = lang.getAttribute('href').replace('#', '');
    switchLanguage(
      key === 'EN' ? en : ua
    );
    pageLanguages.forEach(one => one.classList.remove('language-selected'));
    lang.classList.add('language-selected');
  })
})

function switchLanguage(lang) {
  document.querySelectorAll('[data-translate]').forEach(element => {

    const value = element.getAttribute('data-translate');
    const id = element.getAttribute('data-id') || '';

    if (lang[value]) {
      if (id) {
        element.textContent = lang[value][+id];
      } else {
        element.textContent = lang[value];
      }
    }
  })
}



/* menu */


const menuLinks = document.querySelectorAll('.menu__link');

// scrolling logic

const menuOpener = document.getElementById('menu--opener');
const menuLogo = document.getElementById('menu--logo');
const menuSpecs = document.getElementById('menu--specs');
const menuCloser = document.getElementById('menu--closer');

const menuClosers = [
  menuLogo, ...menuLinks, menuSpecs, ...pageLanguages, menuCloser
];

menuOpener.addEventListener('click', function() {
  page.classList.add('no-scrolling');
});

menuClosers.forEach(menuCloser => {
  menuCloser.addEventListener('click', function() {
    page.classList.remove('no-scrolling');
  });
})


// visited link logic

menuLinks.forEach(link => {
  link.addEventListener('click', function() {
    menuLinks.forEach(l => l.classList.remove('link-visited'));
    link.classList.add('link-visited');
  });
});



/* features */


// card-switching logic

const featureCards = Array.from(document
  .querySelectorAll('.features__feature'))
  .reverse();

const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');
const featureIndex = document.querySelector('.displayed-card-index');

sliderLeft.addEventListener('click', function() {
  const i = featureCards
    .findIndex(feature => feature.classList.contains('display'));

  if (i > 0) {
    featureCards[i].classList.replace('display', 'hide');
    featureCards[i - 1].classList.replace('hide', 'display');

    featureIndex.textContent = `0${i}`;
  }

  if (i <= 1) {
    sliderLeft.classList.add('light');
  }

  sliderRight.classList.remove('light');
});

sliderRight.addEventListener('click', function() {
  const i = featureCards
    .findIndex(feature => feature.classList.contains('display'));

    if (i < 2) {
      featureCards[i].classList.replace('display', 'hide');
      featureCards[i + 1].classList.replace('hide', 'display');

      featureIndex.textContent = `0${i + 2}`;
    }

  if (i === 1) {
    sliderRight.classList.add('light');
  }

  sliderLeft.classList.remove('light');
});



/* questions */


// form logic

const form = document.getElementById('form');
const submitButton = document.getElementById('submit-button');
const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();


  form.reset();
});

function updateButtonState() {
  if (!emailInput.value.trim() || !messageInput.value.trim()) {
    submitButton.setAttribute('disabled', 'disabled');
  } else {
    submitButton.removeAttribute('disabled');
  }
}

emailInput.addEventListener('input', updateButtonState);

messageInput.addEventListener('input', updateButtonState)
