'use strict';
import '../styles/base/styles.scss';

const form = document.querySelector('#feedback-form');
const emailInput = document.querySelector('#email-field');
const messageInput = document.querySelector('#text-field');
const ERROR_CLASS = 'form__input--error';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  emailInput.classList.remove(ERROR_CLASS);
  messageInput.classList.remove(ERROR_CLASS);

  let hasError = false;

  if (!emailInput.value.includes('@') || emailInput.value.length < 5) {
    emailInput.classList.add(ERROR_CLASS);
    hasError = true;
  }

  if (messageInput.value.trim() === '') {
    messageInput.classList.add(ERROR_CLASS);
    hasError = true;
  }

  if (!hasError) {
    console.log('Данные готовы к отправке:', {
      email: emailInput.value,
      message: messageInput.value
    });
    form.reset();
  }
});

const langButton = document.getElementById('lang-select');
const langBtnStyles = document.querySelector('.header__lang-btn');

langButton.addEventListener('click', () => {
  langBtnStyles.classList.toggle('header__lang-btn--is-active');
});

const burgerBtn = document.getElementById('burger-btn');
const mobileMenu = document.getElementById('menu');
const langContainer = document.querySelector('.header__lang-container');
const body = document.body;
const menuLinks = document.querySelectorAll('.menu__link');
const buyBtn = document.getElementById('header-btn');

function toggleMenu() {
  mobileMenu.classList.toggle('menu--is-open');
  burgerBtn.classList.toggle('burger--is-active');
  langContainer.classList.toggle('header__lang-container--is-active');
  buyBtn.classList.toggle('header__prim-btn--menu-is-open');
  body.classList.toggle('body__no-scroll');
}

burgerBtn.addEventListener('click', toggleMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mobileMenu.classList.contains('menu--is-open')) {
      toggleMenu();
    }
  });
});

buyBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('menu--is-open')) {
    toggleMenu();
  }
});


// 1. Находим элементы
const slides = document.querySelectorAll('.slider__slide');
const currentNumDisplay = document.querySelector('.pagination__current');
const btnPrev = document.querySelector('.pagination__arrow--prev');
const btnNext = document.querySelector('.pagination__arrow--next');
const viewport = document.querySelector('.slider__viewport');

let currentIndex = 0; // Начинаем с первого (01)

// 2. Функция обновления интерфейса
function updateSlider() {
  const slideWidth = viewport.offsetWidth;

  viewport.scrollTo({
    left: slideWidth * currentIndex,
    behavior: 'smooth'
  });

  // Обновляем цифру (добавляем 0 перед числом, если оно меньше 10)
  currentNumDisplay.textContent = (currentIndex + 1).toString().padStart(2, '0');
}

// 3. Обработчики кликов
btnNext.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Зацикливаем (по желанию)
  }
  updateSlider();
});

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 1; // Возвращаемся в конец
  }
  updateSlider();
});
