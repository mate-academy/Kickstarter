'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('DOMContentLoaded', (event) => {
  const leftF = document.getElementById('left-features');
  const rightF = document.getElementById('right-features');

  leftF.addEventListener('click', function() {
    plusDivsFeatures(-1);
  });

  rightF.addEventListener('click', function() {
    plusDivsFeatures(1);
  });
});

const now = document.getElementById('now');

let slideIndexFeatures = 1;

showDivsFeatures(slideIndexFeatures);

function plusDivsFeatures(n) {
  showDivsFeatures(slideIndexFeatures += n);
}

function showDivsFeatures(n) {
  let i;
  const x = document.getElementsByClassName('features__slide');

  if (n > x.length) {
    slideIndexFeatures = 1;
  };

  if (n < 1) {
    slideIndexFeatures = x.length;
  };

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  };

  x[slideIndexFeatures - 1].style.display = 'block';
  now.textContent = '0' + slideIndexFeatures;
}

const form = document.getElementById('form');

form.onsubmit = function() {
  document.getElementById('form').reset();

  return false;
};
