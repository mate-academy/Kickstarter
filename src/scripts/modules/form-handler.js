export function initFormHandler() {
  const form = document.querySelector('.contacts__form');
  const email = document.getElementById('email');
  const text = document.getElementById('text');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    email.value = '';
    text.value = '';
  });
}
