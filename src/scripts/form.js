import { pattern } from './constants';

const emailInput = document.querySelector('.form__input');
const textArea = document.querySelector('.form__textarea');
const button = document.querySelector('.form__submit');

const emailValidation = (email) => pattern.test(email);

const toggleButtonState = () => {
  const emailText = emailInput.value.trim();
  const textValue = textArea.value.trim();

  button.disabled = !emailValidation(emailText) || textValue === '';
};

emailInput.addEventListener('input', (event) => {
  const emailText = event.target.value;

  if (!emailValidation(emailText)) {
    emailInput.classList.add('form__input--error');
  } else {
    emailInput.classList.remove('form__input--error');
  }

  if (emailText === '') {
    emailInput.classList.remove('form__input--error');
  }

  toggleButtonState();
});

textArea.addEventListener('input', toggleButtonState);
