'use strict';
const languages = document.querySelectorAll('.language');

languages.forEach((language) => {
  language.addEventListener('click', (event) => {
    event.preventDefault();

    languages.forEach((item) => {
      item.classList.remove('language--active');
    });

    language.classList.add('language--active');
  });
});

const benefitsSlider = document.querySelector('.benefits__slider');
const benefitsItems = document.querySelector('.benefits__items');
const benefitsDots = document.querySelectorAll('.benefits__dot');

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

function showSlide(index) {
  currentSlide = index;

  benefitsItems.style.transform = `translateX(-${currentSlide * 100}%)`;

  benefitsDots.forEach((dot, i) => {
    dot.classList.toggle('benefits__dot--active', i === currentSlide);
  });
}

benefitsDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

benefitsSlider.addEventListener('touchstart', (event) => {
  touchStartX = event.touches[0].clientX;
});

benefitsSlider.addEventListener('touchend', (event) => {
  touchEndX = event.changedTouches[0].clientX;

  const swipeDistance = touchStartX - touchEndX;

  if (swipeDistance > 50 && currentSlide < benefitsDots.length - 1) {
    showSlide(currentSlide + 1);
  }

  if (swipeDistance < -50 && currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
});

const track = document.querySelector('.features__track');
const items = document.querySelectorAll('.features__item');
const prevBtn = document.querySelector('.features__arrow--prev');
const nextBtn = document.querySelector('.features__arrow--next');
const current = document.querySelector('.features__current');
const total = document.querySelector('.features__total');

let index = 0;
const lastIndex = items.length - 1;

const pad = (n) => String(n).padStart(2, '0');

function render() {
  track.style.transform = `translateX(-${index * 100}%)`;
  current.textContent = pad(index + 1);
  total.textContent = `/ ${pad(items.length)}`;

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === lastIndex;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    render();
  }
});

nextBtn.addEventListener('click', () => {
  if (index < lastIndex) {
    index++;
    render();
  }
});

// свайп на мобільних
let startX = 0;

track.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
  const diff = startX - e.changedTouches[0].clientX;

  if (diff > 50 && index < lastIndex) index++;
  if (diff < -50 && index > 0) index--;

  render();
});

render();

const form = document.querySelector('.questions__form');
const email = document.querySelector('.questions__input');
const message = document.querySelector('.questions__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isEmailValid = email.value.trim() !== '' && email.validity.valid;

  const isMessageValid = message.value.trim() !== '';

  email.classList.toggle('is-error', !isEmailValid);
  email.classList.toggle('is-valid', isEmailValid);

  message.classList.toggle('is-error', !isMessageValid);
  message.classList.toggle('is-valid', isMessageValid);

  if (isEmailValid && isMessageValid) {
    form.reset();

    email.classList.remove('is-valid');
    message.classList.remove('is-valid');
  }
});

[email, message].forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value.trim() !== '') {
      field.classList.remove('is-error');
      field.classList.add('is-valid');
    }
  });
});
