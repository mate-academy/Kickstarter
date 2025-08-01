// ==========================================================================
// featuresCarousel.js | Features Carousel Module
// Description:
// Modular JS to control a feature carousel with pagination and arrows
// ==========================================================================
export function initFeaturesCarousel(config) {
  const {
    containerSelector = '.features-carousel',
    itemSelector = '.carousel__item',
    arrowLeftSelector = '.carousel__arrow--left',
    arrowRightSelector = '.carousel__arrow--right',
    currentPageSelector = '.carousel__page-current',
    totalPageSelector = '.carousel__page-total',
    activeClass = 'active',
  } = config;

  const container = document.querySelector(containerSelector);

  if (!container) {
    return;
  }

  const items = container.querySelectorAll(itemSelector);
  const btnPrev = container.querySelector(arrowLeftSelector);
  const btnNext = container.querySelector(arrowRightSelector);
  const currentPage = container.querySelector(currentPageSelector);
  const totalPage = container.querySelector(totalPageSelector);

  // Slide 3 como default visual (índice 2)
  let realIndex = 2;
  let visualIndex = 0; // mostrar como página 01

  const totalItems = items.length;

  function updateCarousel(index) {
    items.forEach((item, i) => {
      item.classList.toggle(activeClass, i === realIndex);
    });

    if (currentPage) {
      currentPage.textContent = String(index + 1).padStart(2, '0'); // 01, 02...
    }

    if (totalPage) {
      totalPage.textContent = String(totalItems).padStart(2, '0');
    }
  }

  function goToPrev() {
    visualIndex = (visualIndex - 1 + totalItems) % totalItems;
    realIndex = (realIndex - 1 + totalItems) % totalItems;
    updateCarousel(visualIndex);
  }

  function goToNext() {
    visualIndex = (visualIndex + 1) % totalItems;
    realIndex = (realIndex + 1) % totalItems;
    updateCarousel(visualIndex);
  }

  // Init
  updateCarousel(visualIndex);

  // Event listeners
  btnPrev?.addEventListener('click', goToPrev);
  btnNext?.addEventListener('click', goToNext);
}
