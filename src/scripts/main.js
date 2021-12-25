'use strict';

// banner hover

const bannerImg = document.querySelector('.banners__image');
const bannerTitle = document.querySelector('.banners__title');
const bannerSubtitle = document.querySelector('.banners__subtitle');

bannerImg.addEventListener('mouseover', () => {
  if (window.innerWidth > 1440) {
    bannerTitle.style.marginLeft = '20px';

    setTimeout(() => {
      bannerSubtitle.style.marginLeft = '20px';
    }, 500);
  }
});

bannerImg.addEventListener('mouseout', () => {
  bannerTitle.style.marginLeft = '0';

  setTimeout(() => {
    bannerSubtitle.style.marginLeft = '0';
  }, 500);
});

// open menu

const body = document.querySelector('body');
const menuOpener = document.querySelector('.header__menu-opener');
const mobileMenu = document.querySelector('.mobile-menu');

function menuToggle() {
  mobileMenu.classList.toggle('mobile-menu--active');
  menuOpener.classList.toggle('header__menu-opener--active');
  menuOpener.classList.toggle('header__menu-opener--hover');
  body.classList.toggle('page');
}

menuOpener.addEventListener('click', () => {
  menuToggle();
});

// change service content

const leftButton = document.querySelector('.service__button-left');
const rightButton = document.querySelector('.service__button-right');

const firstElement = document.querySelector('.service__item:first-child');

let count = 0;

leftButton.addEventListener('click', () => {
  count += 100;

  if (count === 100) {
    count = -300;
  }
  firstElement.style.marginLeft = `${count}%`;
});

rightButton.addEventListener('click', () => {
  count -= 100;

  if (count === -400) {
    count = 0;
  }
  firstElement.style.marginLeft = `${count}%`;
});

setInterval(function() {
  if (window.innerWidth > 768) {
    firstElement.style.marginLeft = '0';
  }
}, 1);

// video our story

const storyVideo = document.querySelector('.story__video');
const storyButtonPlay = document.querySelector('.story__button--play');
const storyButtonPause = document.querySelector('.story__button--pause');

storyButtonPlay.addEventListener('click', () => {
  storyVideo.play();
  storyButtonPlay.style.display = 'none';
  storyButtonPause.style.display = 'flex';
});

storyButtonPause.addEventListener('click', () => {
  storyVideo.pause();
  storyButtonPlay.style.display = 'flex';
  storyButtonPause.style.display = 'none';
});

// change features content

const leftButtonFeatures = document.querySelector('.features__button-left');
const rightButtonFeatures = document.querySelector('.features__button-right');

const firstElementFeatures = document
  .querySelector('.features__list:first-child');
const featuresCounter = document.querySelector('.features__counter');

let countFeatures = 0;
let countFeaturesPage = 1;

leftButtonFeatures.addEventListener('click', () => {
  countFeatures += 120;

  if (countFeatures === 120) {
    countFeatures = -240;
  }
  countFeaturesPage--;

  if (countFeaturesPage === 0) {
    countFeaturesPage = 3;
  }
  firstElementFeatures.style.marginLeft = `${countFeatures}%`;
  featuresCounter.innerHTML = `0${countFeaturesPage} / 03`;
});

rightButtonFeatures.addEventListener('click', () => {
  countFeatures -= 120;

  if (countFeatures === -360) {
    countFeatures = 0;
  }
  countFeaturesPage++;

  if (countFeaturesPage === 4) {
    countFeaturesPage = 1;
  }
  firstElementFeatures.style.marginLeft = `${countFeatures}%`;
  featuresCounter.innerHTML = `0${countFeaturesPage} / 03`;
});

setInterval(function() {
  if (window.innerWidth > 768) {
    firstElementFeatures.style.marginLeft = '0';
    featuresCounter.innerHTML = `01 / 03`;
  }
}, 1);

// scroll page | mobile links

const topButton = document.querySelector('.footer__button');
const storyLinkM = document.querySelector('.story-link-m');
const aboutLinkM = document.querySelector('.about-link-m');
const technologyLinkM = document.querySelector('.technology-link-m');
const featuresLinkM = document.querySelector('.features-link-m');
const contactsLinkM = document.querySelector('.feedback-link-m');

topButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0, behavior: 'smooth',
  });
});

function scrollPageM(wrapper) {
  window.scrollTo({
    top: document.querySelector(wrapper).offsetTop, behavior: 'smooth',
  });
  menuToggle();
}

storyLinkM.addEventListener('click', () => {
  scrollPageM('.story');
});

aboutLinkM.addEventListener('click', () => {
  scrollPageM('.about');
});

technologyLinkM.addEventListener('click', () => {
  scrollPageM('.technology');
});

featuresLinkM.addEventListener('click', () => {
  scrollPageM('.features');
});

contactsLinkM.addEventListener('click', () => {
  scrollPageM('.contacts');
});

// scroll page | desktop links

const storyLink = document.querySelector('.story-link');
const aboutLink = document.querySelector('.about-link');
const technologyLink = document.querySelector('.technology-link');
const featuresLink = document.querySelector('.features-link');
const contactsLink = document.querySelector('.feedback-link');

const menuHeight = document.querySelector('.menu').offsetHeight - 100;

