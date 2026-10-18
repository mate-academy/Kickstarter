export const initForm = () => {
  const form = document.querySelector('.contact-form__form');

  if (!form) {
    return;
  }

  const emailField = form.querySelector('.contact-form__input');
  const messageField = form.querySelector('.contact-form__message');
  const fields = [emailField, messageField].filter(Boolean);

  form.noValidate = true;

  const isValid = (field) => {
    const isFilled = field.value.trim() !== '';

    if (field.type === 'email') {
      return isFilled && field.checkValidity();
    }

    return isFilled;
  };

  const submit = (event) => {
    event.preventDefault();

    let isFormValid = true;

    fields.forEach((field) => {
      const valid = isValid(field);
      field.classList.toggle('is-error', !valid);
      isFormValid = isFormValid && valid;
    });

    if (!isFormValid) {
      return;
    }

    form.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  form.addEventListener('submit', submit);

  fields.forEach((field) => {
    field.addEventListener('input', () => {
      field.classList.remove('is-error');
    });
  });
};
