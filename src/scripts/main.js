'use strict';

import '../styles/main.scss';

const body = document.body;
const menuButton = document.querySelector('.header__menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('.mobile-menu__close');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');
const contactForm = document.querySelector('.questions__form');
const featuresTrack = document.querySelector('.features__track');
const featureSlides = [...document.querySelectorAll('.features__track .feature')];
const featuresPrevButton = document.querySelector('.features__control--prev');
const featuresNextButton = document.querySelector('.features__control--next');
const featuresCounterCurrent = document.querySelector(
  '.features__counter-current',
);
const featuresCounterTotal = document.querySelector('.features__counter-total');
const desktopMediaQuery = window.matchMedia('(min-width: 1280px)');

let featureIndex = 0;

function setMenuState(isOpen) {
  if (!mobileMenu || !menuButton) {
    return;
  }

  if (isOpen) {
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;
    window.scrollTo(0, window.scrollY);
  }

  mobileMenu.hidden = !isOpen;
  body.classList.toggle('page__body--menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));

  if (isOpen) {
    closeButton?.focus();
  } else {
    menuButton.focus();
  }
}

menuButton?.addEventListener('click', () => {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

  setMenuState(!isExpanded);
});

closeButton?.addEventListener('click', () => {
  setMenuState(false);
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setMenuState(false);
  });
});

mobileMenu?.addEventListener('click', (event) => {
  if (event.target === mobileMenu) {
    setMenuState(false);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu && !mobileMenu.hidden) {
    setMenuState(false);
  }
});

function formatFeatureNumber(value) {
  return String(value).padStart(2, '0');
}

function updateFeaturesSlider() {
  if (!featuresTrack || !featureSlides.length || !featuresCounterCurrent) {
    return;
  }

  if (featuresCounterTotal) {
    featuresCounterTotal.textContent = `/ ${formatFeatureNumber(
      featureSlides.length,
    )}`;
  }

  if (desktopMediaQuery.matches) {
    featuresCounterCurrent.textContent = formatFeatureNumber(1);
    featureSlides.forEach((slide) => {
      slide.setAttribute('aria-hidden', 'false');
    });

    return;
  }

  featuresCounterCurrent.textContent = formatFeatureNumber(featureIndex + 1);

  featureSlides.forEach((slide, index) => {
    slide.setAttribute('aria-hidden', String(index !== featureIndex));
  });
}

function showFeature(index) {
  if (!featureSlides.length) {
    return;
  }

  featureIndex = (index + featureSlides.length) % featureSlides.length;
  updateFeaturesSlider();
}

featuresPrevButton?.addEventListener('click', () => {
  showFeature(featureIndex - 1);
});

featuresNextButton?.addEventListener('click', () => {
  showFeature(featureIndex + 1);
});

desktopMediaQuery.addEventListener('change', updateFeaturesSlider);

updateFeaturesSlider();

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();

    return;
  }

  contactForm.reset();

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
