'use strict';

function initFeaturesSlider() {
  const featureGroups = document.querySelectorAll('.features__group');
  const previousFeature = document.querySelector('[data-features-prev]');
  const nextFeature = document.querySelector('[data-features-next]');
  const currentFeature = document.querySelector('[data-features-current]');
  let featureIndex = 0;

  function showFeature(step) {
    featureGroups[featureIndex].classList.remove(
      'features__group--active',
      'features__group--enter-next',
      'features__group--enter-previous',
    );

    featureIndex += step;

    const direction = step > 0 ? 'next' : 'previous';

    featureGroups[featureIndex].classList.add(
      'features__group--active',
      `features__group--enter-${direction}`,
    );
    previousFeature.disabled = featureIndex === 0;
    nextFeature.disabled = featureIndex === featureGroups.length - 1;
    currentFeature.textContent = String(featureIndex + 1).padStart(2, '0');
  }

  previousFeature.addEventListener('click', () => {
    showFeature(-1);
  });

  nextFeature.addEventListener('click', () => {
    showFeature(1);
  });
}

initFeaturesSlider();

function initMenu() {
  const menu = document.querySelector('[data-menu]');
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');
  const desktopQuery = window.matchMedia('(min-width: 1280px)');

  function setMenuOpen(isOpen) {
    menu.classList.toggle('menu--open', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
  }

  openButton.addEventListener('click', () => {
    setMenuOpen(true);
    closeButton.focus();
  });

  closeButton.addEventListener('click', () => {
    setMenuOpen(false);
    openButton.focus();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('menu--open')) {
      setMenuOpen(false);
      openButton.focus();
    }
  });

  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) {
      setMenuOpen(false);
    }
  });
}

initMenu();
