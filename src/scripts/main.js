'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

document.getElementById('touch').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!emailPattern.test(email)) {
    return;
  };

  emailInput.value = '';
  document.getElementById('message').value = '';
};
