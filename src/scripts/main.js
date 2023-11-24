'use strict';
checkWindowSize();

function checkWindowSize() {
  if (window.innerWidth > 1023) {
    document.removeEventListener('DOMContentLoaded');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.features__slide');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });

    const slideCounter = document.getElementById('features__current-slide');
    const amountOfSlides = document.getElementById('features__total-count');
    const currentSlideNumber = index + 1;
    const totalSlides = slides.length;

    slideCounter
      .textContent = `0${currentSlideNumber}`;

    amountOfSlides
      .textContent = `/ 0${totalSlides}`;
  }

  showSlide(currentSlide);

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  document
    .getElementById('features__prev')
    .addEventListener('click', prevSlide);

  document
    .getElementById('features__next')
    .addEventListener('click', nextSlide);
});
