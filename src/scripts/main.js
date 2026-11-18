'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('menu-toggle');
  const menuLinks = document.querySelectorAll('.menu a');

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (burgerToggle) {
        burgerToggle.checked = false; // Закриває меню
      }
    });
  });
});


const slides = document.querySelectorAll('.Connectivity, .app,.sound');
const prevBtn = document.getElementById('features-prev');
const nextBtn = document.getElementById('features-next');
const current = document.getElementById('features-current');

let index = 0;

function showSlide(newIndex) {

  if(newIndex < 0) {
  newIndex = slides.length - 1;
  }

  if(newIndex >= slides.length) {
    newIndex = 0;
  }

  index = newIndex;

  slides.forEach((slide, i) => {
  slide.classList.toggle('is-active', i === index);
  });

 current.textContent = String(index + 1).padStart(2, '0');
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

showSlide(0);
