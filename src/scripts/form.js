'use strict';

const form = document.querySelector('.get-in-touch__form');
const input = document.querySelector('.get-in-touch__input-email');
const button = document.querySelector('.get-in-touch__button');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

input.addEventListener('change', function() {
  const inputValue = input.value;

  if (!isValidEmail(inputValue)) {
    input.style.border = '1px solid #eb5757';
  } else {
    input.style.border = '1px solid #0c797a';
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}

button.onclick = () => {
  if (isValidEmail(input.value)) {
    input.style.border = '1px solid #828282';
  }
};
