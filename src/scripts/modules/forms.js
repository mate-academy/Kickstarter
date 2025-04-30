const form = document.querySelector('.questions__forms');
const emailForm = document.querySelector('.form--email');
const emailInput = document.querySelector('.input--email');
const messageForm = document.querySelector('.form--message');
const messageInput = document.querySelector('.input--message');
const sendBtn = document.querySelector('.button--send');

const email = {
  form: emailForm,
  input: emailInput,
  formType: 'email',
};

const message = {
  form: messageForm,
  input: messageInput,
  formType: 'text',
};

const selected = 'selected';
const error = 'error';
const disabled = 'disabled';

/** validation */
function isValidText(text) {
  if (text.trim().length < 1) {
    return false;
  }

  return true;
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

/**checkElements */
function checkErrors(content, formType) {
  if (formType === 'email' && !isValidEmail(content)) {
    return false;
  }

  if (!isValidText(content)) {
    return false;
  }

  return true;
}

function checkSelectedForm(formName) {
  if (
    formName.form.classList.contains(selected) &&
    !formName.input.hasAttribute('value')
  ) {
    formName.form.classList.remove(selected);
  }
}

/**onEvents */
function onSubmit(...inputs) {
  inputs.forEach((input) => {
    input.value = '';
  });

  sendBtn.setAttribute(disabled, '');

  window.scrollTo(0, 0);
}

function onInput(formName, content) {
  formName.input.removeAttribute('value');

  if (!checkErrors(content, formName.formType)) {
    formName.form.classList.add(error);
  }

  setBtnState(sendBtn);
}

function onBlur(formName) {
  formName.form.classList.remove(error, selected);
}

function onFocus(formToSelect, formToCheck) {
  checkSelectedForm(formToCheck);

  formToSelect.form.classList.add(selected);
  formToSelect.input.focus();
}

/**setSendBtnState */
function setBtnState() {
  if (
    !emailForm.classList.contains(error) &&
    !messageForm.classList.contains(error) &&
    emailInput.value !== '' &&
    messageInput.value !== ''
  ) {
    sendBtn.removeAttribute(disabled);
  } else {
    sendBtn.setAttribute(disabled, '');
  }
}

/**reset errors */
function resetErrors(formName) {
  if (formName.form.classList.contains(error)) {
    formName.form.classList.remove(error);
  }
}

module.exports = {
  elements: {
    form,
    email,
    message,
    sendBtn,
  },

  functions: {
    onBlur, onFocus, onInput, onSubmit, resetErrors
  },
};
