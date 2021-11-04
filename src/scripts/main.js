'use strict';

/* Menu section */
const menuButton = document.querySelector('.menu__mobile');
const menu = document.querySelector('.nav__list');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('.page');

menuButton.addEventListener('click', () => {
  headerNav.style.setProperty('display', 'block');
  body.style.setProperty('overflow-y', 'hidden');
  menu.style.setProperty('right', 0);

  menu.addEventListener('click', () => {
    headerNav.style.setProperty('display', 'none');
    menu.style.setProperty('right', '-100%');
    body.style.setProperty('overflow-y', 'auto');
  });
});

/* Presentation section */

const video = document.querySelector('.presentation__video');
const play = document.querySelector('.presentation__play');
const pause = document.querySelector('.presentation__pause');

play.addEventListener('click', () => {
  video.play();
  play.style.display = 'none';
  pause.style.display = 'block';
});

pause.addEventListener('click', () => {
  video.pause();
  play.style.display = 'block';
  pause.style.display = 'none';
});

/* Features section */
const next = document.querySelector('.features__nav-next');
const prev = document.querySelector('.features__nav-prev');
const cards = document.querySelector('.features__cards');
let cardsCount = 0;

const activeCard = document.querySelector('.features__nav-current');

next.addEventListener('click', () => {
  if (cardsCount < 2) {
    prev.disabled = false;
    cardsCount++;
    cards.style.setProperty('--cards-count', cardsCount);
    activeCard.innerHTML = '0' + (cardsCount + 1);
  } else {
    next.disabled = true;
  }
});

prev.addEventListener('click', () => {
  if (cardsCount > 0) {
    next.disabled = false;
    cardsCount--;
    cards.style.setProperty('--cards-count', cardsCount);
    activeCard.innerHTML = (cardsCount - 1);
  } else {
    prev.disabled = true;
  }
});

/* Technology section */
const point1 = document.querySelector('.point-1__img');
const vertLine1 = document.querySelector('.point-1__vert-line');

const point2 = document.querySelector('.point-2__img');
const vertLine2 = document.querySelector('.point-2__vert-line');

const point3 = document.querySelector('.point-3__img');
const vertLine3 = document.querySelector('.point-3__vert-line');

const point4 = document.querySelector('.point-4__img');
const vertLine4 = document.querySelector('.point-4__vert-line');

point1.addEventListener('mouseover', () => {
  vertLine1.style.setProperty('display', 'block');
});

point1.addEventListener('mouseleave', () => {
  vertLine1.style.setProperty('display', 'none');
});

point2.addEventListener('mouseover', () => {
  vertLine2.style.setProperty('display', 'block');
});

point2.addEventListener('mouseleave', () => {
  vertLine2.style.setProperty('display', 'none');
});

point3.addEventListener('mouseover', () => {
  vertLine3.style.setProperty('display', 'block');
});

point3.addEventListener('mouseleave', () => {
  vertLine3.style.setProperty('display', 'none');
});

point4.addEventListener('mouseover', () => {
  vertLine4.style.setProperty('display', 'block');
});

point4.addEventListener('mouseleave', () => {
  vertLine4.style.setProperty('display', 'none');
});
