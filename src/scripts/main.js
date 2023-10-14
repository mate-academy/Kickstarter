'use strict';
// prevent sending the form

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  form.reset();
});

// hiding the scroll when menu opens

const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const navItems = document.querySelectorAll('.nav__link');
const topBarItems = document.querySelectorAll('.top-bar__link');

openMenuButton.addEventListener('click', () => {
  document.body.style.overflowY = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
  document.body.style.overflowY = 'auto';
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.body.style.overflowY = 'auto';
  });
});

topBarItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.body.style.overflowY = 'auto';
  });
});
