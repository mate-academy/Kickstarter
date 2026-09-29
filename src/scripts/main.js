'use strict';

const initializeSlider = ({
  sliderSelector,
  viewportSelector,
  cardSelector,
  activeMediaQuery,
}) => {
  const slider = document.querySelector(sliderSelector);

  if (!slider) {
    return;
  }

  const viewport = slider.querySelector(viewportSelector);
  const cards = slider.querySelectorAll(cardSelector);
  const previousButton = slider.querySelector('.pagination__control--previous');
  const nextButton = slider.querySelector('.pagination__control--next');
  const currentCounter = slider.querySelector('.pagination__current');

  const hasSliderElements =
    viewport &&
    cards.length > 0 &&
    previousButton &&
    nextButton &&
    currentCounter;

  if (!hasSliderElements) {
    return;
  }

  const mediaQuery = window.matchMedia(activeMediaQuery);
  const lastCardIndex = cards.length - 1;
  let currentCardIndex = 0;
  let scrollFrameId = null;
  let resizeFrameId = null;

  const getLimitedIndex = (index) =>
    Math.min(Math.max(index, 0), lastCardIndex);

  const updatePagination = (index) => {
    currentCardIndex = getLimitedIndex(index);
    currentCounter.textContent = String(currentCardIndex + 1).padStart(2, '0');
    previousButton.disabled = currentCardIndex === 0;
    nextButton.disabled = currentCardIndex === lastCardIndex;
  };

  const getCurrentCardIndex = () => {
    const cardWidth = cards[0].getBoundingClientRect().width;

    if (cardWidth === 0) {
      return currentCardIndex;
    }

    return getLimitedIndex(Math.round(viewport.scrollLeft / cardWidth));
  };

  const scrollToCard = (index, behavior = 'smooth') => {
    if (!mediaQuery.matches) {
      return;
    }

    const targetIndex = getLimitedIndex(index);
    const viewportLeft = viewport.getBoundingClientRect().left;
    const cardLeft = cards[targetIndex].getBoundingClientRect().left;

    viewport.scrollTo({
      left: viewport.scrollLeft + cardLeft - viewportLeft,
      behavior,
    });
  };

  const handleScroll = () => {
    if (!mediaQuery.matches || scrollFrameId !== null) {
      return;
    }

    scrollFrameId = window.requestAnimationFrame(() => {
      updatePagination(getCurrentCardIndex());
      scrollFrameId = null;
    });
  };

  const handleResize = () => {
    if (resizeFrameId !== null) {
      window.cancelAnimationFrame(resizeFrameId);
    }

    resizeFrameId = window.requestAnimationFrame(() => {
      if (mediaQuery.matches) {
        scrollToCard(currentCardIndex, 'auto');
        updatePagination(currentCardIndex);
      }

      resizeFrameId = null;
    });
  };

  previousButton.addEventListener('click', () => {
    scrollToCard(currentCardIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    scrollToCard(currentCardIndex + 1);
  });

  viewport.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleResize);

  if (mediaQuery.matches) {
    updatePagination(getCurrentCardIndex());
  }
};

initializeSlider({
  sliderSelector: '.benefits',
  viewportSelector: '.benefits__viewport',
  cardSelector: '.benefits__card',
  activeMediaQuery: '(max-width: 767px)',
});

initializeSlider({
  sliderSelector: '.features',
  viewportSelector: '.features__viewport',
  cardSelector: '.features__card',
  activeMediaQuery: '(max-width: 1439px)',
});

const initializeScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length === 0) {
    return;
  }

  const reducedMotionQuery = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  );
  const canObserve = 'IntersectionObserver' in window;

  if (reducedMotionQuery.matches || !canObserve) {
    return;
  }

  const initialRevealPoint = window.innerHeight * 0.9;

  revealElements.forEach((element) => {
    if (element.getBoundingClientRect().top < initialRevealPoint) {
      element.classList.add('reveal--visible');
    }
  });

  revealElements.forEach((element) => {
    element.classList.add('reveal--ready');
  });

  const revealObserver = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('reveal--visible');
        revealObserver.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    },
  );

  revealElements.forEach((element) => {
    if (!element.classList.contains('reveal--visible')) {
      revealObserver.observe(element);
    }
  });
};

