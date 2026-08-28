'use strict';

const slider = document.querySelector('[data-slider]');
const slides = [...document.querySelectorAll('[data-slide]')];

if (slider && slides.length) {
  const prevButton = slider.querySelector('[data-slider-prev]');
  const nextButton = slider.querySelector('[data-slider-next]');
  const currentLabel = slider.querySelector('[data-slider-current]');
  const totalLabel = slider.querySelector('[data-slider-total]');

  let index = 0;

  const pad = (value) => String(value).padStart(2, '0');

  const render = () => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('features__group--active', i === index);
    });

    if (currentLabel) {
      currentLabel.textContent = pad(index + 1);
    }

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

  render();
}

const form = document.querySelector('[data-form]');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

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
}
