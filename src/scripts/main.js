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

function changeContainerFeature() {
  const feature = document.getElementById('features-body');

  if (window.innerWidth >= 768) {
    feature.classList.add('container');
  } else {
    feature.classList.remove('container');
  }
};

changeContainerFeature();
window.addEventListener('resize', changeContainerFeature);

/* ---------------reset_button----------------------- */

const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', function(event) {
  event.preventDefault();
  resetFormAndBlurInputs();
});

function resetFormAndBlurInputs() {
  const form = document.getElementById('form');

  form.reset();

  const inputs = form.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].blur();
  }
}

resetFormAndBlurInputs();
