document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('message-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();

    if (!email || !message) {
      alert('Please fill in all required fields!');
      return;
    }

    form.reset();
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
