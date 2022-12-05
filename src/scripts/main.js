
// Slider
import Swiper, { Navigation, Pagination } from 'swiper';

const body = document.querySelector('.page__body');

// Menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');

function menuClose() {
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
  body.classList.remove('_lock');
}

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    iconMenu.classList.toggle('_active');

    if (iconMenu.classList.contains('_active')) {
      const logoLink = document.querySelector('.logo');

      menuBody.classList.add('_active');
      body.classList.add('_lock');

      logoLink.addEventListener('click', (elem) => {
        elem.preventDefault();
        menuClose();
      });

      if (menuLinks.length > 0) {
        menuLinks.forEach(el => {
          el.addEventListener('click', function() {
            menuClose();
          });
        });
      }
    } else {
      menuClose();
    }
  });
};

const langBtns = document.querySelectorAll('.top-action__item');

for (let index = 0; index < langBtns.length; index++) {
  const langBtn = langBtns[index];

  langBtn.addEventListener('click', function(e) {
    for (let i = 0; i < langBtns.length; i++) {
      const langBtn1 = langBtns[i];

      langBtn1.classList.remove('_active');
    }
    langBtn.classList.add('_active');
    e.preventDefault();
  });
}

// Form
const forms = document.querySelectorAll('.form');

function validateEmail(email) {
  const re = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+.([A-Za-z]{2,4})$/;

  return re.test(String(email).toLowerCase());
}

for (let index = 0; index < forms.length; index++) {
  const form = forms[index];
  const formInputs = document.querySelectorAll('.form__input');
  const inputEmail = document.querySelector('.form__input--email');

  formInputs.forEach(function(input) {
    input.onfocus = function() {
      if (this.classList.contains('_error')) {
        this.classList.remove('_error');
        this.value = '';
      }
    };

    input.onblur = function() {
      if (input.value !== '') {
        input.classList.add('_complete');
      } else {
        input.classList.remove('_complete');
      }
    };
  });

  form.onsubmit = function(e) {
    e.preventDefault();

    const emailVal = inputEmail.value;
    const emptyInputs = Array.from(formInputs).filter(
      input => input.value === ''
    );

    formInputs.forEach(function(input) {
      if (input.value === '' && emptyInputs.length > 0) {
        input.classList.add('_error');

        return false;
      } else {
        input.classList.remove('_error');
        input.value = '';
      }
    });

    if (!validateEmail(emailVal)) {
      inputEmail.classList.add('_error');

      return false;
    } else {
      inputEmail.classList.remove('_error');
    }
  };
}

// Кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.classList.add('_up-show');
    } else {
      toTopBtn.classList.remove('_up-show');
    }
  };

  // плавный скролл наверх
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  simulateTouch: true,
  loop: true,
  watchOverflow: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const slider = new Swiper('.slider', {
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },

  pagination: {
    el: '.slider__fraction',
    // Фракция
    type: 'fraction',
    // Кастомный вывод фракции
    renderFraction: function(currentClass, totalClass) {
      return '<span class="' + currentClass
        + '"></span> / <span class="' + totalClass + '"></span>';
    },

    formatFractionCurrent: function(num) {
      if (num < 10) {
        const str = '0' + num;

        return str;
      }
    },

    formatFractionTotal: function(num) {
      if (num < 10) {
        const str = '0' + num;

        return str;
      }
    },

    // Прогрессбар
    // type: 'progressbar',
  },
  // Optional parameters
  simulateTouch: false,
  loop: false,
  watchOverflow: true,
  // autoHeight: true,
  observer: true,
  observeParents: true,
  observeSlideChildren: true,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

swiper();
slider();
