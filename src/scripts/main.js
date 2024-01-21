'use strict';

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
  if (language === 'eng') {
    navEng.classList.add('active');
    modalEng.classList.add('active');
    navUa.classList.remove('active');
    modalUa.classList.remove('active');
  } else if (language === 'ua') {
    navUa.classList.add('active');
    modalUa.classList.add('active');
    navEng.classList.remove('active');
    modalEng.classList.remove('active');
  }
}
changeLanguage('eng');

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

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
