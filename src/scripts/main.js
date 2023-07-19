'use strict';

// mobile-nav

const burgerMenuBtn = document.querySelector('.burger-menu');
const burgerMenuLines = document.querySelectorAll('.burger-menu__line');
const mobileNav = document.querySelector('.mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav__link');

burgerMenuBtn.addEventListener('click', function() {
  burgerMenuBtn.classList.toggle('burger-menu--active');

  if (burgerMenuBtn.classList.contains('burger-menu--active')) {
    burgerMenuLines.forEach(line => {
      line.classList.add('burger-menu__line--active');
    });
    mobileNav.classList.add('mobile-nav--active');
    document.body.style.overflow = 'hidden';
  } else {
    burgerMenuLines.forEach(line => {
      line.classList.remove('burger-menu__line--active');
    });
    mobileNav.classList.remove('mobile-nav--active');
    document.body.style.overflow = 'auto';
  }
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', function() {
    mobileNav.classList.remove('mobile-nav--active');
    burgerMenuBtn.classList.remove('burger-menu--active');

    burgerMenuLines.forEach(line => {
      line.classList.remove('burger-menu__line--active');
    });
    document.body.style.overflow = 'auto';
  });
});

// video-button

const video = document.getElementById('video');
const videoButton = document.querySelector('.play-button');

videoButton.addEventListener('click', function() {
  if (videoButton.classList.contains('play')) {
    video.play();
    videoButton.classList.toggle('play');
    videoButton.style.opacity = '0';
  } else {
    video.pause();
    videoButton.classList.toggle('play');
    videoButton.style.opacity = '1';
  }
});

// form

const form = document.querySelector('form');

function stopDefAction(e) {
  form.reset();
  e.preventDefault();
}

form.addEventListener(
  'submit', stopDefAction, false
);
