'use strict';

function setStyleNavSroll() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const top = nav.getBoundingClientRect().top;

    if (top === 0) {
      nav.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
    } else {
      nav.style.boxShadow = '';
    }
  });
};
setStyleNavSroll();
