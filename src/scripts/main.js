'use strict';

function slider(btnPrev, btnNext, sliderItem) {
  let slideIndex = 1;

  showSlides(slideIndex);

  const next = document.querySelector(`${btnNext}`);
  const prev = document.querySelector(`${btnPrev}`);

  next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });

  prev.addEventListener('click', () => {
    showSlides(slideIndex -= 1);
  });

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName(`${sliderItem}`);

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
}

const infoPrev = '.info-slider__prev';
const infoNext = '.info-slider__next';
const infoSlides = 'info-slider__item';

slider(infoPrev, infoNext, infoSlides);

const featuresPrev = '.features-slider__prev';
const featuresNext = '.features-slider__next';
const featuresSlides = 'features-slider__item';

slider(featuresPrev, featuresNext, featuresSlides);
