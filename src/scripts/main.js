'use strict';

const fadeUpElements = document.querySelectorAll(
  '.fade-up'
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.3,
  }
);

fadeUpElements.forEach((el) => observer.observe(el));






document.addEventListener('DOMContentLoaded', () => {
  let swiper = null;

  function initSwiper() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 1024 && swiper === null) {
      swiper = new Swiper('.features__wrapper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        navigation: {
          nextEl: '.swiper__button-next',
          prevEl: '.swiper__button-prev',
        },
      });

      // eslint-disable-next-line no-inner-declarations
      function updatePagination(swiperInstance) {

        const current = document.querySelector('.swiper__pagination--current');
        const total = document.querySelector('.swiper__pagination--total');

        if (current && total) {
          // eslint-disable-next-line max-len
          current.textContent = String(swiperInstance.realIndex + 1).padStart(2, '0');
          // eslint-disable-next-line max-len
          total.textContent = String(swiperInstance.slides.length).padStart(2, '0');
        }
      }

      swiper.on('init slideChange', () => updatePagination(swiper));
      swiper.init();
    }

    if (screenWidth > 1024 && swiper !== null) {
      swiper.destroy(true, true); // usuwa slider
      swiper = null;
    }
  }


  initSwiper();
  window.addEventListener('resize', initSwiper);
});


if (window.innerWidth > 1024 && swiper !== null) {
  swiper.destroy(true, true);
  swiper = null;

  document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.style.width = '';
    slide.style.flex = '';
  });

  const wrapper = document.querySelector('.swiper-wrapper');
  if (wrapper) wrapper.style.display = '';
}


