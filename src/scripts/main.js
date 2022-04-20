'use strict';

const menuNav = document.getElementById('menuNav');
const topLink = document.getElementById('topLink');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
    menuNav.style.display = 'unset';
    topLink.style.display = 'none';
  } else {
    document.body.classList.remove('page--with-menu');
    topLink.style.display = 'unset';
  }
});

// sliding features js
const prevInactive = document.getElementById('prevInactive');
const prevActive = document.getElementById('prevActive');

const nextInactive = document.getElementById('nextInactive');
const nextActive = document.getElementById('nextActive');

const featureOne = document.getElementById('featureOne');
const featureTwo = document.getElementById('featureTwo');
const featureThree = document.getElementById('featureThree');

const featureNumber = document.getElementById('featureNumber');

nextActive.addEventListener('click', () => {
  if (featureOne.style.display !== 'none') {
    featureOne.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
    prevActive.style.display = 'unset';
    prevInactive.style.display = 'none';
  } else if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureThree.style.display = 'block';
    featureNumber.innerHTML = '03';
    nextActive.style.display = 'none';
    nextInactive.style.display = 'unset';
  }
});

prevActive.addEventListener('click', () => {
  if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureOne.style.display = 'block';
    featureNumber.innerHTML = '01';
    prevActive.style.display = 'none';
    prevInactive.style.display = 'unset';
  } else if (featureThree.style.display !== 'none') {
    featureThree.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
    nextInactive.style.display = 'none';
    nextActive.style.display = 'unset';
  }
});

// form reset js
const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

// play and pause video js
const play = document.getElementById('play');
const video = document.getElementById('video');

play.addEventListener('click', () => {
  if (video.paused === true) {
    video.play();
    play.style.visibility = 'hidden';
  } else {
    video.pause();
  }
});

video.addEventListener('click', () => {
  if (video.paused === false) {
    video.pause();
    play.style.visibility = 'visible';
  }
});
