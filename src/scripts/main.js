'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// button submit
const form = document.getElementById('kickstarter_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});

// button up
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.icon--up');

  window.onscroll = function() {
    if (window.pageYOffset > 360) {
      toTopBtn.style.display = 'block';
    } else {
      toTopBtn.style.display = 'none';
    }
  };

  // smooth scroll up
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});

// animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', reveal);
