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

openMenuButton.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';
});

closeMenuButton.addEventListener('click', () => {
  document.body.style.overflow = 'auto';
});
