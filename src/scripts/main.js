'use strict';

const btnPrev = document.querySelector('.features__nav__buttons--prev');
const btnNext = document.querySelector('.features__nav__buttons--next');

btnPrev.addEventListener('click', () => {
  plusSlides(-1);
});

btnNext.addEventListener('click', () => {
  plusSlides(1);
});



let slideIndex = 1;
//showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("features__slides");
    const numberHtml = document.querySelector('.features__nav__numbers');
    const numberContainer = document.querySelector('.features__nav__numbers__container');
    numberContainer.remove();

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    numberHtml.insertAdjacentHTML('beforeend', `
      <div class="features__nav__numbers__container">
        <span class="features__nav__numbers--active">0${slideIndex}</span> / 0${slides.length}
      </div>
  `);
}
