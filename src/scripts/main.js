'use strict';

// #region form
const form = document.querySelector('.contact__form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});
// #endregion

// #region slider
const sliderItems = document.querySelector('.slider__items');
const sliderItem = document.querySelector('.slider__item');

const sliderPrevButton = document.querySelector('.slider__prev-button');
const sliderNextButton = document.querySelector('.slider__next-button');

const sliderCurrentPage = document.querySelector('.slider__page-current');
const sliderCountPage = document.querySelector('.slider__page-last');

const slideAmount = sliderItems.children.length;

let slideWidth = sliderItem.offsetWidth;

updatePageNumber(slideAmount, sliderCountPage);

let currentPage = 0;

sliderNextButton.addEventListener('click', () => {
  disableButton(currentPage - 1);

  currentPage--;
  updatePageNumber(-currentPage + 1);

  sliderItems.style.transform = `translateX(${currentPage * slideWidth}px)`;
  sliderPrevButton.removeAttribute('disabled');
});

sliderPrevButton.addEventListener('click', () => {
  disableButton(currentPage + 1);

  currentPage++;
  updatePageNumber(-currentPage + 1);

  sliderItems.style.transform = `translateX(${currentPage * slideWidth}px)`;
  sliderNextButton.removeAttribute('disabled');
});

function disableButton(page) {
  if (page + 1 > 0) {
    sliderPrevButton.setAttribute('disabled', '');
  }

  if (page - 1 === -slideAmount) {
    sliderNextButton.setAttribute('disabled', '');
  }
}

function updatePageNumber(page, element = sliderCurrentPage, numLength = 2) {
  element.textContent = `${
    '0'.repeat(numLength - String(page).length)}${page}
  `;
}

window.onresize = throttle(() => {
  slideWidth = sliderItem.offsetWidth;
}, 100);

function throttle(callback, delay) {
  let timer;

  return () => {
    clearTimeout(timer);
    setTimeout(callback, delay);
  };
};
// #endregion

// #region lang switcher
const headerSwitherENG = document.getElementById('headerLangSwicherInputENG');
const headerSwitherUA = document.getElementById('headerLangSwicherInputUA');
const menuSwitherENG = document.getElementById('menuLangSwicherInputENG');
const menuSwitherUA = document.getElementById('menuLangSwicherInputUA');

headerSwitherENG.addEventListener('change', () => {
  if (headerSwitherENG.checked) {
    menuSwitherENG.checked = true;
  }
});

menuSwitherENG.addEventListener('change', () => {
  if (menuSwitherENG.checked) {
    headerSwitherENG.checked = true;
  }
});

headerSwitherUA.addEventListener('change', () => {
  if (headerSwitherUA.checked) {
    menuSwitherUA.checked = true;
  }
});

menuSwitherUA.addEventListener('change', () => {
  if (menuSwitherUA.checked) {
    headerSwitherUA.checked = true;
  }
});
// #endregion

// #region popup
const popupCloseButton = document.getElementById('popupClose');
const playVideoButton = document.getElementById('playVideoButton');
const popupBlock = document.getElementById('popupBlock');
const iframes = document.querySelectorAll('iframe');

playVideoButton.addEventListener('click', () => {
  if (!popupBlock) {
    return;
  }

  popupBlock.classList.toggle('popup--open', true);
});

popupCloseButton.addEventListener('click', () => {
  if (!popupBlock) {
    return;
  }

  popupBlock.classList.toggle('popup--open', false);

  iframes.forEach((iframe) => {
    const src = iframe.src;

    iframe.src = src;
  });
});
// #endregion

// #region button gotop
const mybutton = document.getElementById('buttonTop');

window.addEventListener('scroll', () => {
  toggleButtonVisibility();
});

mybutton.addEventListener('click', () => {
  goToTop();
});

function toggleButtonVisibility() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// #endregion

// #region fixed open menu

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
// #endregion
