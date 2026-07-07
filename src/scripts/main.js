'use strict';

const contactForm = document.querySelector('.contact__form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  contactForm.reset();
});

const SLIDER_ANIMATION_DURATION = 450;

function initSlider({
  sliderSelector,
  slideSelector,
  activeClass = 'is-active',
  nextButtonSelector,
  prevButtonSelector,
  counterSelector,
  enableClick = true,
  enableSwipe = true,
}) {
  const slider = document.querySelector(sliderSelector);

  if (!slider) {
    return;
  }

  const slides = Array.from(slider.querySelectorAll(slideSelector));

  if (slides.length === 0) {
    return;
  }

  const nextButton = nextButtonSelector
    ? document.querySelector(nextButtonSelector)
    : null;

  const prevButton = prevButtonSelector
    ? document.querySelector(prevButtonSelector)
    : null;

  const counter = counterSelector
    ? document.querySelector(counterSelector)
    : null;

  let activeIndex = slides.findIndex((slide) =>
    slide.classList.contains(activeClass),
  );

  if (activeIndex === -1) {
    activeIndex = 0;
  }

  let isAnimating = false;
  let startX = 0;
  let endX = 0;

  function updateCounter() {
    if (!counter) {
      return;
    }

    counter.textContent = String(activeIndex + 1).padStart(2, '0');
  }

  function setInitialSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle(activeClass, index === activeIndex);
    });

    updateCounter();
  }

  async function showSlide(nextIndex) {
    if (isAnimating || nextIndex === activeIndex) {
      return;
    }

    isAnimating = true;

    const currentSlide = slides[activeIndex];
    const nextSlide = slides[nextIndex];

    await currentSlide.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: SLIDER_ANIMATION_DURATION,
      easing: 'ease-in-out',
    }).finished;

    currentSlide.classList.remove(activeClass);
    nextSlide.classList.add(activeClass);

    await nextSlide.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: SLIDER_ANIMATION_DURATION,
      easing: 'ease-in-out',
    }).finished;

    activeIndex = nextIndex;
    updateCounter();

    isAnimating = false;
  }

  function showNextSlide() {
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

    showSlide(nextIndex);
  }

  function showPrevSlide() {
    const prevIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;

    showSlide(prevIndex);
  }

  function handleSwipe() {
    const swipeDistance = endX - startX;
    const minSwipeDistance = 50;

    if (Math.abs(swipeDistance) < minSwipeDistance) {
      return;
    }

    if (swipeDistance < 0) {
      showNextSlide();
    } else {
      showPrevSlide();
    }
  }

  nextButton?.addEventListener('click', showNextSlide);
  prevButton?.addEventListener('click', showPrevSlide);

  if (enableClick) {
    slides.forEach((slide) => {
      slide.addEventListener('click', showNextSlide);
    });
  }

  if (enableSwipe) {
    slider.addEventListener('pointerdown', (event) => {
      startX = event.clientX;
    });

    slider.addEventListener('pointerup', (event) => {
      endX = event.clientX;
      handleSwipe();
    });
  }

  setInitialSlide();
}

initSlider({
  sliderSelector: '#slider',
  slideSelector: '.features__card',
  nextButtonSelector: '#btnNext',
  prevButtonSelector: '#btnPrev',
  counterSelector: '#features__page-first',
  enableClick: false,
  enableSwipe: true,
});

initSlider({
  sliderSelector: '#sliderTop',
  slideSelector: '.benefits__item',
  enableClick: true,
  enableSwipe: true,
});
