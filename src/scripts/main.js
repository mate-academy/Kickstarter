'use strict';

const form = document.getElementById('form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

// Show arrow to top

const showArrow = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    showArrow.classList.add('page__scroll-to-top--show');
  } else {
    showArrow.classList.remove('page__scroll-to-top--show');
  }
});
