const descSwiper = new Swiper('.swiper-desc', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  mousewheel: true,

  breakpoints : {
    744: {
      slidesPerView: 2,
      mousewheel: false,
      loop: false,
    },
    1180: {
      slidesPerView: 4,
    }
  }
});

const testimonialsSwiper = new Swiper('.swiper-testimonials', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  mousewheel: true,
});

const featuresSwiper = new Swiper('.swiper-features', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  breakpoints: {
    1180: {
      loop:false,
      slidesPerView: 2,
    }
  },

  navigation: {
    nextEl: '.swiper-features__button--next',
    prevEl: '.swiper-features__button--prev',
  },

  pagination: {
    type: 'fraction',
    el: '.swiper-features__pagination',
  },
});
