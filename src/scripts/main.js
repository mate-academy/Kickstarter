'use strict';

const navList = document.querySelector('.header__nav-list');
const toggler = document.querySelector('.toggler');

navList.addEventListener('click', function(event) {
  event.preventDefault();

  toggler.checked = false;

  const anchor = event.target;
  const sectionId = anchor.getAttribute('href');

  document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
);
