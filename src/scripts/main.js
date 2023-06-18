'use strict';

const form = document.querySelector('.questions__form');

function stopRefreshing(event) {
  event.preventDefault();
  form.reset();
}

form.addEventListener('submit', stopRefreshing);
