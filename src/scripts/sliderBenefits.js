function sliderBenefits() {
  const slider = document.querySelector('.benefits__list');
  const slides = Array.from(document.querySelectorAll('.benefits__item'));
  let sliderWidth = document.querySelector('.benefits__list').offsetWidth;
  const dotsContainer = document.querySelector('.slider-dots');

  let orderIndex = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let startPosition = 0;
  let endPosition = 0;
  // offset within which the slide will not change
  const misstep = 50;
  let positionsDifference = 0;
  let isDragging = false;

  const gapSmall = 30;
  const tabletMinWidth = 768;

  const numberOfSlides = slides.length;
  const lastIndex = numberOfSlides - 1;
  const isMobileScreen = window.innerWidth < tabletMinWidth;
  let currentPadding = gapSmall;
  let slideWidth = sliderWidth + currentPadding;

  window.addEventListener('resize', () => {
    if (window.innerWidth >= tabletMinWidth) {
      slider.removeEventListener('touchstart', touchStart);
      slider.removeEventListener('touchend', touchEnd);
      slider.removeEventListener('touchmove', touchMove);
    } else {
      sliderWidth = document.querySelector('.benefits__list').offsetWidth;
      slideWidth = sliderWidth + currentPadding;
      slider.addEventListener('touchstart', touchStart, { passive: true });
      slider.addEventListener('touchend', touchEnd, { passive: true });
      slider.addEventListener('touchmove', touchMove, { passive: true });
    }
  });

  if (isMobileScreen) {
    slider.addEventListener('touchstart', touchStart, { passive: true });
    slider.addEventListener('touchend', touchEnd, { passive: true });
    slider.addEventListener('touchmove', touchMove, { passive: true });
  }

  slides.forEach((item, index) => {
    const btn = document.createElement('button');

    btn.addEventListener('click', () => {
      orderIndex = index;

      setDotClasses();
      setPositionByIndex();
    });

    btn.classList.add('slider-dots__dot');

    if (orderIndex === index) {
      btn.classList.add('slider-dots__dot--active');
    }

    dotsContainer.appendChild(btn);
  });

  function setDotClasses() {
    const btns = Array.from(document.querySelectorAll('.slider-dots__dot'));

    btns.forEach((item, index) => {
      if (orderIndex === index) {
        item.classList.add('slider-dots__dot--active');
      }

      if (orderIndex !== index) {
        item.classList.remove('slider-dots__dot--active');
      }
    });
  }

  function getPositionX(event) {
    return event.type.includes('mouse')
      ? event.pageX
      : event.touches[0].clientX;
  }

  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    slider.style.transition = `all .3s`;
  }

  function setPositionByIndex() {
    if (positionsDifference > 0 && orderIndex !== lastIndex) {
      orderIndex++;
      positionsDifference = 0;
    }

    if (positionsDifference < 0 && orderIndex !== 0) {
      orderIndex--;
      positionsDifference = 0;
    }

    currentTranslate = -slideWidth * orderIndex;
    prevTranslate = currentTranslate;

    setDotClasses();
    setSliderPosition();
  }

  function touchStart(event) {
    isDragging = true;
    startPosition = getPositionX(event);
    animationID = requestAnimationFrame(animation);
  }

  function touchMove(event) {
    if (isDragging) {
      endPosition = getPositionX(event);

      currentTranslate = prevTranslate + endPosition - startPosition;
    }
  }

  function touchEnd(event) {
    isDragging = false;

    positionsDifference = startPosition - endPosition;

    if (positionsDifference < misstep && positionsDifference > -misstep) {
      return;
    }

    setPositionByIndex();
    cancelAnimationFrame(animationID);
  }

  function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
  }
}

module.exports = {
  sliderBenefits,
};
