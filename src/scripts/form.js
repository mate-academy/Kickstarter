'use strict';

const form = document.querySelector('.get-in-touch__form');
const input = document.querySelector('.get-in-touch__input-email');
const button = document.querySelector('.get-in-touch__button');
const message = document.querySelector('.get-in-touch__input-message')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
  input.reset();
});

input.addEventListener('change', function() {
  const inputValue = input.value;

  if (!isValidEmail(inputValue)) {
    input.style.border = '1px solid #eb5757';
  } else {
    input.style.border = '1px solid #0c797a';
  }
});

message.addEventListener('change', function() {
  if (!message.checkValidity()) {
    message.style.border = '1px solid #eb5757';
  } else {
    message.style.border = '1px solid #0c797a';
  }
});

button.onclick = () => {
  if (input.checkValidity()) {
    input.style.border = '1px solid #828282';
  }

  if (message.checkValidity()) {
    message.style.border = '1px solid #828282';
  }
};
