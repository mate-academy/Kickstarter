'use strict';

const menuNav = document.getElementById('menuNav');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
    menuNav.style.display = 'contents';
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

// sliding features js
const prevInactive = document.getElementById('prevInactive');
const prevActive = document.getElementById('prevActive');
const prevHover = document.getElementById('prevHover');

const nextInactive = document.getElementById('nextInactive');
const nextActive = document.getElementById('nextActive');
const nextHover = document.getElementById('nextHover');

const featureOne = document.getElementById('featureOne');
const featureTwo = document.getElementById('featureTwo');
const featureThree = document.getElementById('featureThree');

const featureNumber = document.getElementById('featureNumber');

nextActive.addEventListener('mouseover', () => {
  nextActive.style.display = 'none';
  nextHover.style.display = 'inline-block';
});

nextHover.addEventListener('mouseout', () => {
  nextActive.style.display = 'inline-block';
  nextHover.style.display = 'none';
});

nextHover.addEventListener('click', () => {
  if (featureOne.style.display !== 'none') {
    featureOne.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
    prevActive.style.display = 'inline-block';
    prevInactive.style.display = 'none';
  } else if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureThree.style.display = 'block';
    featureNumber.innerHTML = '03';
    nextActive.style.display = 'none';
    nextInactive.style.display = 'inline-block';
  }
});

prevActive.addEventListener('mouseover', () => {
  prevActive.style.display = 'none';
  prevHover.style.display = 'inline-block';
});

prevHover.addEventListener('mouseout', () => {
  prevActive.style.display = 'inline-block';
  prevHover.style.display = 'none';
});

prevHover.addEventListener('click', () => {
  if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureOne.style.display = 'block';
    featureNumber.innerHTML = '01';
    prevActive.style.display = 'none';
    prevInactive.style.display = 'inline-block';
  } else if (featureThree.style.display !== 'none') {
    featureThree.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
    nextInactive.style.display = 'none';
    nextActive.style.display = 'inline-block';
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
