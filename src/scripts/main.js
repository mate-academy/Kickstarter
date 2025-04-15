'use strict';
/* eslint-env browser */

function handleScrollButton() {
  const scrollButton = document.querySelector('.scroll-button');
  const benefitsSection = document.querySelector('.benefits');

  if (!scrollButton || !benefitsSection) return;

  function checkVisibility() {
    const benefitsRect = benefitsSection.getBoundingClientRect();
    const scrollPosition = window.scrollY || window.pageYOffset;
    const isBenefitsPassed = scrollPosition > benefitsRect.bottom;
    const isAboveBenefits = scrollPosition < benefitsRect.top;

    if (isBenefitsPassed) {
      scrollButton.classList.add('scroll-button--active');
    } else if (isAboveBenefits) {
      scrollButton.classList.remove('scroll-button--active');
    }
  }

  checkVisibility();

  let isScrolling;
  window.addEventListener(
    'scroll',
    () => {
      clearTimeout(isScrolling);
      isScrolling = setTimeout(checkVisibility, 50);
    },
    { passive: true },
  );
}
document.addEventListener('DOMContentLoaded', handleScrollButton);

const sections = document.querySelectorAll(
  '.section--left, .section--right, .section--down',
);

function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.top < (window.innerHeight || document.documentElement.clientHeight)
  );
}

window.addEventListener('load', function () {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add('animated');
    }
  });
});

let lastScrollTop = 0;
document.addEventListener('scroll', function () {
  sections.forEach((section) => {
    if (isInView(section)) {
      section.classList.add('animated');
    } else {
      section.classList.remove('animated');
    }
  });

  lastScrollTop = window.scrollY || document.documentElement.scrollTop;
});

document.body.style.overflowX = 'hidden';
