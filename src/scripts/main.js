'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const vid = document.getElementById('presentation-player');
const element = document.getElementById('presentation-button');

function playVid() {
  vid.play();
  document.getElementById('presentation-button').hidden = true;
  document.getElementById('presentation-poster').hidden = true;
  document.getElementById('presentation-player').hidden = false;
}

element.addEventListener('click', playVid);

let activeSlide = 0;

const list = document.querySelector('.features__content');

const nextButton = document.querySelector('.features__button--next');
const prevButton = document.querySelector('.features__button--prev');
const counter = document.getElementById('counter');

nextButton.addEventListener('click', () => {
  if (activeSlide < 2) {
    activeSlide++;

    list.style.setProperty('transform', `translateX(-${activeSlide * 260}px)`);
    counter.innerHTML = `0${activeSlide + 1}`;
  }
});

prevButton.addEventListener('click', () => {
  if (activeSlide > 0) {
    activeSlide--;

    list.style.setProperty('transform', `translateX(-${activeSlide * 260}px)`);
    counter.innerHTML = `0${activeSlide + 1}`;
  }
});

function stopDefAction(event) {
  document.getElementById('questionsForm').reset();
  event.preventDefault();
}

document.getElementById('questionsForm').addEventListener(
  'submit', stopDefAction, false
);
