'use strict';

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

class Debounce {
  constructor(time = 100, functions = () => { }) {
    this.time = time;
    this.functions = functions;
    this.timeOut = null;
  }

  init() {
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      this.functions();
    }, this.time);
  }
}

class MobileSwiper {
  constructor(selector, swiperObj, breakpoint) {
    this.selector = document.querySelector(`.${selector}`);
    this.selectorClassName = selector;
    this.breakpoint = breakpoint;
    this.swiperObj = swiperObj;
    this.initSlider = null;
  }

  create() {
    if (
      window.innerWidth < this.breakpoint
      && this.selector.dataset.mobile === 'false'
    ) {
      // eslint-disable-next-line no-undef
      this.initSlider = new Swiper(this.selector, this.swiperObj);
      this.selector.dataset.mobile = 'true';
    }
  }

  destroy() {
    if (window.innerWidth >= this.breakpoint) {
      this.selector.dataset.mobile = 'false';

      if (
        this.selector.classList.contains(`${this.selectorClassName}initialized`)
      ) {
        this.initSlider.destroy();
      }
    }
  }

  init() {
    this.selector.dataset.mobile = 'false';
    this.create();
    this.destroy();
  }
}

function addClassOnScroll() {
  if (window.pageYOffset !== 0) {
    document.querySelector('.header').classList.add('header--scroll');
  } else {
    document.querySelector('.header').classList.remove('header--scroll');
  }
}

function makeActive(target, activeClass) {
  document.querySelector(`.${activeClass}`).classList.remove(activeClass);
  target.classList.add(activeClass);
}

const headerMenu = document.querySelector('.header__menu');
const burgerBtn = document.querySelector('.burger');
const myBurger = new Burger(burgerBtn, headerMenu);
const breakpointTablet = 640;
const fields = document.querySelectorAll('.main-field');
const debounceScrollFuncs = new Debounce(100, addClassOnScroll);
const debounceResizeFuncs = new Debounce(300, () => {
  benefitsSwiper.init();
  featuresSwiper.init();
});
const benefitsSwiperParams = {
  loop: true,
  containerModifierClass: 'benefits__swiper',
  wrapperClass: 'benefits__list',
  slideClass: 'benefits__item',
  pagination: {
    el: '.benefits__pagination',
    clickable: true,
  },
};
const benefitsSwiper = new MobileSwiper(
  'benefits__swiper', benefitsSwiperParams, breakpointTablet
);
const featuresSwiperParams = {
  loop: true,
  spaceBetween: 50,
  containerModifierClass: 'features__swiper',
  wrapperClass: 'features__list',
  slideClass: 'features__item',
  navigation: {
    nextEl: '.features__swiper-next',
    prevEl: '.features__swiper-prev',
  },
  breakpoints: {
    600: {
      spaceBetween: 100,
    },
  },
  pagination: {
    el: '.features__pagination',
    type: 'fraction',
  },
};
const featuresSwiper = new MobileSwiper(
  'features__swiper', featuresSwiperParams, breakpointTablet
);

benefitsSwiper.init();
featuresSwiper.init();

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('nav__link')) {
    if (!window.matchMedia(`(min-width: ${breakpointTablet}px)`).matches) {
      myBurger.close();
    }

    makeActive(e.target, 'nav__link--active');
  }

  if (e.target.classList.contains('header__lang-btn')) {
    makeActive(e.target, 'header__lang-btn--active');
  }
});

document.querySelector('.questions__form').addEventListener('submit', (e) => {
  e.preventDefault();

  fields.forEach((el) => {
    el.value = '';
  });
});

window.addEventListener('scroll', () => {
  debounceScrollFuncs.init();
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= breakpointTablet) {
    debounceResizeFuncs.init();
  }
});
