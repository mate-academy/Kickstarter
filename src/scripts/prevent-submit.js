export function preventSubmit() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.reset();
  });
};
