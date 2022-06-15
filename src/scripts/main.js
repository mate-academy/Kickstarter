'use strict';

const video = document.querySelector('#video-presentation');
const button = document.querySelector('#video-presentation-button');
const checkbox = document.querySelector('#video-presentation-toggler');

video.addEventListener('ended', () => {
  video.load();

  if (checkbox.checked) {
    checkbox.checked = false;
  }
});

button.addEventListener('change', function handleClick() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

const featuresPrev = document.querySelector('#features-prev');
const featuresNext = document.querySelector('#features-next');
const featuresCurrent = document.querySelector('#features-current-frame');

function swipeFeatures(offset) {
  const togglers = document.querySelectorAll('.features__frame-toggler');

  for (let i = 0; i < togglers.length; i++) {
    const toggler = togglers[i];

    if (toggler.checked
      && i + offset < togglers.length
      && i + offset >= 0) {
      toggler.checked = false;
      togglers[i + offset].checked = true;

      const indexFormat = '00';
      let displayIndex = i + 1 + offset;

      displayIndex += indexFormat + displayIndex.toString();
      featuresCurrent.innerHTML = displayIndex.slice(-indexFormat.length);

      if (offset > 0) {
        featuresPrev.classList.add('slider__active-arrow');

        if (i + offset === togglers.length - 1) {
          featuresNext.classList.remove('slider__active-arrow');
        }
      }

      if (offset < 0) {
        featuresNext.classList.add('slider__active-arrow');

        if (i + offset === 0) {
          featuresPrev.classList.remove('slider__active-arrow');
        }
      }

      break;
    }
  }

  return 0;
};

featuresPrev.addEventListener('click', () => {
  swipeFeatures(-1);
});

featuresNext.addEventListener('click', () => {
  swipeFeatures(1);
});
