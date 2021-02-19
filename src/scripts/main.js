'use strict';

let slideIndex = 1;

showSlides(slideIndex);

const prev = document.querySelector('.info-slider__prev');
const next = document.querySelector('.info-slider__next');

next.onclick = function() {
  showSlides(slideIndex += 1);
};

prev.onclick = function() {
  showSlides(slideIndex -= 1);
};

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('info-slider__item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex - 1].style.display = 'block';
}
