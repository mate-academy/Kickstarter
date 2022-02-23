
import Swiper from 'swiper/swiper-bundle';

const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger__line');
const logo = document.querySelector('.header__logo');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    burger.href = '#';
    burger.classList.add('burger--open');
    logo.classList.add('logo--light');

    for (let i = 0; i < burgerLine.length; i++) {
      burgerLine[i].classList.add('burger__line--open');
    }
  } else {
    document.body.classList.remove('page__body--with-menu');
    burger.href = '#menu';
    burger.classList.remove('burger--open');
    logo.classList.remove('logo--light');

    for (let i = 0; i < burgerLine.length; i++) {
      burgerLine[i].classList.remove('burger__line--open');
    }
  }
});

// нижче сладер swiper2 benefits

let swiper2 = null;
const mediaQuerySize = 767;
const mediaQuerySizeDesctop = 1279;
const swiperWrapper = document.querySelector('.benefits__swiper-wrapper');

function swiper2Init() {
  if (!swiper2) {
    swiper2 = new Swiper('.benefits__mySwiper2', {
      init: true,
      direction: 'horizontal',
      loop: false,
      observer: true,
      autoHeight: true,

      pagination: {
        el: '.benefits__swiper-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
          return '0<span class="'
          + currentClass
          + '"></span>'
          + ' <span class="no-active-font"> / </span> '
          + '<span class="no-active-font">0<span class="'
          + totalClass + '"></span></span>';
        },
      },

      navigation: {
        nextEl: '.benefits__swiper-button-next',
        prevEl: '.benefits__swiper-button-prev',
      },
    });
  }
}

function swiper2Destroy() {
  if (swiper2) {
    swiper2.destroy();
    swiper2 = null;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= mediaQuerySize) {
    swiperWrapper.classList.add('grid-container');
    swiper2Destroy();
  } else {
    swiper2Init();
  }
});

window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= mediaQuerySize) {
    swiperWrapper.classList.remove('grid-container');
    swiper2Init();
  } else {
    swiperWrapper.classList.add('grid-container');
    swiper2Destroy();
  }
});

// swiper features

let swiperF = null;
const swiperFWrapper = document.querySelector('.features__swiper-wrapper');

function swiperFInit() {
  if (!swiperF) {
    swiperF = new Swiper('.features__swiper-features', {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.features__swiper-pagination',
        type: 'fraction',
        renderFraction: function(currentClass, totalClass) {
          return '0<span class="'
          + currentClass
          + '"></span>'
          + ' <span class="no-active-font"> / </span> '
          + '<span class="no-active-font">0<span class="'
          + totalClass
          + '"></span></span>';
        },
      },
      navigation: {
        nextEl: '.features__swiper-button-next',
        prevEl: '.features__swiper-button-prev',
      },
      autoHeight: true,
    });
  }
}

function swiperFDestroy() {
  if (swiperF) {
    swiperF.destroy();
    swiperF = null;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= mediaQuerySize) {
    swiperFWrapper.classList.add('grid-container');
    swiperFDestroy();
  } else {
    swiperFInit();
  }
});

window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth >= mediaQuerySize) {
    swiperFWrapper.classList.add('grid-container');
    swiperFDestroy();
  } else {
    swiperFInit();
  }
});

// тут слайдер swiper3 для перелистування конструкції technology

let swiper3 = null;

function swiper3Init() {
  if (!swiper3) {
    swiper3 = new Swiper('.technology__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      freeMode: true,
    });
  }
}

function swiper3Destroy() {
  if (swiper3) {
    swiper3.destroy();
    swiper3 = null;
  }
}

window.addEventListener('resize', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= mediaQuerySizeDesctop) {
    swiper3Init();
  } else {
    swiper3Destroy();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const windowWidth = window.innerWidth;

  if (windowWidth <= mediaQuerySizeDesctop) {
    swiper3Init();
  } else {
    swiper3Destroy();
  }
});

// управління відео-програвачем

const playpause = document.getElementById('playpause');
const video = document.getElementById('myvideo');
const videoButton = document.querySelector('.video__button');

video.addEventListener('ended', function() {
  video.pause();
  playpause.innerHTML = 'Play';
});

video.addEventListener('play', function() {
  playpause.innerHTML = 'Pause';
  videoButton.classList.add('video__button--hidden');
  videoButton.classList.remove('video__button--visible');
});

video.addEventListener('pause', function() {
  playpause.innerHTML = 'Play';
  videoButton.classList.remove('video__button--hidden');
  videoButton.classList.add('video__button--visible');
});

videoButton.onmouseover = logMouseOver;
videoButton.onmouseout = logMouseOut;

function logMouseOver() {
  if (videoButton.innerHTML === 'Pause') {
    videoButton.style.opacity = '1';
  }
}

function logMouseOut() {
  if (videoButton.innerHTML === 'Pause') {
    videoButton.style.opacity = '0';
  }
}

video.addEventListener('click', function() {
  if (video.paused) {
    video.play();
    playpause.innerHTML = 'Pause';
  } else {
    video.pause();
    playpause.innerHTML = 'Play';
  }
});

document
  .querySelector('.video__controls')
  .addEventListener('click', function() {
    if (video.paused) {
      video.play();
      playpause.innerHTML = 'Pause';
    } else {
      video.pause();
      playpause.innerHTML = 'Play';
    }
  });

// опис деталей

const detailButton1 = document.querySelector('.detail1');
const detailDescription1 = document.querySelector('.detail1__description');

const detailButton2 = document.querySelector('.detail2');
const detailDescription2 = document.querySelector('.detail2__description');

detailButton1.addEventListener('click', function() {
  if (detailDescription1
    .classList
    .contains('detail1__description--display-none')) {
    detailDescription1.classList.add('detail1__description--display-flex');
    detailDescription1.classList.remove('detail1__description--display-none');
  } else {
    detailDescription1.classList.remove('detail1__description--display-flex');
    detailDescription1.classList.add('detail1__description--display-none');
  }
});

detailButton2.addEventListener('click', function() {
  if (detailDescription2
    .classList
    .contains('detail2__description--display-none')) {
    detailDescription2.classList.add('detail2__description--display-flex');
    detailDescription2.classList.remove('detail2__description--display-none');
  } else {
    detailDescription2.classList.remove('detail2__description--display-flex');
    detailDescription2.classList.add('detail2__description--display-none');
  }
});
