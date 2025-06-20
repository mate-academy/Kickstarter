const form = document.getElementById('contactForm');
const submitButton = document.querySelector('.contact__button');

export const initForm = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();
    submitButton.disabled = true;
  });

  form.addEventListener('input', () => {
    submitButton.disabled = !form.checkValidity();
  })
}
