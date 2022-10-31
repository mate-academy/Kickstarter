'use strict';

const menuOpenButton = document.querySelector('.icon--menu');
const menuCloseButton = document.querySelector('.icon--close');
const navbarMobile = document.querySelector('.navbar-mobile');
const navbarMobileLinks = document.querySelector('.navbar-mobile__inner');

const formFields = document.querySelectorAll('.form__field');
// const formSubmit = document.querySelector('.form__button');
const form = document.querySelector('.form');

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

navbarMobileLinks.addEventListener('click', (e) => {
  navbarMobile.classList.toggle('navbar-mobile--active');
  document.body.classList.toggle('page__body--scroll');
});

// ============ Form Event ==============

form.addEventListener('submit', (e) => {
  e.preventDefault();

  formFields.forEach(input => {
    input.value = '';
  });
});
