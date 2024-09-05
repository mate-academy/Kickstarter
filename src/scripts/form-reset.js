const form = document.querySelector('.questions__form');
const submitButton = document.getElementById('submit-button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.reset();
  submitButton.disabled = true;
});

const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const buttonState = () => {
  submitButton.disabled =
    !emailInput.value.trim() || !messageInput.value.trim();
};

emailInput.addEventListener('input', buttonState);
messageInput.addEventListener('input', buttonState);
