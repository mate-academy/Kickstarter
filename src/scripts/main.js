'use strict';
/* eslint-env browser */

function animateSections() {
  const sections = document.querySelectorAll('.section--left, .section--right');

  if (!sections.length) return;

  function isSectionVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
  }

  function handleScroll() {
    sections.forEach((section) => {
      if (isSectionVisible(section)) {
        section.classList.add('animated');
      } else {
        section.classList.remove('animated');
      }
    });
  }

  handleScroll();

  let isScrolling;
  window.addEventListener(
    'scroll',
    () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(handleScroll, 50);
    },
    { passive: true },
  );
}

document.addEventListener('DOMContentLoaded', animateSections);

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
