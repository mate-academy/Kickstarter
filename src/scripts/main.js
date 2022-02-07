'use strict';

const body = document.querySelector('.page__body');

// #region Decorators
function throttle(fn, interval) {
  let lastTime;

  return function throttled() {
    const timeSinceLastExecution = Date.now() - lastTime;

    if (!lastTime || (timeSinceLastExecution >= interval)) {
      fn.apply(this, arguments);
      lastTime = Date.now();
    }
  };
}

function debounce(fn, interval) {
  let timer;

  return function debounced() {
    clearTimeout(timer);

    const args = arguments;
    const that = this;

    timer = setTimeout(function callOriginalFn() {
      fn.apply(that, args);
    }, interval);
  };
}

function once(fn) {
  let returnValue;
  let canRun = true;

  return function runOnce() {
    if (canRun) {
      returnValue = fn.apply(this, arguments);
      canRun = false;
    }

    return returnValue;
  };
}

// #endregion Decorators

// #region getElementPos
const getElementPos = (el) => {
  const position = el.getBoundingClientRect();

  return {
    top: position.top + window.scrollY,
    height: position.height,
    bottom: position.bottom + window.scrollY,
  };
};
// #endregion getElementPos

// #region MenuEvents

const menu = document.querySelector('.menu');
const closeMenuButton = menu.querySelector('.menu-close');

const header = document.querySelector('.header');
const headerHeight = getElementPos(header).height;
const openMenuButton = header.querySelector('.menu-opener');

const toglleMenu = (menuEl, bodyEl) => {
  menuEl.classList.toggle('page__menu--open');
  bodyEl.classList.toggle('page__body--with-menu');
};

closeMenuButton.addEventListener('click', (e) => {
  toglleMenu(menu, body);
  e.preventDefault();
});

openMenuButton.addEventListener('click', (e) => {
  toglleMenu(menu, body);
  e.preventDefault();
});
// #endregion MenuEvents

// #region Slider

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

// #endregion Slider

// #region ScrollTo
const navigation = document.querySelector('.navigation');
const navHeight = getElementPos(navigation).height;

const scrollToElement = (
  toElement,
  addNavHeight = false,
  mobileNav = false
) => {
  const elementTop = getElementPos(toElement).top;

  if (addNavHeight) {
    window.scrollTo(0, elementTop - navHeight);

    return;
  }

  if (mobileNav) {
    window.scrollTo(0, elementTop - headerHeight);

    return;
  }

  window.scrollTo(0, elementTop);
};

const toTopButton = document.querySelector('.go-top');

toTopButton.addEventListener('click', () => scrollToElement(body));

// #endregion ScrollTo

// #region dynamicNavigation
const navLinks = {};
const sections = {};

let firstSectionY = -1;

const setLinkEventListener = (linkId) => {
  navLinks[linkId].addEventListener('click', (e) => {
    if (linkId.includes('-mob')) {
      toglleMenu(menu, body);
      scrollToElement(sections[linkId], false, true);
    } else {
      scrollToElement(sections[linkId], true, false);
    }

    e.preventDefault();
  });
};

const getLinks = () => {
  const links = document.querySelectorAll('.linkTo');

  for (const link of links) {
    const linkId = link.getAttribute('href').replace('#', '');

    navLinks[linkId] = link;

    setLinkEventListener(linkId);
  }
};

const setFirstSectionY = (posY) => {
  if (firstSectionY < 0 || posY < firstSectionY) {
    firstSectionY = posY;
  }
};

const getSections = () => {
  if (!Object.keys(navLinks).length) {
    once(getLinks());
  }

  for (const linkId in navLinks) {
    let linkedSection;

    if (linkId.includes('-mob')) {
      linkedSection = document.querySelector(`[data-sect-name=${linkId}]`);
    } else {
      linkedSection = document.querySelector(`#${linkId}`);
    }
    sections[linkId] = linkedSection;
    sections[linkId]['pos'] = getElementPos(sections[linkId]);

    setFirstSectionY(sections[linkId]['pos'].top);
  }
};

const changeActiveLink = throttle(() => {
  const y = (window.pageYOffset || document.documentElement.scrollTop) + 150;

  if (!Object.keys(sections).length) {
    once(getSections());
  }

  if (y < firstSectionY) {
    toTopButton.classList.remove('go-top--visible');

    return;
  }

  toTopButton.classList.add('go-top--visible');

  for (const section in sections) {
    if (
      y + navHeight > sections[section].pos.top
      && y < sections[section].pos.bottom
    ) {
      navLinks[section].style.fontWeight = '500';
    } else {
      navLinks[section].style.fontWeight = '300';
    }
  }
}, 100);

changeActiveLink();

window.addEventListener('scroll', changeActiveLink);

// #endregion dynamicNavigation

// #region formProcessing
const contactForm = document.querySelector('.contact__form');
const emailInput = contactForm.querySelector('.contact__email');
const messageInput = contactForm.querySelector('.contact__message');

const validateEmail = (email) => {
  // eslint-disable-next-line no-useless-escape
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }

  return false;
};

const checkInput = debounce(() => {
  const valid = validateEmail(emailInput.value);

  if (valid) {
    emailInput.setAttribute('title', '');
    emailInput.classList.remove('contact__form-field--error');
    emailInput.classList.add('contact__form-field--valid');

    emailInput.value = '';
    messageInput.value = '';
    setTimeout(scrollToElement, 200, body);

    emailInput.classList.remove('contact__form-field--valid');
  } else {
    emailInput.setAttribute('title', 'Please make sure the email is valid.');
    emailInput.classList.remove('contact__form-field--valid');
    emailInput.classList.add('contact__form-field--error');
  }
}, 100);

contactForm.addEventListener('submit', (e) => {
  checkInput();
  e.preventDefault();
});
// #endregion formProcessing

// #region setBenefitsItemHeight

const benefitsTitles = document.querySelectorAll('.benefits__title');

const setBenefitsTitleHeight = () => {
  let maxHeight = -1;

  for (const title of benefitsTitles) {
    const titleHeight = getElementPos(title).height;

    if (maxHeight < titleHeight) {
      maxHeight = Math.ceil(titleHeight);
    }
  }

  if (maxHeight > 0) {
    for (const title of benefitsTitles) {
      title.style.height = `${maxHeight}px`;
    }
  }
};

setBenefitsTitleHeight();

// #endregion setBenefitsItemHeight

// #region openVideo

const playVideoButton = document.querySelector('.video-section__play-button');
const videoName = playVideoButton.getAttribute('data-requred-video');
const videoPopup = document.querySelector('[data-popup="video"]');
const popupArea = document.querySelector('.popup__area');
const video = document.querySelector(`[data-video-name=${videoName}]`);
const closeVideoButton = document.querySelector('.popup__cross');

playVideoButton.addEventListener('click', (e) => {
  videoPopup.classList.add('popup--open');
  video.play();
});

closeVideoButton.addEventListener('click', () => {
  video.pause();
  videoPopup.classList.remove('popup--open');
});

popupArea.addEventListener('click', () => {
  video.pause();
  videoPopup.classList.remove('popup--open');
});

// #endregion openVideo
