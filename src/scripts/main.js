'use strict';

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  form.reset();
  e.preventDefault();
});

// Show arrow to top

const showArrow = document.querySelector('.arrow-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    showArrow.classList.add('arrow-top--show');
  } else {
    showArrow.classList.remove('arrow-top--show');
  }
});

// Show menu

const opener = document.querySelector('#opener');
const cross = document.querySelector('#cross');
const menu = document.querySelector('#menu');

const hideMenu = () => {
  menu.classList.remove('menu--show');
};

const showMenu = () => {
  menu.classList.add('menu--show');
};

opener.addEventListener('click', () => {
  showMenu();
});

cross.addEventListener('click', () => {
  hideMenu();
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hideMenu();
  }
});

//  Features Slider

const buttonRight = document.querySelector('.features__slider-button--right');
const buttonLeft = document.querySelector('.features__slider-button--left');
const featuresSlider = document.querySelector('.features__slider-wrapper');
const currPosition = document.querySelector('.features__slider-number-change');
let position = 0;

const render = () => {
  featuresSlider.style.transform = `translateX(-${position * 100}%)`;
  currPosition.innerText = `0${position + 1}`;
};

buttonRight.addEventListener('click', () => {
  if (position >= 2) {
    return;
  }
  position++;
  render();
});

buttonLeft.addEventListener('click', () => {
  if (position <= 0) {
    return;
  }

  position--;
  render();
});

//  Benefits Slider

const benefitsSlider = document.querySelector('.benefits__slider-position');
let startTouchX;
let endTouchX;
let benefitsSliderPosition = 0;

const renderBenefitsSlider = () => {
  benefitsSlider.style.transform = `translateX(
    -${benefitsSliderPosition * 100}%
  )`;
};

if (window.innerWidth < 768) {
  benefitsSlider.addEventListener('touchstart', (e) => {
    startTouchX = e.changedTouches[0].clientX;
  });

  benefitsSlider.addEventListener('touchend', (e) => {
    endTouchX = e.changedTouches[0].clientX;

    const directionX = startTouchX - endTouchX;
    const minSwipe = 20;

    if (directionX > minSwipe && benefitsSliderPosition < 3) {
      benefitsSliderPosition++;
      renderBenefitsSlider();

      return;
    }

    if (directionX < -minSwipe && benefitsSliderPosition > 0) {
      benefitsSliderPosition--;
      renderBenefitsSlider();
    }
  });
}
