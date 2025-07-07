'use strict';
const langButtons = document.querySelectorAll('.panel__lang[type="button"]');
const menuLinks = document.querySelectorAll('.menu__link');

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    langButtons.forEach((btn) => btn.classList.remove('panel__lang--active'));
    button.classList.add('panel__lang--active');
  });
});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', () => {
    menuLinks.forEach((link) => link.classList.remove('menu__link--active'));
    menuLink.classList.add('menu__link--active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth > 400) return;

  const vp = document.querySelector('.benefits__slider');
  if (!vp) return;

  const autoplay = EmblaCarouselAutoplay({
    delay: 3000,
    stopOnInteraction: true,
  });

  EmblaCarousel(vp, { loop: true, align: 'start', skipSnaps: false }, [
    autoplay,
  ]);

  new IntersectionObserver(
    ([{ isIntersecting }]) => {
      if (isIntersecting) autoplay.play();
      else autoplay.stop();
    },
    { threshold: 0.5 },
  ).observe(vp);
});

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth;
  if (width < 1440) {
    const swiper = new Swiper('.feature__content.swiper', {
      slidesPerView: 1,
      spaceBetween: 90,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        init: (s) => updateCounter(s),
        slideChange: (s) => updateCounter(s),
      },
    });

    function updateCounter(swiper) {
      const current = String(swiper.realIndex + 1).padStart(2, '0');
      const total = String(swiper.slides.length).padStart(2, '0');

      document.querySelector('.feature__counter-current').textContent = current;
      document.querySelector('.feature__counter-total').textContent = total;
    }
  }
});
