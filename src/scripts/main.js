'use strict';

/* Menu */
const pageBody = document.querySelector('.page__body');

const menu = document.querySelector('.page__side-menu');
const menuBurger = document.querySelector('.nav__menu-icon');
const menuClose = document.querySelector('.side-menu__close');

menuBurger.addEventListener('click', () => {
  menu.classList.add('page__side-menu--show');
  pageBody.classList.add('page__body--with-menu');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('page__side-menu--show');
  pageBody.classList.remove('page__body--with-menu');
});

const navLink = document.querySelectorAll('.nav-bar__link');

navLink.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('page__side-menu--show');
  pageBody.classList.remove('page__body--with-menu');
}));

/* Presentation Section */
const video = document.querySelector('.presentation__video');

const playButton = document
  .querySelector('.presentation__media-button--play');
const pauseButton = document
  .querySelector('.presentation__media-button--pause');

playButton.addEventListener('click', () => {
  video.play();

  playButton.style.display = 'none';
  pauseButton.style.display = 'block';
});

pauseButton.addEventListener('click', () => {
  video.pause();

  playButton.style.display = 'block';
  pauseButton.style.display = 'none';
});

const sections = document.querySelectorAll('section[id]');

/* NavBar */
function makeActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.page__nav-bar .nav-bar__link[href*=' + sectionId + ']')
        .classList.add('nav-bar__link--active');
    } else {
      document
        .querySelector('.page__nav-bar .nav-bar__link[href*=' + sectionId + ']')
        .classList.remove('nav-bar__link--active');
    }
  });
}

window.addEventListener('scroll', makeActive);

/* Slider */
const testimonials = document.querySelectorAll('.testimonials__testimonial');
const sliderActionLeft = document.querySelector('.slider__action--left');
const sliderActionRight = document.querySelector('.slider__action--right');

sliderActionRight.addEventListener('click', () => {
  if (!sliderActionRight.disabled) {
    testimonials[1].classList.remove('testimonials__testimonial--hide');
    testimonials[0].classList.add('testimonials__testimonial--hide');

    sliderActionRight.disabled = true;
    sliderActionLeft.disabled = false;
  }
});

sliderActionLeft.addEventListener('click', () => {
  if (!sliderActionLeft.disabled) {
    testimonials[0].classList.remove('testimonials__testimonial--hide');
    testimonials[1].classList.add('testimonials__testimonial--hide');

    sliderActionLeft.disabled = true;
    sliderActionRight.disabled = false;
  }
});

/* scrollup */
function scrollUp() {
  const scrollBtn = document.querySelector('.page__scrollup');

  if (this.scrollY >= 200) {
    scrollBtn.classList.add('page__scrollup--show');
  } else {
    scrollBtn.classList.remove('page__scrollup--show');
  }
}

window.addEventListener('scroll', scrollUp);
