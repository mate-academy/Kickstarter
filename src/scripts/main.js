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

// scroll page | mobile links

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
