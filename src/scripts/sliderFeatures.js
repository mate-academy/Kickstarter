function sliderFeatures() {
  let slider = document.querySelector('.features__list');
  const slides = Array.from(document.querySelectorAll('.features__item'));

  const buttonPrev = document.querySelector('.features__slider-btn--left');
  const buttonNext = document.querySelector('.features__slider-btn--right');

  const currSlide = document.querySelector('.features__slide-current');
  const lastSlide = document.querySelector('.features__slide-last');

  lastSlide.innerHTML = `0${slides.length}`;

  let currentTranslate = 0;
  let currentIndex = 0;
  const lastIndex = slides.length - 1;

  const gapBetweenSlides = 20;
  let sliderWidth = slider.offsetWidth;
  let slideWidth = sliderWidth + gapBetweenSlides;

  buttonPrev.addEventListener('click', prevSlide);
  buttonNext.addEventListener('click', nextSlide);

  window.addEventListener('resize', () => {
    slider = document.querySelector('.features__list');
    sliderWidth = slider.offsetWidth;
    slideWidth = sliderWidth + gapBetweenSlides;
  });

  function prevSlide() {
    if (!currentIndex) {
      return;
    }

    currentIndex -= 1;
    setPositionByIndex();
    setDisabled();
    setCurrNumberSlide();
  }

  function nextSlide() {
    if (currentIndex === lastIndex) {
      return;
    }

    currentIndex += 1;
    setPositionByIndex();
    setDisabled();
    setCurrNumberSlide();
  }

  function setCurrNumberSlide() {
    currSlide.innerHTML = `0${currentIndex + 1}`;
  }

  function setDisabled() {
    buttonPrev.removeAttribute('disabled');
    buttonNext.removeAttribute('disabled');

    if (currentIndex === 0) {
      buttonPrev.setAttribute('disabled', true);
    }

    if (currentIndex === lastIndex) {
      buttonNext.setAttribute('disabled', true);
    }
  }

  function setSlidesPosition() {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${currentTranslate}px)`;
    });
  }

  function setPositionByIndex() {
    currentTranslate = currentIndex * -slideWidth;
    setSlidesPosition();
  }
}

module.exports = {
  sliderFeatures,
};
