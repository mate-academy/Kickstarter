'use strict';

document
  .querySelector('.footer__arrow')
  .addEventListener('click', function(e) {
    e.preventDefault();

    window.scrollTo(
      {
        top: 0, behavior: 'smooth',
      }
    );
  });
