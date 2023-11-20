'use strict';
/* #slider region */

let count = 0;

const sliderLine = document.querySelector('.slider-line');
const currentSlider = document.querySelector('.slider__buttons__count-current');

document.querySelector('.slider__buttons__button-right')
  .addEventListener('click', () => {
    count += 260;

    if (count > 520) {
      count = 0;
    }

    sliderLine.style.left = -count + 'px';
    updateCurrentSlider();
  });

document.querySelector('.slider__buttons__button-left')
  .addEventListener('click', () => {
    count -= 260;

    if (count < 0) {
      count = 520;
    }

    sliderLine.style.left = -count + 'px';
    updateCurrentSlider();
  });

function updateCurrentSlider() {
  switch (count) {
    case 260:
      currentSlider.textContent = '02';
      break;
    case 520:
      currentSlider.textContent = '03';
      break;
    default:
      currentSlider.textContent = '01';
  }
}
/* #endregion */

/* footer-Message-Textarea-Rows region */
function changeTextareRows() {
  const windowWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

  const countRows = document.querySelector('.footer__message__form-message');

  if (windowWidth >= 640 && windowWidth < 1280) {
    countRows.rows = 12;
  } else {
    countRows.rows = 6;
  }
}

changeTextareRows();

window.addEventListener('resize', changeTextareRows);
/* #endregion */

/* language change */
document.querySelectorAll('.language-eng, .language-ua')
  .forEach(function(element) {
    element.addEventListener('click', toggleLanguage);
  });

function toggleLanguage(event) {
  const languageBlock = event.currentTarget.closest('.language');

  if (!languageBlock) {
    return;
  }

  const engElement = languageBlock.querySelector('.language-eng');
  const uaElement = languageBlock.querySelector('.language-ua');

  engElement.classList.toggle('language--is-active');
  engElement.classList.toggle('language--is-inactive');

  uaElement.classList.toggle('language--is-active');
  uaElement.classList.toggle('language--is-inactive');
}
/* #endregion */
