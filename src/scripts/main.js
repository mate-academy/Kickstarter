'use strict'

document.getElementById('form').addEventListener('submit',
  function(e) {
    e.preventDefault();
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }
);

const nextButton = document.querySelector('.next-feature__button');
const prevButton = document.querySelector('.prev-feature__button');
const currentPageNum = document.querySelector('.current-slide');
const featuresCards = [...document.querySelectorAll('.features__card')];
let currentPage;

nextButton.addEventListener('click', () => {
  prevButton.classList.remove('disabled-button');
  currentPage = +currentPageNum.innerHTML;
  if (currentPage >= 3) {
    nextButton.classList.add('disabled-button');
    return;
  }
  currentPage++;
  currentPageNum.innerHTML = `0${currentPage}`;
  featuresCards[currentPage - 2].classList.add('hidden');
  featuresCards[currentPage - 1].classList.remove('hidden');
});

prevButton.addEventListener('click', () => {
  nextButton.classList.remove('disabled-button');
  currentPage = +currentPageNum.innerHTML;
  if (currentPage <= 1) {
    prevButton.classList.add('disabled-button');
    return;
  }
  currentPage--;
  currentPageNum.innerHTML = `0${currentPage}`;
  featuresCards[currentPage].classList.add('hidden');
  featuresCards[currentPage - 1].classList.remove('hidden');
});