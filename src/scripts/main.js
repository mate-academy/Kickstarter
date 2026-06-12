'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // ================= BURGER MENU =================
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.header__menu');
  const body = document.body;

  function openMenu() {
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    body.classList.add('no-scroll');
  }

  function closeMenu() {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    body.classList.remove('no-scroll');
  }

  function toggleMenu() {
    // eslint-disable-next-line no-unused-expressions
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
  }

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  // ================= CLOSE MENU AFTER CLICK =================
  const menuItems = document.querySelectorAll('.header__menu a[href^="#"]');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });

  // ================= FEATURES SLIDER =================
  const slider = document.querySelector('.features__slider');
  const slides = document.querySelectorAll('.features__slide');
  const nextBtn = document.querySelector('.features__btn--next');
  const prevBtn = document.querySelector('.features__btn--prev');
  const currentEl = document.querySelector('.features__current');

  if (slider && slides.length && nextBtn && prevBtn && currentEl) {
    let current = 0;
    const total = slides.length;

    // eslint-disable-next-line no-inner-declarations
    function update() {
      slider.style.transform = `translateX(-${current * 100}%)`;
      currentEl.textContent = String(current + 1).padStart(2, '0');

      prevBtn.classList.toggle('is-disabled', current === 0);
      nextBtn.classList.toggle('is-disabled', current === total - 1);
    }

    nextBtn.addEventListener('click', () => {
      if (current < total - 1) {
        current++;
        update();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (current > 0) {
        current--;
        update();
      }
    });

    update();
  }
});
