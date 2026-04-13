'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('featuresSlider');
  const prevButton = document.getElementById('featuresPrev');
  const nextButton = document.getElementById('featuresNext');
  const currentCounter = document.getElementById('featuresCurrent');

  if (!slider || !prevButton || !nextButton || !currentCounter) {
    return;
  }

  const slides = slider.querySelectorAll('.features__slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  const updateSlider = () => {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    currentCounter.textContent = String(currentSlide + 1).padStart(2, '0');

    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === totalSlides - 1;
  };

  prevButton.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      updateSlider();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentSlide < totalSlides - 1) {
      currentSlide += 1;
      updateSlider();
    }
  });

  updateSlider();
});
