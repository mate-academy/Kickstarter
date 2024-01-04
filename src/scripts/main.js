'use strict';

window.addEventListener('hashchange', () => {
  const headerContent = document.querySelector('.header');
  const maincontent = document.querySelector('.generalMain');

  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    headerContent.style.opacity = '0';
    maincontent.style.opacity = '0';
  } else {
    document.body.classList.remove('page__body--with-menu');
    headerContent.style.opacity = '1';
    maincontent.style.opacity = '1';
  }
});

const sliderContent1 = document.querySelector('.features__contain--sound');
const sliderContent2 = document.querySelector('.features__contain--connect');
const sliderContent3 = document.querySelector('.features__contain--app');
const sliderCounter1 = document.querySelector('.slider__counter--one');
const sliderCounter2 = document.querySelector('.slider__counter--two');
const sliderCounter3 = document.querySelector('.slider__counter--three');
let n = 1;

document.querySelector('.slider__pointer--right')
  .addEventListener('click', function() {
    n = n + 1;

    if (n === 1) {
      sliderContent1.style.display = 'block';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'none';
      sliderCounter1.style.display = 'block';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'none';
    }

    if (n === 2) {
      sliderContent1.style.display = 'none';
      sliderContent2.style.display = 'block';
      sliderContent3.style.display = 'none';
      sliderCounter1.style.display = 'none';
      sliderCounter2.style.display = 'block';
      sliderCounter3.style.display = 'none';
    }

    if (n === 3) {
      sliderContent1.style.display = 'none';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'block';
      sliderCounter1.style.display = 'none';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'block';
    }

    if (n > 3) {
      n = 1;
      sliderContent1.style.display = 'block';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'none';
      sliderCounter1.style.display = 'block';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'none';
    }
  });

document.querySelector('.slider__pointer--left')
  .addEventListener('click', function() {
    n = n - 1;

    if (n === 1) {
      sliderContent1.style.display = 'block';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'none';
      sliderCounter1.style.display = 'block';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'none';
    }

    if (n === 2) {
      sliderContent1.style.display = 'none';
      sliderContent2.style.display = 'block';
      sliderContent3.style.display = 'none';
      sliderCounter1.style.display = 'none';
      sliderCounter2.style.display = 'block';
      sliderCounter3.style.display = 'none';
    }

    if (n === 3) {
      sliderContent1.style.display = 'none';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'block';
      sliderCounter1.style.display = 'none';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'block';
    }

    if (n < 1) {
      n = 3;
      sliderContent1.style.display = 'none';
      sliderContent2.style.display = 'none';
      sliderContent3.style.display = 'block';
      sliderCounter1.style.display = 'none';
      sliderCounter2.style.display = 'none';
      sliderCounter3.style.display = 'block';
    }
  });

const formfieldElement = document.getElementById('formfield');
const emailInputElement = document.getElementById('formfield-email');
const messageInputElement = document.getElementById('formfield-massage');

formfieldElement.addEventListener('submit', (event) => {
  event.preventDefault();

  emailInputElement.value = '';
  messageInputElement.value = '';

  window.alert('Sent successfully!');
});
