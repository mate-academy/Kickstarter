'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#side-menu') {
    document.body.classList.add('nav__side-menu--no-scroll');
  } else {
    document.body.classList.remove('nav__side-menu--no-scroll');
  }
});
