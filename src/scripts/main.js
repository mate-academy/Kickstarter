'use strict';

/* Menu section */
const menuButton = document.querySelector('.menu__mobile');
const menu = document.querySelector('.nav__list');
const body = document.querySelector('.page');

menuButton.addEventListener('click', () => {
  body.style.setProperty('overflow-y', 'hidden');
  menu.style.setProperty('right', 0);

  menu.addEventListener('click', () => {
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
