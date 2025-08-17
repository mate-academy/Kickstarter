const sliderContainer = document.querySelector('.benefits__content');
const sliderList = document.querySelector('.benefits__list');
const sliderItem = document.querySelector('.benefits__item');

function removeClassesForSwiper() {
  sliderContainer.classList.remove('swiper');
  sliderList.classList.remove('swiper-wrapper');
  sliderItem.classList.remove('swiper-slide');
}

function addClassesForSwiper() {
  sliderContainer.classList.add('swiper');
  sliderList.classList.add('swiper-wrapper');
  sliderItem.classList.add('swiper-slide');
}

let slider = null;
let init = false;

function sliderBenefits() {
  const tabletMinWidth = 640;

  if (window.innerWidth < tabletMinWidth) {
    if (!init) {
      init = true;

      addClassesForSwiper();

      slider = new Swiper('.benefits__content', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  } else if (window.innerWidth >= tabletMinWidth) {
    removeClassesForSwiper();

    if (slider) {
      slider.destroy();
    }

    init = false;
  }
}

window.addEventListener('load', function () {
  sliderBenefits();
});

window.addEventListener('resize', function () {
  sliderBenefits();
});

module.exports = {
  sliderBenefits,
};