initializeScrollReveal();

const initializeSectionNavigation = () => {
  const linkSelector = '.menu__link, .navigation__link';
  const navigationLinks = [...document.querySelectorAll(linkSelector)];

  const sections = navigationLinks.reduce((sectionMap, link) => {
    const sectionId = link.hash.slice(1);
    const section = document.getElementById(sectionId);

    if (section && !sectionMap.has(sectionId)) {
      sectionMap.set(sectionId, section);
    }

    return sectionMap;
  }, new Map());

  if (navigationLinks.length === 0 || sections.size === 0) {
    return;
  }

  let activeSectionId = '';
  let scrollFrameId = null;

  const updateActiveLinks = () => {
    const activationPoint = window.innerHeight * 0.4;
    let currentSectionId = sections.keys().next().value;

    sections.forEach((section, sectionId) => {
      if (section.getBoundingClientRect().top <= activationPoint) {
        currentSectionId = sectionId;
      }
    });

    if (currentSectionId === activeSectionId) {
      return;
    }

    navigationLinks.forEach((link) => {
      const isActive = link.hash === `#${currentSectionId}`;
      const activeClass = link.classList.contains('menu__link')
        ? 'menu__link--active'
        : 'navigation__link--active';

      link.classList.toggle(activeClass, isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    activeSectionId = currentSectionId;
  };

  const handlePagePositionChange = () => {
    if (scrollFrameId !== null) {
      return;
    }

    scrollFrameId = window.requestAnimationFrame(() => {
      updateActiveLinks();
      scrollFrameId = null;
    });
  };

  updateActiveLinks();

  window.addEventListener('scroll', handlePagePositionChange, {
    passive: true,
  });
  window.addEventListener('resize', handlePagePositionChange);
};

initializeSectionNavigation();

const menu = document.querySelector('.menu');
const menuOpenButton = document.querySelector('.header__menu-button');
const menuCloseButton = menu?.querySelector('.menu__close-button');
const menuLinks = menu?.querySelectorAll('a');

if (menu && menuOpenButton && menuCloseButton && menuLinks) {
  const desktopMediaQuery = window.matchMedia('(min-width: 1440px)');
  let isMenuClosing = false;
  let restoreFocusAfterClose = true;

  const finishMenuClose = () => {
    if (!menu.open) {
      return;
    }

    menu.close();
    document.body.classList.remove('page--menu-open');
    isMenuClosing = false;
    menu.removeEventListener('transitionend', handleMenuTransitionEnd);

    if (restoreFocusAfterClose) {
      menuOpenButton.focus();
    }
  };

  const handleMenuTransitionEnd = (event) => {
    const isMenuTransform =
      event.target === menu && event.propertyName === 'transform';

    if (isMenuTransform) {
      finishMenuClose();
    }
  };

  const closeMenu = ({ immediately = false, restoreFocus = true } = {}) => {
    if (!menu.open) {
      return;
    }

    restoreFocusAfterClose = restoreFocus;

    if (isMenuClosing) {
      if (immediately) {
        finishMenuClose();
      }

      return;
    }

    isMenuClosing = true;
    menu.classList.remove('menu--open');
    menuOpenButton.setAttribute('aria-expanded', 'false');

    if (immediately) {
      finishMenuClose();

      return;
    }

    menu.addEventListener('transitionend', handleMenuTransitionEnd);
  };

  const openMenu = () => {
    if (menu.open || desktopMediaQuery.matches) {
      return;
    }

    menu.showModal();
    document.body.classList.add('page--menu-open');
    menuOpenButton.setAttribute('aria-expanded', 'true');
    menuCloseButton.focus();

    menu.getBoundingClientRect();
    menu.classList.add('menu--open');
  };

  menuOpenButton.addEventListener('click', openMenu);
  menuCloseButton.addEventListener('click', () => closeMenu());

  menu.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => closeMenu());
  });

  desktopMediaQuery.addEventListener('change', (event) => {
    if (event.matches) {
      closeMenu({ immediately: true, restoreFocus: false });
    }
  });
}

const questionsForm = document.querySelector('.questions__form');

if (questionsForm) {
  questionsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    questionsForm.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
