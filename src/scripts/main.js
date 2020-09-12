'use strict';

addStyleOnScroll();
scrollToSection();

function addStyleOnScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    const fromTop = nav.getBoundingClientRect().top;

    if (fromTop === 0) {
      nav.style.boxShadow = '0px 1px 0px 0px rgba(13,178,179,0.3)';
    } else {
      nav.style.boxShadow = '';
    }
  });
}

function scrollToSection() {
  const navList = document.querySelector('.header__nav-list');
  const toggler = document.querySelector('.toggler');

  navList.addEventListener('click', function(event) {
    event.preventDefault();

    toggler.checked = false;

    const anchor = event.target;
    const sectionId = anchor.getAttribute('href');

    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
}
