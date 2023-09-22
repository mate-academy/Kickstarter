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
