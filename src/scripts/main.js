'use strict';

const benefitsViewport = document.querySelector('.benefits__viewport');
const benefitsTrack = document.querySelector('.benefits__track');
const benefitsItems = document.querySelectorAll('.benefits__item');
const benefitsPrev = document.querySelector('.benefits__arrow--prev');
const benefitsNext = document.querySelector('.benefits__arrow--next');
const benefitsCounterCurrent = document.querySelector('.benefits__counter-current');
const realCount = benefitsItems.length;

if (benefitsTrack && benefitsItems.length > 0) {
  let index = 0;
  let timerId = null;
  let jumpLock = false;
  let isPaused = false;
  let startX = 0;
  let startY = 0;
  let isPointerDown = false;

  const isMobile = () => window.matchMedia('(max-width: 639px)').matches;

  let clone = null;

  const addClone = () => {
    if (clone) {
      return;
    }

    clone = benefitsItems[0].cloneNode(true);
    benefitsTrack.appendChild(clone);
  };

  const removeClone = () => {
    if (!clone) {
      return;
    }

    clone.remove();
    clone = null;
  };

  const updateCounter = () => {
    if (!benefitsCounterCurrent) {
      return;
    }

    const displayIndex = index === realCount ? 1 : index + 1;
    const label = displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

    benefitsCounterCurrent.textContent = label;
  };

  const goTo = (newIndex, instant = false) => {
    if (!isMobile()) {
      return;
    }

    index = newIndex;

    if (instant) {
      benefitsTrack.style.transition = 'none';
    } else {
      benefitsTrack.style.transition = '';
    }

    benefitsTrack.style.transform = `translateX(-${index * 100}%)`;
    updateCounter();

    if (instant) {
      benefitsTrack.offsetHeight;
      benefitsTrack.style.transition = '';
    }
  };

  benefitsTrack.addEventListener('transitionend', (event) => {
    if (event.target !== benefitsTrack) {
      return;
    }
    if (event.propertyName !== 'transform') {
      return;
    }
    if (jumpLock) {
      return;
    }

    if (index === realCount) {
      jumpLock = true;
      goTo(0, true);
      jumpLock = false;
    }
  });

  const stopAutoplay = () => {
    if (timerId !== null) {
      clearInterval(timerId);
      timerId = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();

    if (isPaused) {
      return;
    }

    if (!isMobile()) {
      return;
    }

    timerId = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  const pause = () => {
    isPaused = true;
    stopAutoplay();
  };

  const togglePause = () => {
    isPaused = !isPaused;

    if (isPaused) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  };

  const nextSlide = () => {
    if (index >= realCount) {
      goTo(0, true);
    }
  
    goTo(index + 1);
  };

  const goPrev = () => {
    pause();
  
    if (index === 0) {
      goTo(realCount, true);
  
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          goTo(realCount - 1);
        });
      });
  
      return;
    }
  
    goTo(index - 1);
  };

  const goNext = () => {
    pause();
    nextSlide();
  };

  const SWIPE_THRESHOLD = 50;

  if (benefitsViewport) {
    benefitsViewport.addEventListener('pointerdown', (event) => {
      if (!isMobile()) {
        return;
      }

      isPointerDown = true;
      startX = event.clientX;
      startY = event.clientY;
      benefitsViewport.setPointerCapture(event.pointerId);
    });

    benefitsViewport.addEventListener('pointerup', (event) => {
      if (!isPointerDown || !isMobile()) {
        return;
      }

      isPointerDown = false;

      const diffX = event.clientX - startX;
      const diffY = event.clientY - startY;

      if (Math.abs(diffY) > Math.abs(diffX)) {
        return;
      }

      if (Math.abs(diffX) < SWIPE_THRESHOLD) {
        togglePause();
        return;
      }

      if (diffX < 0) {
        goNext();
      } else {
        goPrev();
      }
    });

    benefitsViewport.addEventListener('pointercancel', () => {
      isPointerDown = false;
    });
  }

  if (benefitsPrev) {
    benefitsPrev.addEventListener('click', goPrev);
  }

  if (benefitsNext) {
    benefitsNext.addEventListener('click', goNext);
  }

  const applyBenefitsLayout = () => {
    if (isMobile()) {
      addClone();
      goTo(0, true);
      startAutoplay();
    } else {
      stopAutoplay();
      removeClone();
      benefitsTrack.style.transform = 'none';
      benefitsTrack.style.transition = 'none';
    }
  };
  
  applyBenefitsLayout();
  window.addEventListener('resize', applyBenefitsLayout);
}

