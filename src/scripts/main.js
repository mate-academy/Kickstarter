'use strict';

// #region scroll off
function updateBodyClass() {
  if (window.location.hash === '#header__menu') {
    document.body.classList.add('no-scroll');
    document.querySelector('.go-top').style.display = 'none';
  } else {
    document.body.classList.remove('no-scroll');
    document.querySelector('.go-top').style.display = 'block';
  }
}

window.addEventListener('hashchange', updateBodyClass);
window.addEventListener('load', updateBodyClass);
//#endregion

// #region language change
const uaLang = document.querySelector('.ua-lang');
const enLang = document.querySelector('.en-lang');

uaLang.addEventListener('click', () => {
  uaLang.classList.add('active-lang');
  enLang.classList.remove('active-lang');
});

enLang.addEventListener('click', () => {
  enLang.classList.add('active-lang');
  uaLang.classList.remove('active-lang');
})
//#endregion

// #region animation benefits block on mobile
let index = 1
let BenefitsBlockCount = 4
let curentActivBlock = document.querySelector(`.benefits--block--${index}`);
let animation;


function changeCurentBlock() {
  curentActivBlock = document.querySelector(`.benefits--block--${index}`);
}

function checkWindowSize() {
  if (window.innerWidth < 720) {
    if (animation) {
      return;
    }

    animation = setInterval (() => {
      curentActivBlock.classList.remove('active');
      index = index === BenefitsBlockCount ? 1 : index + 1;
      changeCurentBlock();
      curentActivBlock.classList.add('active');
    }, 4000)
  } else if (animation) {
    clearInterval(animation);
    animation = null;
  }
}

checkWindowSize();
window.addEventListener('resize', checkWindowSize);
// #endregion

//#region features slider
let featuresIndex = 1;
let featuresBlockCount = 3;
let curentFeaturesBlock = document.querySelector(`.features--block--${featuresIndex}`);
let featuresSlideLeft = document.querySelector('.features__slide-left');
let featuresSlideRight = document.querySelector('.features__slide-right');
let slideNumber = document.querySelector('.features__current-slide');
let slideNumberText = ['01', '02', '03'];
let slideNumberIndex = 0;

function changeFeaturesBlock() {
  curentFeaturesBlock = document.querySelector(`.features--block--${featuresIndex}`);
}

featuresSlideRight.addEventListener('click', () => {
  featuresSlideLeft.disabled = false;
  curentFeaturesBlock.classList.remove('active');
  featuresIndex++;
  changeFeaturesBlock();
  curentFeaturesBlock.classList.add('active');

  slideNumberIndex++;
  slideNumber.textContent = slideNumberText[slideNumberIndex];

  if (featuresIndex === 3) {
    featuresSlideRight.disabled = true;
  }
})

featuresSlideLeft.addEventListener('click', () => {
  featuresSlideRight.disabled = false;
  curentFeaturesBlock.classList.remove('active');
  featuresIndex--;
  changeFeaturesBlock();
  curentFeaturesBlock.classList.add('active');

  slideNumberIndex--;
  slideNumber.textContent = slideNumberText[slideNumberIndex];

  if (featuresIndex === 1) {
    featuresSlideLeft.disabled = true;
  }
})
//#endregion

//#region form input
let mailInput = document.querySelector('.questions__email-field');
let textInput = document.querySelector('.questions__text-field');
let formButton = document.querySelector('.questions__button');

textInput.addEventListener('input', () => {
  if(!textInput.checkValidity()) {
    textInput.classList.add('invalid');
    textInput.reportValidity();
  } else {
    textInput.classList.remove('invalid');
  }
})

mailInput.addEventListener('input', () => {
  if(!mailInput.checkValidity()) {
    mailInput.classList.add('invalid');
    mailInput.reportValidity();
  } else {
    mailInput.classList.remove('invalid');
  }
})

formButton.addEventListener('click', (event) => {
  if (!mailInput.checkValidity() || !textInput.checkValidity()) {
    event.preventDefault();
  }
})

//#endregion

const scrollBtn = document.querySelector('.go-top');
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const headerBottom = header.offsetHeight / 2;

  if (window.scrollY > headerBottom) {
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});
