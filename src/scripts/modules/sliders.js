const SWIPE_THRESHOLD = 50;

const pad = (value) => String(value).padStart(2, '0');

const createSlider = (config) => {
  const {
    viewport,
    track,
    dots = [],
    prevButton = null,
    nextButton = null,
    counterValue = null,
    gridFrom = null,
  } = config;

  const slides = Array.from(track.children);
  const lastIndex = slides.length - 1;
  let index = 0;
  let swipeStartX = null;

  const wideMedia =
    gridFrom !== null
      ? window.matchMedia(`(min-width: ${gridFrom}px)`)
      : null;

  const render = () => {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === index);

      if (dotIndex === index) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });

    if (prevButton) {
      prevButton.disabled = index === 0;
    }

    if (nextButton) {
      nextButton.disabled = index === lastIndex;
    }

    if (counterValue) {
      counterValue.textContent = pad(index + 1);
    }
  };

  const goTo = (nextIndex) => {
    index = Math.min(lastIndex, Math.max(0, nextIndex));
    render();
  };

  dots.forEach((dot, dotIndex) => {
    dot.addEventListener('click', () => goTo(dotIndex));
  });

  if (prevButton) {
    prevButton.addEventListener('click', () => goTo(index - 1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => goTo(index + 1));
  }

  viewport.addEventListener('pointerdown', (event) => {
    swipeStartX = event.clientX;
  });

  window.addEventListener('pointerup', (event) => {
    if (swipeStartX === null) {
      return;
    }

    const distance = swipeStartX - event.clientX;
    swipeStartX = null;

    if (Math.abs(distance) > SWIPE_THRESHOLD) {
      goTo(index + Math.sign(distance));
    }
  });

  if (wideMedia) {
    const resetTransform = (isWide) => {
      if (isWide) {
        track.style.transform = '';
      }
    };

    wideMedia.addEventListener('change', (event) => {
      resetTransform(event.matches);
    });

    resetTransform(wideMedia.matches);
  }

  render();
};

export const initSliders = () => {
  const benefitsViewport = document.querySelector('.benefits__viewport');

  if (benefitsViewport) {
    createSlider({
      viewport: benefitsViewport,
      track: document.querySelector('.benefits__track'),
      dots: Array.from(document.querySelectorAll('.benefits__dot')),
      gridFrom: 768,
    });
  }

  const technologyViewport = document.querySelector('.technology__viewport');

  if (technologyViewport) {
    createSlider({
      viewport: technologyViewport,
      track: document.querySelector('.technology__track'),
      prevButton: document.querySelector('.technology__arrow--prev'),
      nextButton: document.querySelector('.technology__arrow--next'),
      counterValue: document.querySelector('.technology__counter-value'),
      gridFrom: 1280,
    });
  }
};
