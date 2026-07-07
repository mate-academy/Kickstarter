'use strict';

/* global Swiper */
/* eslint-env browser */

// логіка перемикання мови

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  const langs = document.querySelectorAll('.page__lang');
  const iconEN = document.querySelectorAll('.icon-en');
  const iconUA = document.querySelectorAll('.icon-ua');
  const email = document.querySelector('.questions__email');
  const message = document.querySelector('.questions__message');

  // Захист: міняємо плейсхолдери лише якщо елементи форми знайдені на сторінці
  if (email && message) {
    if (lang === 'ua') {
      email.placeholder = 'Ваш email';
      message.placeholder = 'Ваше повідомлення...';
    } else {
      email.placeholder = 'Your email';
      message.placeholder = 'Your message...';
    }
  }

  langs.forEach((el) => {
    el.classList.remove('active');

    if (el.classList.contains(lang)) {
      el.classList.add('active');
    }
  });

  for (const icon of iconEN) {
    icon.style.display = lang === 'en' ? 'block' : 'none';
  }

  for (const icon of iconUA) {
    icon.style.display = lang === 'ua' ? 'block' : 'none';
  }

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

function toggleLanguage() {
  const nextLang = currentLang === 'en' ? 'ua' : 'en';

  setLanguage(nextLang);
}

function validateEmail(emailValue) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(String(emailValue).toLowerCase());
}

// Головна ініціалізація сайту після повного завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  const iconsWrapper = document.querySelectorAll('.lang-icons');
  const form = document.querySelector('#form');
  const emailInput = document.querySelector('.questions__email');
  const successMessage = document.querySelector('.questions__success-message');

  // Навішуємо кліки на іконки перемикання мови
  iconsWrapper.forEach((el) => {
    el.addEventListener('click', toggleLanguage);
  });

  // Запускаємо вибір мови при першому завантаженні сторінки
  setLanguage(currentLang);

  // Валідація та скидання форми
  if (form && emailInput && successMessage) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      emailInput.classList.remove('questions__email--error');
      successMessage.classList.remove('questions__success-message--visible');

      if (!validateEmail(emailInput.value.trim())) {
        emailInput.classList.add('questions__email--error');

        return;
      }

      successMessage.classList.add('questions__success-message--visible');
      form.reset();
    });

    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('questions__email--error');
      successMessage.classList.remove('questions__success-message--visible');
    });
  }
});

// оновлення лічильника слайдера

function updateMyCounter(s) {
  const el = document.querySelector('.swiper-curent');

  if (el) {
    const current = s.realIndex + 1;

    el.textContent = current.toString().padStart(2, '0');
  }
}

// Налаштування свайпера

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.swiper', {
  loop: true,
  on: {
    init: function a() {
      updateMyCounter(this);
    },

    slideChange: function b() {
      updateMyCounter(this);
    },

    slideChangeTransitionStart(s) {
      const img = s.slides[s.activeIndex].querySelector('.hero__image');

      if (!img) {
        return;
      }

      img.style.animation = 'none';

      // eslint-disable-next-line no-unused-vars
      const reflow = img.offsetHeight;

      img.style.animation = null;
    },
  },

  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
  },

  autoplay: {
    delay: 3000,
  },
});

// Активація анімації в меню

const menuBtn = document.querySelector('.header__menu-icon');
const closeBtn = document.querySelector('.menu__close');
const logo = document.querySelector('.menu__logo');
const menuItems = document.querySelectorAll('.menu__item');
const menuButtons = document.querySelector('.menu__buttons');
const buyBtn = document.querySelector('.menu__buy-button');

if (menuBtn && closeBtn && logo && menuButtons && buyBtn) {
  menuBtn.addEventListener('click', () => {
    menuItems.forEach((item, index) => {
      item.classList.add('menu__item--active');
      item.style.animationDelay = `${(index + 1) * 0.1}s`;
    });

    logo.classList.add('menu__logo--active');
    menuButtons.classList.add('menu__buttons--active');
    closeBtn.classList.add('menu__close--active');
    buyBtn.classList.add('menu__buy-button--active');
  });

  closeBtn.addEventListener('click', () => {
    menuItems.forEach((item) => {
      item.classList.remove('menu__item--active');
    });

    logo.classList.remove('menu__logo--active');
    menuButtons.classList.remove('menu__buttons--active');
    closeBtn.classList.remove('menu__close--active');
    buyBtn.classList.remove('menu__buy-button--active');
  });
}
