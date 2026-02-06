'use strict';

const ID_MODAL = 'success-message';
const ID_BTN_CLOSE_MODAL = 'close-success-message-btn';
const ID_CONTACT_FORM = 'contact-form';

const CLASS_INPUT = 'text-input';
const CLASS_INPUT_SUCCESS = 'text-input--success';

const CLASS_MODAL_CONTENT = 'modal__content';
const CLASS_VISIBLE_MODAL_CONTENT = 'modal__content--visible';
const CLASS_MODAL_OPEN = 'modal--open';

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

let autoCloserTimer = null;

const updateFocusableElements = () => {
  focusableElements = Array.from(
    modal.querySelectorAll(FOCUSABLE_SELECTOR),
  ).filter((el) => el.offsetParent !== null);

  firstFocusableEl = focusableElements[0];
  lastFocusableEl = focusableElements[focusableElements.length - 1];
};

const handleKeydown = (e) => {
  if (e.key === 'Escape') {
    e.preventDefault();
    hideModal();

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

const contactForm = document.getElementById(ID_CONTACT_FORM);
const contactFormInputs = document.querySelectorAll(`.${CLASS_INPUT}`);
const modal = document.getElementById(ID_MODAL);
const closeModalBtn = document.getElementById(ID_BTN_CLOSE_MODAL);
const modalContent = modal.querySelector(`.${CLASS_MODAL_CONTENT}`);

const showModal = () => {
  modal.classList.add(CLASS_MODAL_OPEN);
  modal.removeAttribute('inert');
  modalContent.classList.add(CLASS_VISIBLE_MODAL_CONTENT);

  updateFocusableElements();
  firstFocusableEl?.focus();

  activateFocusTrap();
};

const hideModal = () => {
  modalContent.classList.remove(CLASS_VISIBLE_MODAL_CONTENT);

  const onTransitionEnd = (e) => {
    modal.setAttribute('inert', true);
    modal.classList.remove(CLASS_MODAL_OPEN);

    deactivateFocusTrap();
  };

  modalContent.addEventListener('transitionend', onTransitionEnd, {
    once: true,
  });
};

const handleSubmitForm = (e) => {
  e.preventDefault();

  if (autoCloserTimer) {
    clearTimeout(autoCloserTimer);
  }

  contactForm.reset();
  contactFormInputs.forEach(markInputAsSuccessful);
  showModal();

  setTimeout(() => {
    contactFormInputs.forEach(unmarkInputAsSuccessful);
  }, 10000);

  autoCloserTimer = setTimeout(() => {
    hideModal();
    autoCloserTimer = null;
  }, 10000);
};

const markInputAsSuccessful = (input) => {
  input.classList.add(CLASS_INPUT_SUCCESS);
  input.blur();
  input.disabled = true;
};

const unmarkInputAsSuccessful = (input) => {
  input.classList.remove(CLASS_INPUT_SUCCESS);
  input.disabled = false;
};

const handleClickCloseModalBtn = (e) => {
  e.preventDefault();

  if (autoCloserTimer) {
    clearTimeout(autoCloserTimer);
    autoCloserTimer = null;
  }

  hideModal();
};

const handleKeyDownOnForm = (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();

    if (typeof contactForm.requestSubmit === 'function') {
      contactForm.requestSubmit();
    } else {
      const submitBtn = contactForm.querySelector(
        '[type="submit"], button:not([type])',
      );

      if (submitBtn) {
        submitBtn.click();
      } else {
        contactForm.dispatchEvent(new Event('submit'));
      }
    }
  }
};

closeModalBtn.addEventListener('click', handleClickCloseModalBtn);

contactForm.addEventListener('submit', handleSubmitForm);

contactForm.addEventListener('keydown', handleKeyDownOnForm);
