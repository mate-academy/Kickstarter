'use strict';

// Generic slider used by the BENEFITS and FEATURES sections.
//
// Markup contract:
//   [data-slides="block__slide"]  wrapper around the slides; the value is the
//                                 BEM base used to build the --active modifier
//   [data-slide]                  a single slide inside that wrapper
//   [data-slider]                 the controls, a sibling of the wrapper
//
// Without JS every slide stays visible and the controls are hidden, so a
// failing script degrades to a plain stacked list.
const initSlider = (track) => {
  const scope = track.parentElement;
  const slider = scope && scope.querySelector('[data-slider]');
  const slides = [...track.querySelectorAll('[data-slide]')];
  const slideBase = track.dataset.slides;

  if (!slider || !slides.length || !slideBase) {
    return;
  }

  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const currentLabel = slider.querySelector('[data-slider-current]');
  const totalLabel = slider.querySelector('[data-slider-total]');

  let index = 0;

  const pad = (value) => String(value).padStart(2, '0');

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle(`${slideBase}--active`, i === index);
    });

    if (currentLabel) {
      currentLabel.textContent = pad(index + 1);
    }

    // Per the design an arrow greys out at the edge: the slider does not loop
    if (prevButton) {
      prevButton.disabled = index === 0;
    }

    if (nextButton) {
      nextButton.disabled = index === slides.length - 1;
    }
  };

  const move = (step) => {
    const next = index + step;

    if (next < 0 || next > slides.length - 1) {
      return;
    }

    index = next;
    render();
  };

  if (totalLabel) {
    totalLabel.textContent = pad(slides.length);
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => move(-1));
  }

  if (nextButton) {
    nextButton.addEventListener('click', () => move(1));
  }

  // Hand the slides over to the slider only now that it works
  track.classList.add(`${track.classList[0]}--slider`);
  slider.classList.add('slider--ready');

  render();
};

const initSliders = () => {
  document.querySelectorAll('[data-slides]').forEach(initSlider);
};

// Contact form.
// The action attribute is omitted on purpose: there is nowhere to submit to,
// and without preventDefault the browser would GET the current URL.
const initContactForm = () => {
  const form = document.querySelector('[data-form]');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Belt and braces: required already blocks an empty submit, but the
    // check survives if the attribute is ever removed
    if (!form.checkValidity()) {
      form.reportValidity();

      return;
    }

    form.reset();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};

const init = () => {
  initSliders();
  initContactForm();
};

// The script is a module, but this guard keeps it working wherever it runs.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
