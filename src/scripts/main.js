'use strict';

function changeClassContainer() {
  const about = document.getElementById('about');
  const technology = document.getElementById('technology');

  if (window.innerWidth >= 1440) {
    about.classList.add('container');
    technology.classList.add('container');
  } else {
    about.classList.remove('container');
    technology.classList.remove('container');
  }
};

changeClassContainer();
window.addEventListener('resize', changeClassContainer);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
