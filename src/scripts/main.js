'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// button submit
const form = document.getElementById('kickaster_form');

form.addEventListener('submit', function handleSubmit(event) {
  event.preventDefault();
  form.reset();
});


// button up
document.addEventListener("DOMContentLoaded", () => {
  let to_top_btn = document.querySelector(".icon--up");

  window.onscroll = function () {
      if (window.pageYOffset > 360) {
          to_top_btn.style.display = "block"
      } else {
          to_top_btn.style.display = "none"
      }
  }

  // smooth scroll up
  to_top_btn.addEventListener("click", function () {
      window.scrollBy({
          top: -document.documentElement.scrollHeight,
          behavior: "smooth"
      });
  });
});