import Swiper from 'swiper';

export function initMobileSwiper() {
  const swiperElement = document.querySelector('[data-mobile-swiper]');

  if (!swiperElement) {
    return;
  }

  let swiperInstance = null;
  const breakpoint = window.matchMedia('(min-width: 640px)');

  const initSwiper = () => {
    if (!breakpoint.matches && !swiperInstance) {
      swiperInstance = new Swiper('[data-mobile-swiper]', {
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
      });
    }
  };

  const destroySwiper = () => {
    if (breakpoint.matches && swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }
  };

  const handleResize = () => {
    if (breakpoint.matches) {
      destroySwiper();
    } else {
      initSwiper();
    }
  };

  breakpoint.addEventListener('change', handleResize);

  handleResize();
}
