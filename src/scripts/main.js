'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#sidebar') {
    document.body.classList.add('page__content--with-sidebar');
  } else {
    document.body.classList.remove('page__content--with-sidebar');
  }
});
