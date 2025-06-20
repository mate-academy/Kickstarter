import { getBreakpoint } from "./utils";

let currentBreakpoint = getBreakpoint();
const activeObservers = [];
let currentConfig = [];

const getThreshold = (size) => {
  if (size === 'desktop') return 'large';
  if (size === 'tablet') return 'medium';
  return 'small';
};

const removeOldAnimationClasses = (el) => {
  [...el.classList].forEach(cls => {
    if (cls.startsWith('animate-') && cls !== 'animate-show') {
      el.classList.remove(cls);
    }
  });
};

const applyInitialAnimations = () => {
  currentConfig.forEach(block => {
    const selectors = Array.isArray(block.elements) ? block.elements : [block.elements];
    const elements = selectors.map(sel => [...document.querySelectorAll(sel)]).flat();
    const bp = currentBreakpoint;
    const animations = block.animations?.[bp] || [];

    elements.forEach((el, i) => {
      if (el.classList.contains('animate-show')) return;

      const animClass = animations.length === 1
        ? animations[0]
        : animations[i] || animations[animations.length - 1] || '';

      removeOldAnimationClasses(el);
      el.classList.add(animClass);
    });
  });
};

const clearAnimations = (elements) => {
  elements.forEach(el => {
    el.classList.remove('animate-show');
    removeOldAnimationClasses(el);
  });
};

const setupObservers = () => {
  currentConfig.forEach(block => {
    const container = document.querySelector(block.container);
    if (!container) return;

    const selectors = Array.isArray(block.elements) ? block.elements : [block.elements];
    const elements = selectors.map(sel => [...document.querySelectorAll(sel)]).flat();

    const bp = currentBreakpoint;
    const animations = block.animations?.[bp] || [];
    const delays = block.delays || [];

    const threshold = block.thresholds?.[getThreshold(bp)] ?? 0.3;
    const once = block.mode === 'once';

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          elements.forEach((el, i) => {
            if (el.classList.contains('animate-show')) return;

            const animClass = animations.length === 1
              ? animations[0]
              : animations[i] || animations[animations.length - 1] || '';

            const delay = Array.isArray(delays)
              ? (delays[i] ?? delays[delays.length - 1] ?? 0)
              : 0;

            removeOldAnimationClasses(el);
            el.classList.add(animClass);

            setTimeout(() => {
              el.classList.add('animate-show');
            }, delay);
          });

          if (once) observer.disconnect();
        } else if (!once) {
          clearAnimations(elements);
        }
      });
    }, { threshold });

    observer.observe(container);
    activeObservers.push({ observer, elements });
  });
};

export const initResponsiveAnimations = (config) => {
  currentConfig = config;
  currentBreakpoint = getBreakpoint();
  applyInitialAnimations();
  setupObservers();
};

export const resetObserversOnResize = (force = false) => {
  const newBreakpoint = getBreakpoint();
  if (!force && newBreakpoint === currentBreakpoint) return;

  activeObservers.forEach(({ observer }) => observer.disconnect());
  activeObservers.length = 0;

  currentBreakpoint = newBreakpoint;

  applyInitialAnimations();
  setupObservers();
};
