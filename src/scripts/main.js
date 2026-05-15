'use strict';
import '../styles/main.scss';
// ─── Мобильное меню ───────────────────────────────────────────────

const burgerBtn = document.querySelector('.header__burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.mobile-menu__close');
const menuLinks = document.querySelectorAll('.mobile-menu__link');

const toggleMenu = () => {
  mobileMenu.classList.toggle('mobile-menu--active');
  burgerBtn.classList.toggle('is-active');
  document.documentElement.classList.toggle('no-scroll');
};

burgerBtn.addEventListener('click', toggleMenu);

if (closeBtn) {
  closeBtn.addEventListener('click', toggleMenu);
}

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// ─── Слайдер Features ─────────────────────────────────────────────

/* global Swiper */

const DESKTOP_BREAKPOINT = 1200;

let swiper = null;

function initSwiper() {
  const isMobile = window.innerWidth < DESKTOP_BREAKPOINT;

  if (isMobile && !swiper) {
    swiper = new Swiper('.features__grid', {
      slidesPerView: 1,
      navigation: {
        prevEl: document.querySelector('.features__btn--prev'),
        nextEl: document.querySelector('.features__btn--next'),
        disabledClass: 'features__btn--disabled',
      },
      watchOverflow: false,
      on: {
        init() {
          // Swiper выставляет disabled на кнопки — снимаем принудительно
          document.querySelector('.features__btn--prev').disabled = false;
          document.querySelector('.features__btn--next').disabled = false;
          this.navigation.update();
          this.update();
        },
      },
    });

    // Обновляем счётчик "01 / 03" при смене слайда
    swiper.on('slideChange', () => {
      const current = String(swiper.activeIndex + 1).padStart(2, '0');

      document.querySelector('.features__counter span').textContent = current;
    });
  } else if (!isMobile && swiper) {
    // На десктопе слайдер не нужен — layout управляется CSS Grid
    swiper.destroy(true, true);
    swiper = null;
  }
}

// Инициализация при загрузке страницы
initSwiper();

// Пересоздаём слайдер при ресайзе с дебаунсом 200ms
let resizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    if (swiper) {
      swiper.destroy(true, true);

      swiper = null;
    }
    initSwiper();
  }, 200);
});
