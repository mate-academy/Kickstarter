'use strict';

/* runaway contact button */
const button = document.querySelector('.contact__send');
const wrapper = document.querySelector('.contact__button-wrapper');
const emailInput = document.querySelector('#email-input');

button.addEventListener('mouseenter', () => {
  wrapper.addEventListener('mousemove', moveButton);
});

button.addEventListener('mouseleave', () => {
  wrapper.removeEventListener('mousemove', moveButton);
});

function moveButton(event) {
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();

    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const mouseX = event.clientX;

    const buttonWidth = buttonRect.width;
    const wrapperWidth = wrapperRect.width;

    let newPosition = 0;

    if (mouseX > buttonRect.left + buttonWidth / 2) {
      newPosition = buttonRect.left - wrapperRect.left - buttonWidth;
    } else {
      newPosition = buttonRect.left - wrapperRect.left + buttonWidth;
    }

    if (newPosition < 0) {
      newPosition = wrapperWidth - buttonWidth;
    } else if (newPosition + buttonWidth > wrapperWidth) {
      newPosition = 0;
    }

    button.style.left = newPosition + 'px';
  }
}
/* ----end---- */

/* change size for both sliders on resize */
window.onresize = changeSize;

function changeSize() {
  // features slider
  feSliderSize = feSlider.offsetWidth;
  steps = [0, feSliderSize, feSliderSize * 2];

  if (window.innerWidth <= 1024) {
    feSlider.style.transform = `translateX(-${steps[currentSlide - 1]}px)`;
  } else {
    feSlider.style.transform = `translateX(0px)`;
  }
}
/* ----end---- */

/* features slider */
const feSlider = document.querySelector('.features__slider');
const numberLabel = document.querySelector('.features__current');
let feSliderSize = feSlider.offsetWidth;
let currentSlide = 1;
let steps = [0, feSliderSize, feSliderSize * 2];

const arrowPrev = document.querySelector('#arrow-prev');
const arrowNext = document.querySelector('#arrow-next');

arrowPrev.addEventListener('click', sliderPrev);
arrowNext.addEventListener('click', sliderNext);

function sliderPrev() {
  if (currentSlide >= 2) {
    currentSlide--;
    renderNumber();
    feSlider.style.transform = `translateX(-${steps[currentSlide - 1]}px)`;
    changeArrowColor();
  }
}

function sliderNext() {
  if (currentSlide <= 2) {
    currentSlide++;
    renderNumber();
    feSlider.style.transform = `translateX(-${steps[currentSlide - 1]}px)`;
    changeArrowColor();
  }
}

function renderNumber() {
  numberLabel.innerText = '0' + currentSlide;
}

function changeArrowColor() {
  if (currentSlide > 1) {
    arrowPrev.classList.remove('arrow--disabled');
  } else {
    arrowPrev.classList.add('arrow--disabled');
  }

  if (currentSlide < 3) {
    arrowNext.classList.remove('arrow--disabled');
  } else {
    arrowNext.classList.add('arrow--disabled');
  }
}

/* ----end---- */

/* icons-section slider */

