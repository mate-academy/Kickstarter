'use strict';

const form = document.querySelector('.form');
const formEmail = document.querySelector('.form__email');
const formMessage = document.querySelector('.form__message');
const checkBox = document.querySelector('.nav-btn__checkbox');
const navList = document.querySelectorAll('.nav__item');
const languageEnglish = document.querySelector('.languages__item--en');
const languageUkraine = document.querySelector('.languages__item--ua');

function makeNotification(type, text) {
  const notification = document.createElement('div');

  notification.classList.add('notification');
  notification.classList.add(`notification--${type}`);
  notification.append(text);

  return notification;
}

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

  const notificationSuccess
  = makeNotification('success', 'Your message was succesfully send!');

  document.body.append(notificationSuccess);

  formEmail.value = '';
  formMessage.value = '';

  setTimeout(() => {
    notificationSuccess.remove();
  }, 1500);
});
