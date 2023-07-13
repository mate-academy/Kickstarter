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

// reset form after submission

const form = document.querySelector('#form, #form--ukr');

form.addEventListener('submit', buttonClick, false);

function buttonClick(event) {
  event.preventDefault();
  form.reset();
};

// menu classes added for shop and overlay

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu'
  || window.location.hash === '#menu--ukr') {
    document.body.classList.add('page__body--with-menu');
    document.getElementById('overlay').classList.add('overlay--active');
  } else {
    document.body.classList.remove('page__body--with-menu');
    document.getElementById('overlay').classList.remove('overlay--active');
  }
});

// slider eng
document.addEventListener('DOMContentLoaded', function() {
  const beforeButton = document.getElementById('before-button');
  const afterButton = document.getElementById('after-button');
  const list1 = document.getElementById('feature-list-1');
  const list2 = document.getElementById('feature-list-2');
  const list3 = document.getElementById('feature-list-3');
  const page1 = document.querySelector('.list__page--active');
  const page2 = document.querySelectorAll('.list__page')[1];
  const page3 = document.querySelectorAll('.list__page')[2];

  beforeButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (list1.classList.contains('list--active')) {
      list1.classList.remove('list--active');
      list1.classList.add('list--inactive');
      list3.classList.remove('list--inactive');
      list3.classList.add('list--active');
      page1.classList.remove('list__page--active');
      page3.classList.add('list__page--active');
    } else if (list2.classList.contains('list--active')) {
      list2.classList.remove('list--active');
      list2.classList.add('list--inactive');
      list1.classList.remove('list--inactive');
      list1.classList.add('list--active');
      page2.classList.remove('list__page--active');
      page1.classList.add('list__page--active');
    } else if (list3.classList.contains('list--active')) {
      list3.classList.remove('list--active');
      list3.classList.add('list--inactive');
      list2.classList.remove('list--inactive');
      list2.classList.add('list--active');
      page3.classList.remove('list__page--active');
      page2.classList.add('list__page--active');
    }
  });

  afterButton.addEventListener('click', function(event) {
    event.preventDefault();

    if (list1.classList.contains('list--active')) {
      list1.classList.remove('list--active');
      list1.classList.add('list--inactive');
      list2.classList.remove('list--inactive');
      list2.classList.add('list--active');
      page1.classList.remove('list__page--active');
      page2.classList.add('list__page--active');
    } else if (list2.classList.contains('list--active')) {
      list2.classList.remove('list--active');
      list2.classList.add('list--inactive');
      list3.classList.remove('list--inactive');
      list3.classList.add('list--active');
      page2.classList.remove('list__page--active');
      page3.classList.add('list__page--active');
    } else if (list3.classList.contains('list--active')) {
      list3.classList.remove('list--active');
      list3.classList.add('list--inactive');
      list1.classList.remove('list--inactive');
      list1.classList.add('list--active');
      page3.classList.remove('list__page--active');
      page1.classList.add('list__page--active');
    }
  });
});

// slider ukr

document.addEventListener('DOMContentLoaded', function() {
  const page1 = document.querySelector('.list__page--active');
  const page2 = document.querySelectorAll('.list__page')[1];
  const page3 = document.querySelectorAll('.list__page')[2];

  const beforeButtonUkr = document.getElementById('before-button--ukr');
  const afterButtonUkr = document.getElementById('after-button--ukr');
  const list1ukr = document.getElementById('feature-list-1--ukr');
  const list2ukr = document.getElementById('feature-list-2--ukr');
  const list3ukr = document.getElementById('feature-list-3--ukr');

  beforeButtonUkr.addEventListener('click', function(event) {
    event.preventDefault();

    if (list1ukr.classList.contains('list--active')) {
      list1ukr.classList.remove('list--active');
      list1ukr.classList.add('list--inactive');
      list3ukr.classList.remove('list--inactive');
      list3ukr.classList.add('list--active');
      page1.classList.remove('list__page--active');
      page3.classList.add('list__page--active');
    } else if (list2ukr.classList.contains('list--active')) {
      list2ukr.classList.remove('list--active');
      list2ukr.classList.add('list--inactive');
      list1ukr.classList.remove('list--inactive');
      list1ukr.classList.add('list--active');
      page2.classList.remove('list__page--active');
      page1.classList.add('list__page--active');
    } else if (list3ukr.classList.contains('list--active')) {
      list3ukr.classList.remove('list--active');
      list3ukr.classList.add('list--inactive');
      list2ukr.classList.remove('list--inactive');
      list2ukr.classList.add('list--active');
      page3.classList.remove('list__page--active');
      page2.classList.add('list__page--active');
    }
  });

  afterButtonUkr.addEventListener('click', function(event) {
    event.preventDefault();

    if (list1ukr.classList.contains('list--active')) {
      list1ukr.classList.remove('list--active');
      list1ukr.classList.add('list--inactive');
      list2ukr.classList.remove('list--inactive');
      list2ukr.classList.add('list--active');
      page1.classList.remove('list__page--active');
      page2.classList.add('list__page--active');
    } else if (list2ukr.classList.contains('list--active')) {
      list2ukr.classList.remove('list--active');
      list2ukr.classList.add('list--inactive');
      list3ukr.classList.remove('list--inactive');
      list3ukr.classList.add('list--active');
      page2.classList.remove('list__page--active');
      page3.classList.add('list__page--active');
    } else if (list3ukr.classList.contains('list--active')) {
      list3ukr.classList.remove('list--active');
      list3ukr.classList.add('list--inactive');
      list1ukr.classList.remove('list--inactive');
      list1ukr.classList.add('list--active');
      page3.classList.remove('list__page--active');
      page1.classList.add('list__page--active');
    }
  });
});
