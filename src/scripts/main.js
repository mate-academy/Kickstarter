'use strict';

// #region menu
const body = document.querySelector('.page__body');
const sideMenu = document.querySelector('.page__menu');
const menuBtn = document.querySelectorAll('.button--menu');
const menuLinks = document.querySelectorAll('.page__menu .nav__link');

function toggleMenu(forceState) {
  const isActive =
    forceState !== undefined
      ? forceState
      : !sideMenu.classList.contains('page__menu--is-active');

  sideMenu.classList.toggle('page__menu--is-active', isActive);
  body.classList.toggle('page__body--no-scroll', isActive);

  menuBtn.forEach((btn) => {
    btn.classList.toggle('button--menu--is-active', isActive);
  });
}

menuBtn.forEach((btn) => {
  btn.addEventListener('click', () => toggleMenu());
});

menuLinks.forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

// #endregion

// #region reviews slider
const slider = document.querySelector('.reviews__slider');
const slides = document.querySelectorAll('.review');
const dotsContainer = document.createElement('div');

dotsContainer.classList.add('reviews__dots');
slider.parentNode.appendChild(dotsContainer);

slides.forEach((_, i) => {
  const dot = document.createElement('button');

  dot.addEventListener('click', () => {
    slider.scrollTo({
      left: i * slider.offsetWidth,
      behavior: 'smooth',
    });
    setActiveDot(i);
  });

  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('button');

const setActiveDot = (index) => {
  dots.forEach((d) => d.classList.remove('active'));

  if (dots[index]) {
    dots[index].classList.add('active');
  }
};

slider.addEventListener('scroll', () => {
  const index = Math.round(slider.scrollLeft / slider.offsetWidth);

  setActiveDot(index);
});

setActiveDot(0);
// #endregion

// #region features slider
const featuresTrack = document.querySelector('.features__track');

if (featuresTrack) {
  const featureSlides = Array.from(featuresTrack.querySelectorAll('.feature'));
  const btnPrev = document.querySelector('.features__arrow--left');
  const btnNext = document.querySelector('.features__arrow--right');
  const curEl = document.querySelector('.features__current');
  const totalEl = document.querySelector('.features__total');

  let featureIndex = 0;
  const featureTotal = featureSlides.length;

  if (totalEl) {
    totalEl.textContent = String(featureTotal).padStart(2, '0');
  }

  const updateFeatureCounter = () => {
    if (curEl) {
      curEl.textContent = String(featureIndex + 1).padStart(2, '0');
    }
  };

  const getSlideLeft = (i) => {
    const trackRect = featuresTrack.getBoundingClientRect();
    const slideRect = featureSlides[i].getBoundingClientRect();

    return slideRect.left - trackRect.left + featuresTrack.scrollLeft;
  };

  const goToFeature = (i) => {
    if (featureTotal === 0) {
      return;
    }

    let targetIndex = i;

    if (targetIndex < 0) {
      targetIndex = featureTotal - 1;
    }

    if (targetIndex >= featureTotal) {
      targetIndex = 0;
    }

    featureIndex = targetIndex;

    const left = getSlideLeft(targetIndex);

    featuresTrack.scrollTo({
      left,
      behavior: 'smooth',
    });
  };

  btnNext?.addEventListener('click', () => goToFeature(featureIndex + 1));
  btnPrev?.addEventListener('click', () => goToFeature(featureIndex - 1));

  let ticking = false;

  featuresTrack.addEventListener(
    'scroll',
    () => {
      if (ticking) {
        return;
      }
      ticking = true;

      /* eslint-env browser */
      requestAnimationFrame(() => {
        const x = featuresTrack.scrollLeft;
        let nearest = 0;
        let best = Infinity;

        for (let i = 0; i < featureTotal; i++) {
          const d = Math.abs(getSlideLeft(i) - x);

          if (d < best) {
            best = d;
            nearest = i;
          }
        }

        if (nearest !== featureIndex) {
          featureIndex = nearest;
          updateFeatureCounter();
        }

        ticking = false;
      });
    },
    { passive: true },
  );

  window.addEventListener('resize', () => goToFeature(featureIndex));
  updateFeatureCounter();
}
// #endregion
