'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(
    ".features__list-first, .features__list-second, .features__list-third"
  );

  const btnLeft = document.querySelector(".features__button__left");
  const btnRight = document.querySelector(".features__button__right");

  const currentNumber = document.querySelector(
    ".features__button__number__left"
  );

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slides[index].classList.add("active");

    currentNumber.textContent = String(index + 1).padStart(2, "0");
  }

  btnRight.addEventListener("click", function (e) {
    e.preventDefault();

    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }

    showSlide(currentIndex);
  });

  btnLeft.addEventListener("click", function (e) {
    e.preventDefault();

    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }

    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});


document.addEventListener("DOMContentLoaded", function () {
  const langLinks = document.querySelectorAll('.top-bar__lang-switcher__link');

  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      langLinks.forEach(l => l.classList.remove('top-bar__lang-switcher__link--active'));
      link.classList.add('top-bar__lang-switcher__link--active');

      const lang = link.dataset.lang;
      console.log('Selected language:', lang);

      // setLanguage(lang)
      // localStorage.setItem('lang', lang)
    });
  });
});





