'use strict';

function initFeaturesSlider() {
  const featureGroups = document.querySelectorAll('.features__group');
  const previousFeature = document.querySelector('[data-features-prev]');
  const nextFeature = document.querySelector('[data-features-next]');
  const currentFeature = document.querySelector('[data-features-current]');
  let featureIndex = 0;

  function showFeature(step) {
    featureGroups[featureIndex].classList.remove(
      'features__group--active',
      'features__group--enter-next',
      'features__group--enter-previous',
    );

    featureIndex += step;

    const direction = step > 0 ? 'next' : 'previous';

    featureGroups[featureIndex].classList.add(
      'features__group--active',
      `features__group--enter-${direction}`,
    );
    previousFeature.disabled = featureIndex === 0;
    nextFeature.disabled = featureIndex === featureGroups.length - 1;
    currentFeature.textContent = String(featureIndex + 1).padStart(2, '0');
  }

  previousFeature.addEventListener('click', () => {
    showFeature(-1);
  });

  nextFeature.addEventListener('click', () => {
    showFeature(1);
  });
}

initFeaturesSlider();

document
  .querySelector('.contacts__form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
