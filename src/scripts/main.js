import animationConfig from '../data/animation.json';
import { initMenu } from './ui/burger-menu';
import { initForm } from "./ui/form";
import { updateSlider } from './ui/slider';
import { initScrollUpButton } from './ui/scroll-up';
import { initNavigationObserver } from './handlers/navigation-tracker';
import { initTranslationHandler } from './ui/translate';
import { handleWindowChange } from './handlers/handleWindowChange';
import { initResponsiveAnimations } from './handlers/animate';

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', handleWindowChange);
  window.addEventListener('resize', handleWindowChange);
  initResponsiveAnimations(animationConfig);
  initTranslationHandler();
  initNavigationObserver();
  initScrollUpButton();
  handleWindowChange();
  updateSlider();
  initMenu();
  initForm();
});

