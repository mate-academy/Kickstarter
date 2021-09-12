'use strict';
// turn off scroll on body when menu open

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.header__burger');
const menu = document.querySelectorAll('.nav__link--mobile');
const cross = document.querySelector('.menu__cross');
const lang = document.querySelectorAll('.languages__country');

menuOpener.addEventListener('click', () => {
  body.classList.add('page__body--with-menu');
});

cross.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});

menu.forEach((item) => {
  item.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  });
});

lang.forEach((item) => {
  item.addEventListener('click', () => {
    body.classList.remove('page__body--with-menu');
  });
});

// slider our story

const stories = document.querySelector('.our-story__wrapper');
const story = document.querySelectorAll('.our-story__story');
const leftStory = document.querySelector('.our-story__left');
const rightStory = document.querySelector('.our-story__right');
const countStory = stories.children.length;

let positionStory = 0;

function moveStory(shift) {
  if (shift > 0 && positionStory <= countStory - 2) {
    positionStory += shift;
  }

  if (shift < 0 && positionStory > 0) {
    positionStory += shift;
  }

  if (positionStory >= countStory - 1) {
    rightStory.classList.remove('our-story__right--active');
  } else {
    rightStory.classList.add('our-story__right--active');
  }

  if (positionStory <= 0) {
    leftStory.classList.remove('our-story__left--active');
  } else {
    leftStory.classList.add('our-story__left--active');
  };

  story.forEach((item) => {
    item.style.transform = `translateX(${-positionStory * 100}%)`;
  });
}

rightStory.addEventListener('click', () => {
  moveStory(1);
});

leftStory.addEventListener('click', () => {
  moveStory(-1);
});

// slider features

const features = document.querySelector('.features__wrapper');
const feature = document.querySelectorAll('.feature');
const leftFeature = document.querySelector('.features__left');
const rightFeature = document.querySelector('.features__right');
const countFeature = features.children.length;

let positionFeature = 0;

function moveFeature(shift) {
  if (shift > 0 && positionFeature <= countFeature - 2) {
    positionFeature += shift;
  }

  if (shift < 0 && positionFeature > 0) {
    positionFeature += shift;
  }

  if (positionFeature >= countFeature - 1) {
    rightFeature.classList.remove('features__right--active');
  } else {
    rightFeature.classList.add('features__right--active');
  }

  if (positionFeature <= 0) {
    leftFeature.classList.remove('features__left--active');
  } else {
    leftFeature.classList.add('features__left--active');
  };

  feature.forEach((item) => {
    item.style.transform = `translateX(${-positionFeature * 100}%)`;
  });
}

rightFeature.addEventListener('click', () => {
  moveFeature(1);
});

leftFeature.addEventListener('click', () => {
  moveFeature(-1);
});
