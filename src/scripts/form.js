'use strict';

const formA = document.querySelector('.support__form');

formA.addEventListener('submit', (event) => {
  document.location.reload();
  event.preventDefault();
});
