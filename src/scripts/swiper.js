import Swiper from 'swiper';
import {
  Pagination,
  Navigation,
  Mousewheel,
  Keyboard,
  EffectFade,
} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import 'swiper/css/effect-fade';

const CLASS_SWIPER = 'swiper';
const SELECTOR_SWIPER = `.${CLASS_SWIPER}`;

const baseOptions = {
  direction: 'horizontal',
  modules: [Navigation, Pagination, Mousewheel, Keyboard],
  pagination: {
    el: '.my-swiper__pagination',
    type: 'fraction',
    renderFraction: (currentClass, totalClass) => {
      return `
      <span class="my-swiper__current ${currentClass}"></span>
      <span class="my-swiper__divider">/</span>
      <span class="my-swiper__total ${totalClass}"></span>
      `;
    },
  },

  navigation: {
    nextEl: '.my-swiper__button--next',
    prevEl: '.my-swiper__button--prev',
  },
  grabCursor: true,

  mousewheel: {
    enabled: true,
    forceToAxis: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: false,
  },
};

const mobileOptions = {
  ...baseOptions,
  modules: [EffectFade, ...baseOptions.modules],
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
};

const tabletOptions = {
  ...baseOptions,

  slidesPerView: 2,
  spaceBetween: 45,
};

// const swiper = new Swiper(SELECTOR_SWIPER, MY_SWIPER_OPTIONS);

// const swiper = document.querySelector(SELECTOR_SWIPER);

let swiperInstance = null;
const mqTablet = window.matchMedia('(min-width: 768px)');
const mqDesktop = window.matchMedia('(min-width: 1440px)');

function getOptions() {
  if (mqDesktop.matches) {
    return null;
  }

  if (mqTablet.matches) {
    return tabletOptions;
  }

  return mobileOptions;
}

function updateSwiper() {
  const options = getOptions();

  if (!options) {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    return;
  }

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  swiperInstance = new Swiper(SELECTOR_SWIPER, options);
}

mqTablet.addEventListener('change', updateSwiper);
mqDesktop.addEventListener('change', updateSwiper);
updateSwiper();
