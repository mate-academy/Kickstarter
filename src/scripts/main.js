'use strict';

const slides = document.querySelectorAll('.features__feature');
const container = document.querySelector('.features__list');
const next = document.querySelector('.next-button');
const prev = document.querySelector('.prev-button');
const page = document.getElementById('page');
let index = 0;
slides[index].style.opacity = '1';

next.addEventListener('click', () => {
  if (index === slides.length - 1) {
    return;
  }

  prev.disabled = false;
  index += 1;

  if (index === slides.length - 1) {
    next.disabled = true;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
    slides[i].style.transform = `translateX(${-100 * index}%)`;
  }

  slides[index].style.opacity = '1';
  page.textContent = `0${index + 1}`;
});

prev.addEventListener('click', () => {
  if (index === 0) {
    return;
  }
  next.disabled = false;

  index -= 1;

  if (index === 0) {
    prev.disabled = true;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = '0';
    slides[i].style.transform = `translateX(${-100 * index}%)`;
  }
  slides[index].style.opacity = '1';
  page.textContent = `0${index + 1}`;
});
