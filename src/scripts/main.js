'use strict';

const {
  toggleLangFunc,
  setENBtn,
  setUABtn,
} = require('../scripts/modules/toggleLang.js');

const { pageElement, checkNumFunc, articleNums } = require('./modules/featuresSwiperPagination.js');

const { prevBtn, nextBtn, activeArticle } = pageElement;
const { checkNum } = checkNumFunc;

const { elements, functions } = require('./modules/forms.js');

const { form, email, message, sendBtn } = elements;
const { onBlur, onFocus, onInput, onSubmit, resetErrors } = functions;

new Swiper('.swiper__benefits', {
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

new Swiper('.swiper__features', {
  navigation: {
    nextEl: '.toggles__toggle--next',
    prevEl: '.toggles__toggle--prev',
  },
})

const totalArticles = 3;
let articleNum = 1;

prevBtn.addEventListener('click', () => {
  if (articleNum === 1) {
    return;
  }

  articleNum--;
  activeArticle.textContent = articleNum;

  checkNum(articleNum, totalArticles);
})

nextBtn.addEventListener('click',() => {
  if (articleNum === totalArticles) {
    return;
  }

  articleNum++;
  activeArticle.textContent = articleNum;

  checkNum(articleNum, totalArticles);
})

setENBtn.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.remove('inactive');

    toggleLangFunc('en');
  });
});

setUABtn.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.remove('inactive');

    toggleLangFunc('ua');
  });
});

email.form.addEventListener('click', () => {
  onFocus(email, message);
});

email.input.addEventListener('input', (e) => {
  resetErrors(email);

  setTimeout(() => {
    const content = e.target.value;

    onInput(email, content);
  }, 500);
});

email.input.addEventListener('blur', () => {
  onBlur(email);
  onBlur(message);
});

message.form.addEventListener('click', () => {
  onFocus(message, email);
});

message.input.addEventListener('input', (e) => {
  resetErrors(message);

  setTimeout(() => {
    const content = e.target.value;

    onInput(message, content);
  }, 500);
});

message.input.addEventListener('blur', () => {
  onBlur(email);
  onBlur(message);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  onSubmit(email.input, message.input);
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();

  onSubmit(email.input, message.input);
});
