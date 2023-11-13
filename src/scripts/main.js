'use strict';

const buttonEnglish = document.getElementById('EN');
const buttonUkr = document.getElementById('UA');

const toggleStyle = () => {
  buttonEnglish.classList.toggle('active');
  buttonUkr.classList.toggle('active');
};

buttonEnglish.addEventListener('click', toggleStyle);
buttonUkr.addEventListener('click', toggleStyle);

const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const currentNumber = document.getElementById('current_num');

buttonLeft.addEventListener('click', showPrevArticle);
buttonRight.addEventListener('click', showNextArticle);

let currentIndex = 2;
let currentIndexPrev = 0;

function showNextArticle() {
  const articles = document.querySelectorAll('.features__article');

  articles[currentIndex].classList.add('features__article--hidden');

  currentIndex = (currentIndex + 1) % articles.length;

  articles[currentIndex].classList.remove('features__article--hidden');

  currentNumber.innerHTML = `0${currentIndex + 1}`;
}

function showPrevArticle() {
  const articles = document.querySelectorAll('.features__article');

  articles[2].classList.add('features__article--hidden');
  articles[currentIndexPrev].classList.add('features__article--hidden');

  currentIndexPrev = (currentIndexPrev + 1) % articles.length;

  articles[currentIndexPrev].classList.remove('features__article--hidden');

  currentNumber.innerHTML = `0${currentIndexPrev + 1}`;
}
