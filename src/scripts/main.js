'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize variables
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slider__item');
  const prevButton = document.querySelector('.slider__button-prev');
  const nextButton = document.querySelector('.slider__button-next');
  const slideIndicator = document.querySelector('.slider__indicator');

  // Function to hide all slides
  const hideAllSlides = () => {
    slides.forEach((slide) => {
      slide.style.display = 'none';
    });
  };

  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

  // Function to show the current slide
  const showCurrentSlide = () => {
    hideAllSlides(); // Hide all slides
    slides[slideIndex].style.display = 'block'; // Show the current slide
    slideIndicator.textContent = formatSlideNumber(slideIndex + 1);
  };

  // Show the first slide initially
  showCurrentSlide();

  // Function to show the next slide
  const showNextSlide = () => {
    slideIndex++;

    if (slideIndex >= slides.length) {
      slideIndex = 0; // Restart from the first slide
    }
    showCurrentSlide();
  };

  // Function to show the previous slide
  const showPreviousSlide = () => {
    slideIndex--;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1; // Go to the last slide
    }
    showCurrentSlide();
  };

  nextButton.addEventListener('click', () => {
    showNextSlide();
  });

  prevButton.addEventListener('click', () => {
    showPreviousSlide();
  });
});
