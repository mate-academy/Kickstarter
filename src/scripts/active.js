'use strict';

const links = document.querySelectorAll('.navigation__link');
const listContainer = document.querySelector('.navigation__list-container');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    links.forEach(currentLink => currentLink.classList.remove('active'));
    this.classList.add('active');
  });
});

listContainer.addEventListener('click', function(event) {
  if (!event.target.closest('.navigation__link')) {
    links.forEach(currentLink => currentLink.classList.remove('active'));
  }
});
