// ========================================================
// main.js | App Entry
// Description: Inicializa módulos principais da aplicação
// ========================================================

import { initI18n } from './modules/i18n/index.js';
import { initFeaturesCarousel } from './modules/carousel/featuresCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
  // Inicializa sistema de internacionalização
  initI18n();

  // Inicializa o carrossel de features
  initFeaturesCarousel({
    containerSelector: '.features-carousel',
    itemSelector: '.carousel__item',
    arrowLeftSelector: '.carousel__arrow--left',
    arrowRightSelector: '.carousel__arrow--right',
    currentPageSelector: '.carousel__page-current',
    totalPageSelector: '.carousel__page-total',
    activeClass: 'active',
  });

  // Função reutilizável de scroll suave até um elemento
  function smoothScrollTo(targetElement, duration = 2000) {
    if (!targetElement) {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      return;
    }

    const initialY = window.scrollY;
    const destinationY = targetElement.offsetTop;
    const animationStart = performance.now();

    function step(timestamp) {
      const elapsed = timestamp - animationStart;
      const progress = Math.min(elapsed / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const nextY = initialY + (destinationY - initialY) * easeOutCubic;

      window.scrollTo(0, nextY);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  // Manipula envio do formulário de contato
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.reset();
      smoothScrollTo(document.getElementById('home'));
    });
  }

  // Lida com o clique na seta "voltar ao topo"
  const scrollArrow = document.querySelector('.ftr__container--top-arrow-up a');

  if (scrollArrow) {
    scrollArrow.addEventListener('click', (e) => {
      e.preventDefault();
      smoothScrollTo(document.getElementById('home'));
    });
  }
});
