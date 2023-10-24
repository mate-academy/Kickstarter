'use strict';

let currentFeature = 1;
const totalFeatures = 3;

const features = document.querySelectorAll('.features__feature');
const currentFeatureElement = document.querySelector(
  '.features__navigation-count-number--current'
);

document
  .querySelector('.features__navigation-arrows-link--back')
  .addEventListener('click', function(e) {
    e.preventDefault();
    switchFeature(-1);
  });

document
  .querySelector('.features__navigation-arrows-link--forward')
  .addEventListener('click', function(e) {
    e.preventDefault();
    switchFeature(1);
  });

function switchFeature(direction) {
  currentFeature += direction;

  if (currentFeature > totalFeatures) {
    currentFeature = 1;
  }

  if (currentFeature < 1) {
    currentFeature = totalFeatures;
  }

  features.forEach(function(feature) {
    if (feature.getAttribute('data-feature') === String(currentFeature)) {
      feature.classList.add('active');
    } else {
      feature.classList.remove('active');
    }
  });

  currentFeatureElement.textContent = String(currentFeature).padStart(2, '0');
};
