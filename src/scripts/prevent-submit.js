const form = document.querySelector('.form');
const button = document.querySelector('.button--form');

form.addEventListener('submit', function(event) {
  button.textContent = 'SENT ✅';
  event.preventDefault();
});
