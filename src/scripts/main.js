'use strict';

//зміна мови
function getChangeLanguage(language) {
  const buttonEng = document.getElementById('EN');
  const deskButtonEng = document.getElementById('desk-button-en');
  const buttonUa = document.getElementById('UA');
  const deskButtonUa = document.getElementById('desk-button-ua');

  if (language === 'en') {
    buttonUa.classList.remove('active-language');
    deskButtonUa.classList.remove('active-language');
    buttonEng.classList.add('active-language');
    deskButtonEng.classList.add('active-language');
  } else if (language === 'ua') {
    buttonEng.classList.remove('active-language');
    deskButtonEng.classList.remove('active-language');
    buttonUa.classList.add('active-language');
    deskButtonUa.classList.add('active-language');
  }

  console.log(language);
}

document
  .querySelector('.actions-desk__buttons-en')
  .addEventListener('click', () => getChangeLanguage('en'));

document
  .querySelector('.actions-desk__buttons-en')
  .addEventListener('click', () => getChangeLanguage('en'));

document
  .querySelector('.actions-desk__buttons-ua')
  .addEventListener('click', () => getChangeLanguage('ua'));

document
  .querySelector('.actions-desk__buttons-ua')
  .addEventListener('click', () => getChangeLanguage('ua'));

//зміна слайдy
const sliders = document.querySelector('.slider__container');
const slide = document.querySelectorAll('.slide');
const previousButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');
const slidesCount = document.querySelector('.slider__counter-number');

let currentSlide = 0;

function changeSlide(direction) {
  const totalSlides = slide.length - 3;

  if (direction >= totalSlides) {
    currentSlide = 0;
  } else if (direction < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = direction;
  }

  const offset = -currentSlide * 100;
  sliders.style.transform = `translateX(${offset}%)`;

  slidesCount.textContent = `0${currentSlide + 1}`;
}

nextButton.addEventListener('click', () => {
  changeSlide(currentSlide + 1);
});

previousButton.addEventListener('click', () => {
  changeSlide(currentSlide - 1);
});

// відкривання та закривання меню
const openButton = document.querySelector('.burger-menu__open');
const closeButton = document.querySelector('.burger-menu__close');
const menu = document.querySelector('.menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

function toggleButtons(isOpen) {
  openButton.classList.toggle('rotated', isOpen);
  openButton.style.display = isOpen ? 'none' : 'block';
  closeButton.style.display = isOpen ? 'block' : 'none';
}

function openMenu() {
  toggleButtons(true);
  menu.classList.add('menu--active');
  body.classList.add('no-scroll');
}

function closeMenu() {
  toggleButtons(false);
  menu.classList.remove('menu--active');
  body.classList.remove('no-scroll');
}

menuLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeMenu();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

// form
document
  .getElementById('questionsForm')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    this.reset();
  });
