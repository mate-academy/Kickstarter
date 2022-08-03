
let flkty = null;
let carouselElem = null;
const Flickity = require('flickity');

document.addEventListener('DOMContentLoaded', () => {
  carouselElem = document.getElementById('carousel');
  toggleSlider();

  document.getElementById('up').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const form = document.getElementById('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    e.target.reset();
  });

  document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('burger').classList.toggle('open');
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('menu__list').classList.toggle('open');
    document.getElementById('header__content').classList.toggle('open');
    document.getElementById('logo').classList.toggle('open');
  });

  document.getElementById('about').addEventListener('click', () => {
    window.scroll({
      top: 500,
      behavior: 'smooth',
    });
    document.getElementById('burger').classList.remove('open');
    document.getElementById('menu').classList.remove('open');
    document.getElementById('menu__list').classList.remove('open');
    document.getElementById('header__content').classList.remove('open');
    document.getElementById('logo').classList.remove('open');
  });

  document.getElementById('story').addEventListener('click', () => {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('menu').classList.remove('open');
    document.getElementById('menu__list').classList.remove('open');
    document.getElementById('header__content').classList.remove('open');
    document.getElementById('logo').classList.remove('open');
  });

  document.getElementById('technology').addEventListener('click', () => {
    window.scroll({
      top: 1300,
      behavior: 'smooth',
    });
    document.getElementById('burger').classList.remove('open');
    document.getElementById('menu').classList.remove('open');
    document.getElementById('menu__list').classList.remove('open');
    document.getElementById('header__content').classList.remove('open');
    document.getElementById('logo').classList.remove('open');
  });

  document.getElementById('features').addEventListener('click', () => {
    window.scroll({
      top: 3200,
      behavior: 'smooth',
    });

    document.getElementById('burger').classList.remove('open');
    document.getElementById('menu').classList.remove('open');
    document.getElementById('menu__list').classList.remove('open');
    document.getElementById('header__content').classList.remove('open');
    document.getElementById('logo').classList.remove('open');
  });

  document.getElementById('touch').addEventListener('click', () => {
    window.scroll({
      top: 3500,
      behavior: 'smooth',
    });

    document.getElementById('burger').classList.remove('open');
    document.getElementById('menu').classList.remove('open');
    document.getElementById('menu__list').classList.remove('open');
    document.getElementById('header__content').classList.remove('open');
    document.getElementById('logo').classList.remove('open');
  });
}, false);

window.addEventListener('resize', (event) => {
  toggleSlider();
});

function sliderClickPrevious(event) {
  flkty.previous();

  document.getElementById('carousel__pages--current').textContent
   = `0${flkty.selectedIndex + 1} `;
}

function sliderClickNext(event) {
  flkty.next();

  document.getElementById('carousel__pages--current').textContent
  = `0${flkty.selectedIndex + 1} `;
}

function toggleSlider() {
  if (window.innerWidth <= 1024) {
    if (!flkty) {
      flkty = new Flickity(carouselElem, {
        cellAlign: 'center',
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
      });

      document.getElementById('carousel__pages--current').textContent = '01';

      document.getElementById('carousel__pages--all').textContent
      = `/ 0${flkty.slides.length}`;

      document.getElementById('carousel__left').addEventListener('click',
        sliderClickPrevious);

      document.getElementById('carousel__right').addEventListener('click',
        sliderClickNext);
    }
  } else if (flkty) {
    flkty.destroy();
    flkty = null;

    document.getElementById('carousel__left').removeEventListener('click',
      sliderClickPrevious);

    document.getElementById('carousel__right').removeEventListener('click',
      sliderClickNext);
  }
}

const burger = document.querySelector('burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger__open');
});
