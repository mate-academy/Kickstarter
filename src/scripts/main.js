'use strict';

const menuIcon = document.querySelector('.top-bar__icon');
const closeIcon = document.querySelector('.sidebar__close');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', () => {
  sidebar.classList.add('sidebar--active');
});

closeIcon.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--active');
});

const arrow = document.querySelector('.footer__totop');

/* eslint-disable no-undef */

function smoothScrollToTop(duration = 500) {
  const start = window.pageYOffset;
  const startTime = performance.now();

  function scrollStep(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);

    window.scrollTo(0, start * (1 - ease));

    if (progress < 1) {
      requestAnimationFrame(scrollStep);
    }
  }

  requestAnimationFrame(scrollStep);
}

/* eslint-enable no-undef */

arrow.addEventListener('click', () => {
  smoothScrollToTop(500);
});
