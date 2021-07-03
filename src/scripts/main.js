'use strict';

const form = document.querySelector('.form');
const formEmail = document.querySelector('.form__email');
const formMessage = document.querySelector('.form__message');
const checkBox = document.querySelector('.nav-btn__checkbox');
const navList = document.querySelectorAll('.nav__item');
const languageEnglish = document.querySelector('.languages__item--en');
const languageUkraine = document.querySelector('.languages__item--ua');

languageEnglish.addEventListener('click', () => {
  languageEnglish.classList.toggle('languages__item--active');
  languageUkraine.classList.toggle('languages__item--active');
});

languageUkraine.addEventListener('click', () => {
  languageUkraine.classList.toggle('languages__item--active');
  languageEnglish.classList.toggle('languages__item--active');
});

window.addEventListener('scroll', () => {
  if (checkBox.checked) {
    checkBox.checked = false;
  }
});

navList.forEach(item => {
  item.addEventListener('click', () => {
    checkBox.checked = false;
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  formEmail.value = '';
  formMessage.value = '';
});
