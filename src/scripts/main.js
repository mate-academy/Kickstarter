'use strict';

const menuOpenButton = document.querySelector('.icon--menu');
const menuCloseButton = document.querySelector('.icon--close');
const navbarMobile = document.querySelector('.navbar-mobile');

const formFields = document.querySelectorAll('.form__field');
const formSubmit = document.querySelector('.form__button');

// ========= Menu Events ================
menuOpenButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMobile.classList.toggle('navbar-mobile--active');
  document.body.classList.toggle('page__body--scroll');
});

menuCloseButton.addEventListener('click', (e) => {
  e.preventDefault();
  navbarMobile.classList.toggle('navbar-mobile--active');
  document.body.classList.toggle('page__body--scroll');
});

// ============ Form Event ==============

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  formFields.forEach(input => {
    input.value = '';
  });
});
