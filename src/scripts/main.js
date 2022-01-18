// eslint-disable-next-line strict
const right = document.querySelector('.icon__slider--right');
const left = document.querySelector('.icon__slider--left');
const cards = [...document.querySelectorAll('.aboutUs__card')];
const aboutUsCountLeft = document.querySelector('.left');

const video = document.querySelector('.video__file');
const btnPlay = document.querySelector('.video__button--play');
const btnStop = document.querySelector('.video__button--stop');

const featuresLeft = document.querySelector('.features-left');
const featuresRight = document.querySelector('.features-right');
const featuresCards = [...document.querySelectorAll('.features__cards-card')];
const featuresCountLeft = document.querySelector('.featuresCountLeft');

btnStop.style.visibility = 'hidden';

right.addEventListener('click', onNextBtnClick);
left.addEventListener('click', onPrevBtnClick);
left.disabled = true;

let currentIndex = 0;
let featuresIndex = 0;

function slideRight(arr, btnLeft, btnRight, num, count, index) {
  arr[index].style.display = 'block';
  arr[index - 1].style.display = 'none';
  btnLeft.disabled = false;

  if (index < num) {
    count.innerHTML = `0${index + 1}`;
  }

  if (index === (arr.length - 1)) {
    btnRight.disabled = true;
  }
}

function slideLeft(arr, btnLeft, btnRight, num, count, index) {
  const currentNumber = +count.innerHTML[1];

  arr[index].style.display = 'block';
  arr[index + 1].style.display = 'none';
  btnRight.disabled = false;

  if (index < num) {
    count.innerHTML = `0${currentNumber - 1}`;
  }

  if (index === 0) {
    btnLeft.disabled = true;
  }
}

function onNextBtnClick() {
  currentIndex++;

  return slideRight(cards, left, right, 4, aboutUsCountLeft, currentIndex);
}

function onPrevBtnClick() {
  currentIndex--;

  return slideLeft(cards, left, right, 3, aboutUsCountLeft, currentIndex);
}

btnPlay.addEventListener('click', startVideo);
btnStop.addEventListener('click', pauseVideo);

function startVideo() {
  btnStop.style.visibility = 'visible';
  video.style.visibility = 'visible';
  video.play();
  btnPlay.style.visibility = 'hidden';
}

function pauseVideo() {
  video.pause();
  btnStop.style.visibility = 'hidden';
  btnPlay.style.visibility = 'visible';
};

featuresLeft.addEventListener('click', getFeaturesLeft);
featuresRight.addEventListener('click', getFeaturesRight);

function getFeaturesLeft() {
  featuresIndex--;

  return slideLeft(featuresCards, featuresLeft,
    featuresRight, 3, featuresCountLeft, featuresIndex);
}

function getFeaturesRight() {
  featuresIndex++;

  return slideRight(featuresCards, featuresLeft,
    featuresRight, 3, featuresCountLeft, featuresIndex);
}