const featuresViewport = document.querySelector('.features__viewport');
const featuresTrack = document.querySelector('.features__track');
const featuresItems = document.querySelectorAll('.features__item');
const featuresPrev = document.querySelector('.features__arrow--prev');
const featuresNext = document.querySelector('.features__arrow--next');
const featuresCounterCurrent = document.querySelector(
  '.features__counter-current'
);
const featuresCount = featuresItems.length;

if (featuresTrack && featuresItems.length > 0) {
  let featuresIndex = 0;
  let featuresJumpLock = false;

  let featuresClone = null;

  const isFeaturesCarousel = () =>
    window.matchMedia('(max-width: 1279px)').matches;

  const addFeaturesClone = () => {
    if (featuresClone) {
      return;
    }

    featuresClone = featuresItems[0].cloneNode(true);
    featuresTrack.appendChild(featuresClone);
  };

  const removeFeaturesClone = () => {
    if (!featuresClone) {
      return;
    }

    featuresClone.remove();
    featuresClone = null;
  };

  const updateFeaturesCounter = () => {
    if (!featuresCounterCurrent) {
      return;
    }

    const displayIndex =
      featuresIndex === featuresCount ? 1 : featuresIndex + 1;
    const label =
      displayIndex < 10 ? `0${displayIndex}` : `${displayIndex}`;

    featuresCounterCurrent.textContent = label;
  };

  const goToFeatures = (newIndex, instant = false) => {
    if (!isFeaturesCarousel()) {
      return;
    }

    featuresIndex = newIndex;

    if (instant) {
      featuresTrack.style.transition = 'none';
    } else {
      featuresTrack.style.transition = '';
    }

    featuresTrack.style.transform =
      `translateX(-${featuresIndex * 100}%)`;
    updateFeaturesCounter();

    if (instant) {
      featuresTrack.offsetHeight;
      featuresTrack.style.transition = '';
    }
  };

  featuresTrack.addEventListener('transitionend', (event) => {
    if (event.target !== featuresTrack) {
      return;
    }
    if (event.propertyName !== 'transform') {
      return;
    }
    if (featuresJumpLock) {
      return;
    }

    if (!isFeaturesCarousel()) {
      return;
    }

    if (featuresIndex === featuresCount) {
      featuresJumpLock = true;
      goToFeatures(0, true);
      featuresJumpLock = false;
    }
  });

  const nextFeaturesSlide = () => {
    if (!isFeaturesCarousel()) {
      return;
    }

    if (featuresIndex >= featuresCount) {
      goToFeatures(0, true);
    }

    goToFeatures(featuresIndex + 1);
  };

  const goFeaturesPrev = () => {
    if (!isFeaturesCarousel()) {
      return;
    }

    if (featuresIndex === 0) {
      goToFeatures(featuresCount, true);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          goToFeatures(featuresCount - 1);
        });
      });

      return;
    }

    goToFeatures(featuresIndex - 1);
  };

  const goFeaturesNext = () => {
    nextFeaturesSlide();
  };

  if (featuresPrev) {
    featuresPrev.addEventListener('click', goFeaturesPrev);
  }

  if (featuresNext) {
    featuresNext.addEventListener('click', goFeaturesNext);
  }

  const applyFeaturesLayout = () => {
    if (isFeaturesCarousel()) {
      addFeaturesClone();
      goToFeatures(0, true);
    } else {
      removeFeaturesClone();
      featuresTrack.style.transform = 'none';
      featuresTrack.style.transition = 'none';
      featuresIndex = 0;
    }
  };

  applyFeaturesLayout();
  window.addEventListener('resize', applyFeaturesLayout);
}

const questionsForm = document.querySelector('.questions__form');

if (questionsForm) {
  questionsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!questionsForm.checkValidity()) {
      questionsForm.reportValidity();
      return;
    }

    questionsForm.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');

if (revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
}

const menuToggle = document.querySelector('#menu__toggle');
const menuCloseLinks = document.querySelectorAll(
  '.menu__link, .menu__meta-link, .menu__button'
);

if (menuToggle && menuCloseLinks.length > 0) {
  menuCloseLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle.checked = false;
    });
  });
}

if (menuToggle) {
  const DESKTOP_BREAKPOINT = 1280;

  function closeMenuOnDesktop() {
    if (window.innerWidth >= DESKTOP_BREAKPOINT && menuToggle.checked) {
      menuToggle.checked = false;
    }
  }

  window.addEventListener('resize', closeMenuOnDesktop);
  closeMenuOnDesktop();
}
