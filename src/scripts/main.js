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

// slider out story

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
  })
}

rightStory.addEventListener('click', () => {
  moveStory(1);
});

leftStory.addEventListener('click', () => {
  moveStory(-1);
});
