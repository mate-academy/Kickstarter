'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const modalOpen = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const modalClose = document.querySelector('[data-close]');
  const form = document.querySelector('form');
  const slides = document.querySelectorAll('.features--slider');
  const prev = document.querySelector('.features__prev');
  const next = document.querySelector('.features__next');
  const current = document.querySelector('#current');
  const total = document.querySelector('#total');
  const navEng = document.querySelector('.nav__eng');
  const navUa = document.querySelector('.nav__ua');
  const modalEng = document.querySelector('.modal__eng');
  const modalUa = document.querySelector('.modal__ua');
  const navLanguages = document.querySelectorAll('.nav__languages a');
  const modalLanguages = document.querySelectorAll('.modal__languages a');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  let slideIndex = 1;

  modalOpen.forEach(btn => {
    btn.addEventListener('click', function() {
      modal.classList.add('modal--open');
      modal.classList.remove('modal--close');
    });
  });

  function closeModal() {
    modal.classList.add('modal--close');
    modal.classList.remove('modal--open');
  }

  modalClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });

  function checkScreenWidth() {
    if (window.innerWidth > 744) {
      modal.classList.add('modal--close');
    } else {
      modal.classList.remove('modal--close');
    }
  }

  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);

  form.addEventListener('submit', event => {
    event.preventDefault();
    form.reset();
  });

  showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function(item) {
      item.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  function changeLanguage(language) {
    navLanguages.forEach(item => item.classList.remove('active'));
    modalLanguages.forEach(item => item.classList.remove('active'));

    if (language === 'eng') {
      navEng.classList.add('active');
      modalEng.classList.add('active');
    } else if (language === 'ua') {
      navUa.classList.add('active');
      modalUa.classList.add('active');
    }
  }

  document.addEventListener('click', function(event) {
    if (event.target.classList
      .contains('nav__eng') || event.target.classList.contains('nav__ua')) {
      const language = event.target.classList
        .contains('nav__eng') ? 'eng' : 'ua';

      changeLanguage(language);
    } else if (event.target.classList
      .contains('modal__eng') || event.target.classList.contains('modal__ua')) {
      const language = event.target.classList
        .contains('modal__eng') ? 'eng' : 'ua';

      changeLanguage(language);
    }
  });
  changeLanguage('eng');

  scrollToTopBtn.addEventListener('click', function() {
    scrollToTop();
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
});
