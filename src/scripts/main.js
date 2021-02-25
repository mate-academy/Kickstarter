'use strict';

// slider

function slider(sliderItem, idPrev, idNext) {
  let slideIndex = 1;

  showSlides(slideIndex);

  const btnIdNext = document.getElementById(`${idNext}`);
  const btnIdPrev = document.getElementById(`${idPrev}`);

  btnIdNext.addEventListener('click', () => {
    btnIdNext.classList.add(`${idNext}-active`);
    btnIdPrev.classList.remove(`${idPrev}-active`);
    showSlides(slideIndex += 1);
  });

  btnIdPrev.addEventListener('click', () => {
    btnIdPrev.classList.add(`${idPrev}-active`);
    btnIdNext.classList.remove(`${idNext}-active`);
    showSlides(slideIndex -= 1);
  });

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName(`${sliderItem}`);

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
  }
}

const idInfoPrev = 'info-slider__btn--prev';
const idInfoNext = 'info-slider__btn--next';
const infoSlides = 'info-slider__item';

slider(infoSlides, idInfoPrev, idInfoNext);

const featuresSlides = 'features-slider__item';
const idFeaturesPrev = 'features-slider__btn--prev';
const idFeaturesNext = 'features-slider__btn--next';

slider(featuresSlides, idFeaturesPrev, idFeaturesNext);

// end slider

// burger-menu

const burgerMenuWrap = document.querySelector('.burger-menu-wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNav = document.querySelector('.mobile-nav__list');

burgerMenuWrap.onclick = function() {
  burgerMenu.classList.toggle('burger-menu--active');
  burgerMenuWrap.classList.toggle('burger-menu-wrapper--active');
  mobileMenu.classList.toggle('mobile-menu--active');
  document.body.classList.toggle('body--disabled');
};

mobileNav.onclick = function() {
  burgerMenu.classList.remove('burger-menu--active');
  burgerMenuWrap.classList.remove('burger-menu-wrapper--active');
  document.body.classList.remove('body--disabled');
  mobileMenu.classList.remove('mobile-menu--active');
};

// burger-menu end

const en = document.getElementById('en');
const ua = document.getElementById('ua');
const enMob = document.getElementById('enMob');
const uaMob = document.getElementById('uaMob');

en.addEventListener('click', () => {
  en.classList.add('header-nav__language--active');
  ua.classList.remove('header-nav__language--active');
  enMob.classList.add('mobile-nav__language--active');
  uaMob.classList.remove('mobile-nav__language--active');
});

ua.addEventListener('click', () => {
  ua.classList.add('header-nav__language--active');
  en.classList.remove('header-nav__language--active');
  uaMob.classList.add('mobile-nav__language--active');
  enMob.classList.remove('mobile-nav__language--active');
});

enMob.addEventListener('click', () => {
  en.classList.add('header-nav__language--active');
  ua.classList.remove('header-nav__language--active');
  enMob.classList.add('mobile-nav__language--active');
  uaMob.classList.remove('mobile-nav__language--active');
});

uaMob.addEventListener('click', () => {
  ua.classList.add('header-nav__language--active');
  en.classList.remove('header-nav__language--active');
  uaMob.classList.add('mobile-nav__language--active');
  enMob.classList.remove('mobile-nav__language--active');
});
