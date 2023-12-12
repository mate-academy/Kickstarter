'use strict';

const article = document.querySelectorAll('.technology__article--slider');
const technology = document.getElementById('technology');
let count = 0;
let width;
const number = document.querySelector('.features__slide-aktiv');
let switcher = 0;

function init() {
  width = document.querySelector('.features__slider').offsetWidth;
  technology.style.width = width * article.length + 'px';

  article.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
    rollSlider();
  });
}

window.addEventListener('resize', init);
init();

document.querySelector('.features__technology-slide-next')
  .addEventListener('click', function() {
    count++;
    switcher = count + 1;

    if (count === 3) {
      switcher = 1;
    }

    number.innerHTML = '0' + switcher;

    if (count >= article.length) {
      count = 0;
    }
    rollSlider();
  });

document.querySelector('.features__technology-slide-prev')
  .addEventListener('click', function() {
    count--;
    switcher = count + 1;

    if (count === -1) {
      switcher = 3;
    }
    number.innerHTML = '0' + switcher;

    if (count < 0) {
      count = article.length - 1;
    }
    rollSlider();
  });

function rollSlider() {
  technology.style.transform = 'translate(-' + count * width + 'px)';
}
