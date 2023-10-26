'use strict';

const featuresSlider = function(slidesSelector, leftBtnSelector,
  rightBtnSelector, currentSelector, totalSelector, activeSelector) {
  const slides = document.querySelectorAll(slidesSelector);
  const btnLeft = document.querySelector(leftBtnSelector);
  const btnRight = document.querySelector(rightBtnSelector);
  const currentNum = document.querySelector(currentSelector);
  const totalNum = document.querySelector(totalSelector);

  let slideIndex = 1;

  if (slides.length < 10) {
    totalNum.textContent = `/ 0${slides.length}`;
  } else {
    totalNum.textContent = `/ ${slides.length}`;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach((slide) => (slide.classList.remove(activeSelector)));

    slides[slideIndex - 1].classList.add(activeSelector);

    if (slides.length < 10) {
      currentNum.textContent = `0${slideIndex}`;
    } else {
      currentNum.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  btnLeft.addEventListener('click', () => plusSlides(-1));
  btnRight.addEventListener('click', () => plusSlides(1));
};

module.exports = { featuresSlider };
