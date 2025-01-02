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
  .querySelector('.actions__buttons-en')
  .addEventListener('click', () => getChangeLanguage('en'));

document
  .querySelector('.actions-desk__buttons-en')
  .addEventListener('click', () => getChangeLanguage('en'));

document
  .querySelector('.actions__buttons-ua')
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
