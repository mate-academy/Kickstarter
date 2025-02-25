let currentFeature = 1;
const MAX_FEATURES = 3;

function updateFeatures() {
  document.querySelectorAll('.feature').forEach((feature) => {
    feature.classList.remove('feature--active');
  });

  const activeFeature = document.querySelector(`.feature--${currentFeature}`);
  activeFeature.classList.add('feature--active');
  document.querySelector('.control-panel__position--current').textContent =
    currentFeature.toString().padStart(2, '0');
}

export function initFeaturesSlider() {
  const arrowLeft = document.querySelector('.arrow--left');
  const arrowRight = document.querySelector('.arrow--right');

  arrowLeft.addEventListener('click', () => {
    if (currentFeature === 1) {
      currentFeature = MAX_FEATURES;
    } else {
      currentFeature--;
    }
    updateFeatures();
  });

  arrowRight.addEventListener('click', () => {
    if (currentFeature === MAX_FEATURES) {
      currentFeature = 1;
    } else {
      currentFeature++;
    }
    updateFeatures();
  });

  updateFeatures();
}