function scrollPage(wrapper) {
  window.scrollTo({
    top: document.querySelector(wrapper).offsetTop
      - menuHeight,
    behavior: 'smooth',
  });
}

storyLink.addEventListener('click', () => {
  scrollPage('.story');
});

aboutLink.addEventListener('click', () => {
  scrollPage('.about');
});

technologyLink.addEventListener('click', () => {
  scrollPage('.technology');
});

featuresLink.addEventListener('click', () => {
  scrollPage('.features');
});

contactsLink.addEventListener('click', () => {
  scrollPage('.contacts');
});

// specs button

document.querySelector('.header__specs').addEventListener('click', () => {
  scrollPage('.technology');
});

// contacts input

const inputEmail = document.querySelector('.contacts__email');

setInterval(() => {
  if (inputEmail.value) {
    if (inputEmail.value.includes('@')
      && inputEmail.value.slice(inputEmail.value.indexOf('@')).includes('.')) {
      inputEmail.style.borderColor = '#0C797A';
    } else {
      inputEmail.style.borderColor = '#EB5757';
    }
  } else {
    inputEmail.style.borderColor = '#BDBDBD';
  }
}, 1);

// chose language

const choseLanguage = document.querySelector('.header__chose');

choseLanguage.addEventListener('click', () => {
  document.querySelector('.header__chose-btn--en')
    .classList.toggle('header__chose-btn--active');

  document.querySelector('.header__chose-btn--ua')
    .classList.toggle('header__chose-btn--active');
});

// --- CART ---

document.querySelector('.header__buy').addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('cart--active');
  body.classList.toggle('page');
});

document.querySelector('.cart__return-button').addEventListener('click', () => {
  document.querySelector('.cart').classList.toggle('cart--active');
  body.classList.toggle('page');
});

// chose color

function removeAllClass() {
  document.querySelector('.cart__item-content-colors-chose')
    .classList.remove('cart__item-content-colors-chose--1');

  document.querySelector('.cart__item-content-colors-chose')
    .classList.remove('cart__item-content-colors-chose--2');

  document.querySelector('.cart__item-content-colors-chose')
    .classList.remove('cart__item-content-colors-chose--3');

  document.querySelector('.cart__item-content-colors-chose')
    .classList.remove('cart__item-content-colors-chose--4');

  document.querySelector('.cart__item-content-colors-chose')
    .classList.remove('cart__item-content-colors-chose--5');
}

document.querySelector('.cart__item-content-colors-chose-silver')
  .addEventListener('click', () => {
    removeAllClass();

    document.querySelector('.cart__item-content-colors-chose')
      .classList.add('cart__item-content-colors-chose--1');
    document.querySelector('.cart__item-content-color').innerHTML = 'Silver';
  });

document.querySelector('.cart__item-content-colors-chose-gray')
  .addEventListener('click', () => {
    removeAllClass();

    document.querySelector('.cart__item-content-colors-chose')
      .classList.add('cart__item-content-colors-chose--2');
    document.querySelector('.cart__item-content-color').innerHTML = 'Gray';
  });

document.querySelector('.cart__item-content-colors-chose-bronze')
  .addEventListener('click', () => {
    removeAllClass();

    document.querySelector('.cart__item-content-colors-chose')
      .classList.add('cart__item-content-colors-chose--3');
    document.querySelector('.cart__item-content-color').innerHTML = 'Bronze';
  });

document.querySelector('.cart__item-content-colors-chose-gold')
  .addEventListener('click', () => {
    removeAllClass();

    document.querySelector('.cart__item-content-colors-chose')
      .classList.add('cart__item-content-colors-chose--4');
    document.querySelector('.cart__item-content-color').innerHTML = 'Gold';
  });

document.querySelector('.cart__item-content-colors-chose-dark')
  .addEventListener('click', () => {
    removeAllClass();

    document.querySelector('.cart__item-content-colors-chose')
      .classList.add('cart__item-content-colors-chose--5');
    document.querySelector('.cart__item-content-color').innerHTML = 'Dark';
  });

// count and price

const cartLeftBtn = document
  .querySelector('.cart__item-content-counter-leftBtn');
const cartRightBtn = document
  .querySelector('.cart__item-content-counter-rightBtn');
const cartCounter = document.querySelector('.cart__item-content-count');
const cartTotalPrice = document.querySelector('.cart__total-price-amount');

let cartCount = 1;

cartRightBtn.addEventListener('click', () => {
  if (cartCount < 20) {
    cartCount++;
  }
  cartCounter.setAttribute('value', cartCount);
  cartTotalPrice.innerHTML = `$${cartCount * 129}.00`;

  if (cartCount > 1) {
    cartLeftBtn.classList.remove('cart__item-content-counter-leftBtn--disable');
  }

  if (cartCount === 20) {
    cartRightBtn.classList.add('cart__item-content-counter-rightBtn--disable');
  }
});

cartLeftBtn.addEventListener('click', () => {
  if (cartCount > 1) {
    cartCount--;
  }
  cartCounter.setAttribute('value', cartCount);
  cartTotalPrice.innerHTML = `$${cartCount * 129}.00`;

  if (cartCount === 1) {
    cartLeftBtn.classList.add('cart__item-content-counter-leftBtn--disable');
  }

  if (cartCount < 20) {
    cartRightBtn.classList
      .remove('cart__item-content-counter-rightBtn--disable');
  }
});
