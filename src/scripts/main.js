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

const prev = document.getElementById('prev');
const next = document.getElementById('next');

const featureOne = document.getElementById('featureOne');
const featureTwo = document.getElementById('featureTwo');
const featureThree = document.getElementById('featureThree');

const featureNumber = document.getElementById('featureNumber');

next.addEventListener('click', () => {
  if (featureOne.style.display !== 'none') {
    featureOne.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
  } else if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureThree.style.display = 'block';
    featureNumber.innerHTML = '03';
  }
});

prev.addEventListener('click', () => {
  if (featureTwo.style.display !== 'none') {
    featureTwo.style.display = 'none';
    featureOne.style.display = 'block';
    featureNumber.innerHTML = '01';
  } else if (featureThree.style.display !== 'none') {
    featureThree.style.display = 'none';
    featureTwo.style.display = 'block';
    featureNumber.innerHTML = '02';
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.reset();
});

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
