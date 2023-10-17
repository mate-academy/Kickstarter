'use strict';

const slides = document.querySelectorAll('.feature');
const buttons = document.querySelectorAll('.features__control');
const prevButton = document.querySelector('.features__control--prev');
const currnetNumber = document.querySelector('.features__current');
let slideIndex = 0;
const currentSlideIndex = ['01', '02', '03'];
const index = slideIndex;

currnetNumber.textContent = `${currentSlideIndex[index]}`;

console.log(prevButton);

function showSlide(index) {
  slides[slideIndex].classList.remove('active');
  slides[index].classList.add('active');
  slideIndex = index;
}

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('features__control--prev')) {
      let index = slideIndex - 1;

      buttons[0].classList.add('features__control--prev--active');
      buttons[1].classList.remove('features__control--next--active');

      if (index < 0) {
        index = slides.length - 1;
      }

      currnetNumber.textContent = `${currentSlideIndex[index]}`;

      showSlide(index);
    } else if (e.classList.contains('features__control--next')) {
      let index = slideIndex + 1;

      buttons[1].classList.add('features__control--next--active');
      buttons[0].classList.remove('features__control--prev--active');

      if (index >= slides.length) {
        index = 0;
      }

      currnetNumber.textContent = `${currentSlideIndex[index]}`;

      showSlide(index);
    }
  });
});

showSlide(slideIndex);

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim-active');
    }
  });
}

const options = { threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.anim');

for (const elm of elements) {
  observer.observe(elm);
}
