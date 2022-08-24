'use strict';

window.addEventListener('DOMContentLoaded', () => {
  class Burger {
    constructor(btn, list) {
      this.btn = btn;
      this.list = list;
      this.opened = false;
      this.btnDisabled = false;
      this.scrollWidth = window.innerWidth - document.body.clientWidth;

      this.btn.addEventListener('click', () => {
        this.toggle();
      });
    }

    open() {
      this.disableBtn();

      if (this.scrollWidth) {
        document.body.style.paddingRight = `${this.scrollWidth}px`;

        document.querySelectorAll('[data-padding-lock]').forEach(el => {
          el.style.paddingRight = `${this.scrollWidth}px`;
        });
      }

      this.btn.classList.add('burger--active');
      this.btn.setAttribute('aria-expanded', true);
      this.list.classList.add('header__menu--opened');
      this.list.setAttribute('aria-hidden', false);

      document.body.classList.add('page__content--lock');
    }

    close() {
      this.disableBtn();

      if (this.scrollWidth) {
        document.body.style.paddingRight = null;

        document.querySelectorAll('[data-padding-lock]').forEach(el => {
          el.style.paddingRight = null;
        });
      }

      document.body.classList.remove('page__content--lock');
      this.btn.classList.remove('burger--active');
      this.btn.setAttribute('aria-expanded', false);
      this.list.classList.remove('header__menu--opened');
      this.list.setAttribute('aria-hidden', true);
    }

    toggle() {
      if (this.btn.classList.contains('burger--active')) {
        this.close();
      } else {
        this.open();
      }
    }

    disableBtn() {
      this.btn.disabled = true;

      this.list.addEventListener('transitionend', () => {
        this.btn.disabled = false;
      });
    }
  }

  const headerMenu = document.querySelector('.header__menu');
  const burgerBtn = document.querySelector('.burger');
  const myBurger = new Burger(burgerBtn, headerMenu);
  const breakpointTablet = window.matchMedia('(min-width:768px)');

  let myBenefitsSwiper;
  let myFeaturesSwiper;

  const breakpointChecker = () => {
    if (breakpointTablet.matches === true) {
      if (myBenefitsSwiper !== undefined) {
        myBenefitsSwiper.destroy();
      };

      if (myFeaturesSwiper !== undefined) {
        myFeaturesSwiper.destroy();
      };

      return null;
    } else if (breakpointTablet.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = () => {
    // myBenefitsSwiper = new Swiper('.benefits__swiper', {
    //   loop: true,
    //   containerModifierClass: 'benefits__swiper',
    //   wrapperClass: 'benefits__list',
    //   slideClass: 'benefits__item',
    //   pagination: {
    //     el: '.benefits__pagination',
    //     clickable: true,
    //   },
    // });

    // myFeaturesSwiper = new Swiper('.features__swiper', {
    //   loop: true,
    //   spaceBetween: 50,
    //   containerModifierClass: 'features__swiper',
    //   wrapperClass: 'features__list',
    //   slideClass: 'features__item',
    //   navigation: {
    //     nextEl: '.features__swiper-next',
    //     prevEl: '.features__swiper-prev',
    //   },
    //   breakpoints: {
    //     600: {
    //       spaceBetween: 100,
    //     },
    //   },
    //   pagination: {
    //     el: '.features__pagination',
    //     type: 'fraction',
    //   },
    // });
  };

  breakpointTablet.addListener(breakpointChecker);
  breakpointChecker();

  document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
      if (!breakpointTablet.matches) {
        myBurger.close();
      }

      document.querySelector('.nav__link--active')
        .classList.remove('nav__link--active');

      e.target.classList.add('nav__link--active');
    }
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset !== 0) {
      document.querySelector('.header').classList.add('header--scroll');
    } else {
      document.querySelector('.header').classList.remove('header--scroll');
    }
  });
});
