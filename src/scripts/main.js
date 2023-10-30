'use strict';

const langLinks = document.querySelectorAll('.link');

langLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    langLinks.forEach(function(l) {
      l.classList.remove('header__link--active');
      l.classList.add('header__link--unactive');
    });
    link.classList.remove('header__link--unactive');
    link.classList.add('header__link--active');
  });
});
