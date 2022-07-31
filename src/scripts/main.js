'use strict';

let flkty = null;
let carouselElem = null;

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
}, false);

window.addEventListener('resize', (event) => {
  toggleSlider();
});

function sliderClickPrevious(event) {
  flkty.previous();
  document.getElementById('carousel__pages--current').textContent = `0${flkty.selectedIndex + 1} `;
}

function sliderClickNext(event) {
  flkty.next();
  document.getElementById('carousel__pages--current').textContent = `0${flkty.selectedIndex + 1} `;
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
      document.getElementById('carousel__pages--all').textContent = `/ 0${flkty.slides.length}`;
      document.getElementById('carousel__left').addEventListener('click', sliderClickPrevious);
      document.getElementById('carousel__right').addEventListener('click', sliderClickNext);
    }
  } else if (flkty) {
    flkty.destroy();
    flkty = null;
    document.getElementById('carousel__left').removeEventListener('click', sliderClickPrevious);
    document.getElementById('carousel__right').removeEventListener('click', sliderClickNext);
  }
}
