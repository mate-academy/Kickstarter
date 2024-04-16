'use strict';

document.addEventListener('DOMContentLoaded', function() {
  const prevButton = document.querySelector('.features__buttons--back');
  const nextButton = document.querySelector('.features__buttons--forward');
  const featureBlocks = document.querySelectorAll('.features__block');
  const counter = document.querySelector('.features__counter');

  let currentSlide = 2;
  const totalSlides = featureBlocks.length;

  showSlide(currentSlide);

  updateCounter();
  showAllBlocks();

  function showSlide(index) {
    featureBlocks.forEach((block, i) => {
      if (i === index) {
        block.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });
    updateCounter();
  }

  function showAllBlocks() {
    if (window.innerWidth >= 1256) {
      featureBlocks.forEach((block) => {
        block.style.display = 'flex';
      });
    }
  }

  function updateCounter() {
    counter.textContent = (currentSlide + 1) + ' / ' + totalSlides;
  }

  prevButton.addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + featureBlocks.length)
      % featureBlocks.length;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % featureBlocks.length;
    showSlide(currentSlide);
  });

  function toggleSlider() {
    if (window.innerWidth >= 1256) {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    } else {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    }
  }
  toggleSlider();

  window.addEventListener('resize', function() {
    toggleSlider();
  });
});
