'use strict';


// placing hero img properly

const headerTitle = document.querySelector('.header__title');
const header = document.querySelector('.header');
const page = document.documentElement;

let padding = parseFloat(window.getComputedStyle(header).getPropertyValue('padding-inline'));



if (page.clientWidth > 569) {
  header.style.backgroundPosition = `${headerTitle.clientWidth + padding}px bottom`;
} else {
  header.style.backgroundPosition = '0 86px';
}

window.addEventListener('resize', () => {
  if (page.clientWidth > 569) {
    header.style.backgroundPosition = `${headerTitle.clientWidth + padding}px bottom`;
  } else {
    header.style.backgroundPosition = '0 86px';
  }
});

// slider for .our-story on mobile
const slides = document.querySelectorAll('.our-story__item');
const dots = document.querySelectorAll('.our-story__dot');

showSlides(1);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

function showSlides(n) {
  if (page.clientWidth < 569) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('our-story__dot--active');
    }

    slides[n - 1].style.display = 'flex';
    dots[n - 1].classList.add('our-story__dot--active');
  }
}


// slider for .features on mobile
const featuresCards = document.querySelectorAll('.features__card');

let slideIndex = 1;
showFeatures(1);

function plusFeatures(n) {
  showFeatures((slideIndex += n));
}

function showFeatures(n) {
  if (page.clientWidth < 1024) {
    for (let i = 0; i < featuresCards.length; i++) {
      featuresCards[i].style.display = 'none';
    }

    if (n < 1) {
      featuresCards[2].style.display = 'unset';
      slideIndex = 3;
    } else if (n > featuresCards.length) {
      featuresCards[0].style.display = 'unset';
      slideIndex = 1;
    } else {
      featuresCards[n - 1].style.display = 'unset';
    }
  }
}
