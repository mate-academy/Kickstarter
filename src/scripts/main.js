'use strict';
// nav-tablet/desktop transition after scrolling;

const navbarmobile = document.querySelector('.nav--mobile');

const navbarOffsetTopMobile = navbarmobile.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarOffsetTopMobile) {
    navbarmobile.classList.add('nav--mobile--sticky');
  } else {
    navbarmobile.classList.remove('nav--mobile--sticky');
  }
});

// nav-tablet/desktop transition after scrolling;

const navbar = document.querySelector('.nav--tablet');

const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('nav--tablet--sticky');
  } else {
    navbar.classList.remove('nav--tablet--sticky');
  }
});

// changing lists

const afterButton = document.querySelector('.list__button--after');
const beforeButton = document.querySelector('.list__button--before');

const lists = document.querySelectorAll('.features__list');
const listPages = document.querySelectorAll('.list__page');

let activeListIndex = 0;

afterButton.addEventListener('click', function(event) {
  event.preventDefault();
  switchToList(activeListIndex + 1);
});

beforeButton.addEventListener('click', function(event) {
  event.preventDefault();
  switchToList(activeListIndex - 1);
});

function switchToList(index) {
  lists[activeListIndex].classList.remove('list--active');
  lists[activeListIndex].classList.add('list--inactive');
  listPages[activeListIndex].classList.remove('list__page--active');

  activeListIndex = index;

  if (activeListIndex >= lists.length) {
    activeListIndex = 0;
  } else if (activeListIndex < 0) {
    activeListIndex = lists.length - 1;
  }

  lists[activeListIndex].classList.remove('list--inactive');
  lists[activeListIndex].classList.add('list--active');
  listPages[activeListIndex].classList.add('list__page--active');
}

// reset form after submission

const form = document.querySelector('#form, #form--ukr');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// menu classes added for shop and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    document.getElementById('overlay').classList.add('overlay--active');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.getElementById('overlay').classList.remove('overlay--active');
  }
});
