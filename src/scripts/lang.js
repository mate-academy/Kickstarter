'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const languageLinks = document.querySelectorAll('.languages__link');

  for (let i = 0; i < languageLinks.length; i++) {
    languageLinks[i].addEventListener('click', function() {
      for (let j = 0; j < languageLinks.length; j++) {
        languageLinks[j].classList.remove('active');
      }

      this.classList.add('active');
    });
  }
});
