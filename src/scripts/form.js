export function initFormValidation() {
  const form = document.querySelector('.question__form');

  if (!form) {
    return;
  }

  const inputs = form.querySelectorAll('input, textarea');

  form.setAttribute('novalidate', '');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isFormValid = true;

    inputs.forEach((input) => {
      const value = input.value.trim();
      let isInputValid = true;

      if (value === '') {
        isInputValid = false;
      } else if (input.type === 'email' && !validateEmail(value)) {
        isInputValid = false;
      }

      if (!isInputValid) {
        input.classList.add('is-invalid');
        isFormValid = false;
      } else {
        input.classList.remove('is-invalid');
      }

      input.addEventListener('input', () => {
        if (input.type === 'email') {
          if (validateEmail(input.value.trim())) {
            input.classList.remove('is-invalid');
          }
        } else if (input.value.trim() !== '') {
          input.classList.remove('is-invalid');
        }
      });
    });

    if (isFormValid) {
      form.reset();
    }
  });
}
