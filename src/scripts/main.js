'use strict';

const video = document.querySelector('.presentation__video');
const splash = document.querySelector('.presentation__splash-screen');
const buttonPlay = document.querySelector('.presentation__play');
const buttonPause = document.querySelector('.presentation__stop-button');

buttonPlay.addEventListener('click', () => {
  splash.style.display = 'none';
  video.style.display = 'block';
  video.play();
  buttonPlay.style.display = 'none';
  buttonPause.style.display = 'block';
});

buttonPause.addEventListener('click', () => {
  video.pause();

  splash.style.display = 'block';
  buttonPlay.style.display = 'block';
  buttonPause.style.display = 'none';
});

// eslint-disable-next-line no-unused-vars
const slider = createSlider(document.querySelector('#slider'));

// eslint-disable-next-line no-shadow
function createSlider(slider) {
  const list = slider.querySelector('.slider__content');
  const counter = slider.querySelector('.slider__counter');
  const prev = slider.querySelector('.slider__arrow--back');
  const next = slider.querySelector('.slider__arrow--fore');

  let position = 0;

  function move(shift) {
    const count = list.children.length;

    position = (position + shift + count) % count;

    counter.textContent = `${position + 1}`;

    list.style.transform = `translateX(${-position * 100}%)`;
  }

  next.addEventListener('click', function() {
    move(1);
  });

  prev.addEventListener('click', function() {
    move(-1);
  });

  return { move };
}
