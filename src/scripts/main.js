'use strict';

const page = document.querySelector('.page');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const closeButton = document.querySelector('.menu__close');
const contactForm = document.querySelector('.form');
const slides = document.querySelectorAll('.features__group');
const counter = document.querySelector('.slider__current');
const prevButton = document.querySelector('.slider__arrow--prev');
const nextButton = document.querySelector('.slider__arrow--next');

let slideIndex = 0;

const toggleMenu = (isOpen) => {
  menu.classList.toggle('menu--open', isOpen);
  page.classList.toggle('page--locked', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    closeButton.focus();
  } else {
    burger.focus();
  }
};

const showSlide = (index) => {
  slideIndex = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('features__group--active', i === slideIndex);
  });

  counter.textContent = String(slideIndex + 1).padStart(2, '0');
};

if (page && menu && burger && closeButton) {
  burger.addEventListener('click', () => toggleMenu(true));
  closeButton.addEventListener('click', () => toggleMenu(false));

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('menu--open')) {
      toggleMenu(false);
    }
  });
}

if (slides.length && counter && prevButton && nextButton) {
  prevButton.addEventListener('click', () => showSlide(slideIndex - 1));
  nextButton.addEventListener('click', () => showSlide(slideIndex + 1));
}

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    contactForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
