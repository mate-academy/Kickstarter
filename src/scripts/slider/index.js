import { SlideInfo } from './SlideInfo';
import { ContainerTransformer } from './ContainerTransformer';
import { SliderCounter } from './SliderCounter';
import { Buttons } from './Buttons';

export const useSlider = () => {
  const DOMElements = {
    slides: document.querySelectorAll('[data-slider="slide"]'),
    container: document.querySelector('[data-slider="container"]'),
    nextBtn: document.querySelector('[data-slider="next-button"]'),
    prevBtn: document.querySelector('[data-slider="prev-button"]'),
    currentSlide: document.querySelector('[data-slider="current-slide"]'),
    slideCount: document.querySelector('[data-slider="slide-count"]'),
  };

  const SLIDE_INFO_MODIFIERS = {
    currentSlide: 'features__currentSlide--max',
    slideCount: 'features__lastSlide--current',
  };

  const lastPossibleIndex = DOMElements.slides.length - 1;

  const containerTransformer = new ContainerTransformer(
    DOMElements.container,
    DOMElements.slides,
  );

  const sliderCounter = new SliderCounter(0, lastPossibleIndex, [
    containerTransformer,
    new Buttons(DOMElements, lastPossibleIndex),
    new SlideInfo(DOMElements, SLIDE_INFO_MODIFIERS, lastPossibleIndex),
  ]);

  sliderCounter.value = 0;

  DOMElements.nextBtn.addEventListener('click', () => {
    sliderCounter.value++;
  });

  DOMElements.prevBtn.addEventListener('click', () => {
    sliderCounter.value--;
  });

  window.addEventListener('resize', () => {
    containerTransformer.update(sliderCounter.value);
  });
};
