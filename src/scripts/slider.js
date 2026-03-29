export function initSlider() {
  const slider = document.querySelector('[data-slider]');

  if (!slider) {
    return;
  }

  const value = document.querySelector('.features__value');
  const items = slider.querySelectorAll('.features__item');
  const leftButton = slider.querySelector('.features__button--left');
  const rightButton = slider.querySelector('.features__button--right');

  if (!items.length || !leftButton || !rightButton) {
    return;
  }

  let currentIndex = 0;
  let previousIndex = 0;
  const totalSteps = items.length;
  const breakpoint = window.matchMedia('(min-width: 1280px)');

  const updateSlider = (direction = 'init') => {
    if (breakpoint.matches) {
      return;
    }

    if (value) {
      value.textContent = `0${currentIndex + 1}`;
    }

    items.forEach((item) => {
      item.classList.remove(
        'features__item--active',
        'features__item--exit-left',
        'features__item--exit-right',
        'features__item--enter-left',
        'features__item--enter-right',
      );
    });

    if (direction === 'init') {
      items[currentIndex].classList.add('features__item--active');
    } else if (direction === 'next') {
      if (items[previousIndex]) {
        items[previousIndex].classList.add('features__item--exit-left');
      }

      items[currentIndex].classList.add('features__item--enter-right');

      void items[currentIndex].offsetWidth;

      items[currentIndex].classList.add('features__item--enter-right');

      items[currentIndex].classList.remove('features__item--enter-right');
      items[currentIndex].classList.add('features__item--active');
    } else if (direction === 'prev') {
      if (items[previousIndex]) {
        items[previousIndex].classList.add('features__item--exit-right');
      }

      items[currentIndex].classList.add('features__item--enter-left');

      void items[currentIndex].offsetWidth;

      items[currentIndex].classList.remove('features__item--enter-left');
      items[currentIndex].classList.add('features__item--active');
    }

    leftButton.classList.toggle(
      'features__button--disabled',
      currentIndex === 0,
    );

    leftButton.classList.toggle('features__button--active', currentIndex > 0);

    rightButton.classList.toggle(
      'features__button--disabled',
      currentIndex === totalSteps - 1,
    );

    rightButton.classList.toggle(
      'features__button--active',
      currentIndex < totalSteps - 1,
    );
  };

  const goToNext = () => {
    if (currentIndex < totalSteps - 1 && !breakpoint.matches) {
      previousIndex = currentIndex;
      currentIndex++;
      updateSlider('next');
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0 && !breakpoint.matches) {
      previousIndex = currentIndex;
      currentIndex--;
      updateSlider('prev');
    }
  };

  rightButton.addEventListener('click', goToNext);
  leftButton.addEventListener('click', goToPrev);

  breakpoint.addEventListener('change', () => {
    if (breakpoint.matches) {
      items.forEach((item) => {
        item.classList.remove(
          'features__item--exit-left',
          'features__item--exit-right',
        );
        item.classList.add('features__item--active');
      });
    } else {
      updateSlider('init');
    }
  });

  if (breakpoint.matches) {
    items.forEach((item) => item.classList.add('features__item--active'));
  } else {
    updateSlider('init');
  }
}
