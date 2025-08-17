'use strict';

// Зміна зображень для різної ширини екранів

import headerPhone from '../images/header-img-phone.png';
import headerTablet from '../images/header-img-tablet.png';
import headerDesktop from '../images/header-img-desktop.png';

import mainPhone from '../images/meet-luna-phone.png';
import mainTablet from '../images/meet-luna-tablet.png';
import mainDesktop from '../images/meet-luna-desktop.png';

import storyPhone from '../images/story-phone.png';
import storyTablet from '../images/story-tablet.png';
import storyDesktop from '../images/story-desktop.png';

import aboutPhone from '../images/about-phone.png';
import aboutTablet from '../images/about-tablet.png';
import aboutDesktop from '../images/about-desktop.png';

function updateImageSrc(imageId, phoneSrc, tabletSrc, desktopSrc) {
  const img = document.getElementById(imageId);

  const tabletMinWidth = getComputedStyle(document.documentElement).getPropertyValue('--tablet-min-width').trim();
  const desktopMinWidth = getComputedStyle(document.documentElement).getPropertyValue('--desktop-min-width').trim();

  const screenWidth = window.innerWidth;

  if (screenWidth >= parseInt(desktopMinWidth)) {
    img.src = desktopSrc;
  } else if (screenWidth >= parseInt(tabletMinWidth)) {
    img.src = tabletSrc;
  } else {
    img.src = phoneSrc;
  }
}

function updateAllImages() {
  updateImageSrc('headerImage', headerPhone, headerTablet, headerDesktop);
  updateImageSrc('mainImage', mainPhone, mainTablet, mainDesktop);
  updateImageSrc('storyImage', storyPhone, storyTablet, storyDesktop);
  updateImageSrc('aboutImage', aboutPhone, aboutTablet, aboutDesktop);
}

window.addEventListener('load', updateAllImages);
window.addEventListener('resize', updateAllImages);


// Встановлення висоти заголовків в Benefits

function setEqualTitleHeights() {
  const titles = document.querySelectorAll('.benefits__item-title');
  let maxHeight = 0;

  titles.forEach(title => {
    const height = title.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  titles.forEach(title => {
    title.style.height = `${maxHeight}px`;
  });
}

window.addEventListener('load', setEqualTitleHeights);
window.addEventListener('resize', setEqualTitleHeights);


// Слайдер

document.addEventListener('DOMContentLoaded', () => {
  const prevButton = document.querySelector('.slider__button--prev');
  const nextButton = document.querySelector('.slider__button--next');
  const slides = document.querySelectorAll('.slider__content');
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove('left', 'right');
      if (index < currentIndex) {
        slide.classList.add('left');
      } else if (index > currentIndex) {
        slide.classList.add('right');
      }
    });

    if (currentIndex === 0) {
      prevButton.classList.add('disabled');
    } else {
      prevButton.classList.remove('disabled');
    }

    if (currentIndex === slides.length - 1) {
      nextButton.classList.add('disabled');
    } else {
      nextButton.classList.remove('disabled');
    }

    document.querySelector('.slider__current-slide').textContent = String(currentIndex + 1).padStart(2, '0');
  }

  function showNextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlides();
    }
  }

  function showPrevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlides();
    }
  }

  prevButton.addEventListener('click', showPrevSlide);
  nextButton.addEventListener('click', showNextSlide);

  updateSlides();
});


// Встановлення висоти блоку слайдера

function setMaxHeight() {
  const sliderContents = document.querySelectorAll('.slider__content');

  let maxHeight = 0;

  sliderContents.forEach(content => {
      const contentHeight = content.offsetHeight;
      if (contentHeight > maxHeight) {
          maxHeight = contentHeight;
      }
  });

  const sliderControls = document.querySelector('.slider__controls');
  sliderControls.style.marginTop = maxHeight + 'px';
}

setMaxHeight();
window.addEventListener('resize', setMaxHeight);


// Перевірка форми на валідність

const form = document.getElementById('contactForm');
const submitButton = document.getElementById('submitButton');

function checkFormValidity() {
  if (form.checkValidity()) {
    submitButton.classList.add('active');
    submitButton.disabled = false;
  } else {
    submitButton.classList.remove('active');
    submitButton.disabled = true;
  }
}

form.addEventListener('input', checkFormValidity);


// Обробник події для відправки форми

form.addEventListener('submit', function(event) {
  event.preventDefault();

  alert('The form is successfully sent!');

  form.reset();

  submitButton.classList.remove('active');
  submitButton.disabled = true;
});



// Ефект магнетизму

const parents = document.querySelectorAll('.magnet-parent');

const attractionStrength = 0.7; // Коефіцієнт сили примагнічення

parents.forEach(parent => {
  const magnet = parent.querySelector('.magnet');

  const parentSize = parent.offsetWidth;
  const magnetSize = magnet.offsetWidth;

  const parentCenter = {
    x: parentSize / 2,
    y: parentSize / 2
  };

  const maxDistance = (parentSize - magnetSize) / 2;

  parent.addEventListener('mousemove', (e) => {
    const rect = parent.getBoundingClientRect();

    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    const distanceX = cursorX - parentCenter.x;
    const distanceY = cursorY - parentCenter.y;

    const influenceX = (distanceX / (parentSize / 2)) * maxDistance * attractionStrength;
    const influenceY = (distanceY / (parentSize / 2)) * maxDistance * attractionStrength;

    magnet.style.transform = `translate(calc(-50% + ${influenceX}px), calc(-50% + ${influenceY}px))`;
  });

  parent.addEventListener('mouseleave', () => {
    magnet.style.transform = `translate(-50%, -50%)`;
  });
});


// Ефект відштовхування

const containers = document.querySelectorAll('.image-container');

const maxOffsetPercentage = 8; // Коефіцієнт сили відштовхування

containers.forEach(container => {
  const image = container.querySelector('.magnetic-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = mouseX - centerX;
    const deltaY = mouseY - centerY;

    const offsetX = (deltaX / centerX) * maxOffsetPercentage;
    const offsetY = (deltaY / centerY) * maxOffsetPercentage;

    image.style.transform = `translate(${ -offsetX }%, ${ -offsetY }%) scale(1.16)`;
  });

  container.addEventListener('mouseleave', () => {
    image.style.transform = 'translate(0, 0)';
  });
});
