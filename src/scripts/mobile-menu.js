'use strict';

const ID_MOBILE_MENU = 'mobile-menu';
const CLASS_MOBILE_MENU_OPEN = 'mobile-menu--open';
const CLASS_MOBILE_MENU_CONTENT = 'mobile-menu__content';
const CLASS_VISIBLE_MOBILE_MENU_CONTENT = 'mobile-menu__content--visible';
const ID_MENU_OPEN_BTN = 'menu-btn';
const ID_MENU_CLOSE_BTN = 'close-menu-btn';
const CLASS_PAGE_NO_SCROLL = 'page--no-scroll';
const BREAKPOINT_LARGE = 1440;
const FOCUSABLE_SELECTOR = `
  a[href],
  button:not([disabled]),
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  [tabindex]:not([tabindex="-1"])
`;

let focusableElements = [];
let firstFocusableEl = null;
let lastFocusableEl = null;

const updateFocusableElements = () => {
  focusableElements = Array.from(
    mobileMenu.querySelectorAll(FOCUSABLE_SELECTOR),
  ).filter((el) => el.offsetParent !== null);

  firstFocusableEl = focusableElements[0];
  lastFocusableEl = focusableElements[focusableElements.length - 1];
};

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();
    closeMenu();

    return;
  }

  if (e.key !== 'Tab') {
    return;
  }

  updateFocusableElements();

  if (!focusableElements.length) {
    return;
  }

  if (e.shiftKey) {
    // SHIFT + TAB
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault();
      lastFocusableEl.focus();
    }
  } else {
    // TAB
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault();
      firstFocusableEl.focus();
    }
  }
};

const activateFocusTrap = () => {
  document.addEventListener('keydown', handleKeydown);
};

const deactivateFocusTrap = () => {
  document.removeEventListener('keydown', handleKeydown);
};

const mobileMenu = document.getElementById(ID_MOBILE_MENU);
const openMenuBtn = document.getElementById(ID_MENU_OPEN_BTN);
const closeMenuBtn = document.getElementById(ID_MENU_CLOSE_BTN);
const mobileMenuContent = mobileMenu.querySelector(
  `.${CLASS_MOBILE_MENU_CONTENT}`,
);

const largeMQ = window.matchMedia(`(min-width: ${BREAKPOINT_LARGE}px)`);

const closeMenu = () => {
  mobileMenuContent.classList.remove(CLASS_VISIBLE_MOBILE_MENU_CONTENT);

  const onTransitionEnd = (e) => {
    if (e.target !== mobileMenuContent) {
      return;
    }

    if (e.propertyName !== 'opacity' && e.propertyName !== 'transform') {
      return;
    }

    openMenuBtn.setAttribute('aria-expanded', false);
    mobileMenu.setAttribute('inert', true);
    document.body.classList.remove(CLASS_PAGE_NO_SCROLL);
    mobileMenu.classList.remove(CLASS_MOBILE_MENU_OPEN);

    deactivateFocusTrap();

    mobileMenuContent.removeEventListener('transitionend', onTransitionEnd);
  };

  mobileMenuContent.addEventListener('transitionend', onTransitionEnd);
};

const openMenu = () => {
  openMenuBtn.setAttribute('aria-expanded', true);
  mobileMenu.removeAttribute('inert');
  document.body.classList.add(CLASS_PAGE_NO_SCROLL);
  mobileMenu.classList.add(CLASS_MOBILE_MENU_OPEN);
  mobileMenuContent.classList.add(CLASS_VISIBLE_MOBILE_MENU_CONTENT);
  updateFocusableElements();
  firstFocusableEl?.focus();

  activateFocusTrap();
};

const handleOpenMenuBtnClick = (e) => {
  e.preventDefault();
  openMenu();
};

const handleCloseMenuBtnClick = (e) => {
  e.preventDefault();
  closeMenu();
  openMenuBtn.focus();
};

largeMQ.addEventListener('change', (e) => {
  if (e.matches && mobileMenu.classList.contains(CLASS_MOBILE_MENU_OPEN)) {
    closeMenu();
  }
});

openMenuBtn.addEventListener('click', handleOpenMenuBtnClick);
closeMenuBtn.addEventListener('click', handleCloseMenuBtnClick);

mobileMenu.addEventListener('click', (e) => {
  const anchor = e.target.closest('a');

  if (anchor) {
    closeMenu();
  }
});
