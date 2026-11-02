'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const buttonsMenu = document.querySelectorAll('.top-bar__button-menu');
  const menuNav = document.querySelector('.menu');
  const mainBar = document.querySelector('.main-bar');
  const body = document.querySelector('.page');
  const menuNavLinks = document.querySelectorAll('.menu__nav-link');

  const form = document.querySelector('.questions__form');
  const buy = document.querySelector('.nav__btn');
  const contactSection = document.querySelector('.questions');
  const buyMneu = document.querySelector('.menu__button');

  if (buy && contactSection) {
    buy.addEventListener('click', () => {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    });
  }

  if (buttonsMenu.length > 0 && menuNav && mainBar) {
    buttonsMenu.forEach((button) => {
      button.addEventListener('click', () => {
        menuNav.classList.toggle('menu--open');
        mainBar.classList.toggle('top-bar--disappear');
        body.classList.toggle('page__body');

        const isOpen = menuNav.classList.contains('menu--open');

        button.setAttribute('aria-expanded', isOpen);
      });
    });
  }

  if (menuNavLinks.length > 0) {
    menuNavLinks.forEach((links) => {
      links.addEventListener('click', () => {
        menuNav.classList.toggle('menu--open');
        mainBar.classList.toggle('top-bar--disappear');
        body.classList.toggle('page__body');
      });
    });
  }

  if (buyMneu && contactSection) {
    buyMneu.addEventListener('click', () => {
      menuNav.classList.toggle('menu--open');
      mainBar.classList.toggle('top-bar--disappear');
      body.classList.toggle('page__body');

      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth',
      });
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  const subtitles = document.querySelectorAll('.features__subtitle');
  const lists = document.querySelectorAll('.features__list');
  const btnPrev = document.querySelector(
    '.features__button-skip.button__skip--back',
  );
  const btnNext = document.querySelector(
    '.features__button-skip:not(.button__skip--back)',
  );
  const countPrimary = document.querySelector('.features__count-skip--primary');

  let currentIndex = 0;
  const totalSlides = subtitles.length;

  function updateFeaturesSlide(index) {
    subtitles.forEach((sub, i) => {
      if (i === index) {
        sub.style.display = 'block';
      } else {
        sub.style.display = window.innerWidth >= 1200 ? '' : 'none';
      }
    });

    lists.forEach((list, i) => {
      if (i === index) {
        list.style.display = 'flex';
      } else {
        list.style.display = window.innerWidth >= 1200 ? '' : 'none';
      }
    });

    if (countPrimary) {
      countPrimary.textContent = String(index + 1).padStart(2, '0');
    }
  }

  if (window.innerWidth < 1090 && subtitles.length > 0) {
    updateFeaturesSlide(currentIndex);
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateFeaturesSlide(currentIndex);
    });

    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateFeaturesSlide(currentIndex);
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth >= 1200) {
          subtitles.forEach((sub) => (sub.style.display = ''));
          lists.forEach((list) => (list.style.display = ''));
        } else {
          updateFeaturesSlide(currentIndex);
        }
      });
    }
  }
});

const buttonArrow = document.querySelector('.footer__back-to-top');

buttonArrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
  });
});
