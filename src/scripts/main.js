// 'use strict';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

function addZero(num) {
  return (num > 9) ? num : '0' + num;
}

// addZero(1);

// init Swiper:
// eslint-disable-next-line no-new
new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  grabCursor: true,
  // указывает с какого слайда начинать
  // initialSlide: 3,
  // позволяет перематывать слайды
  // с последнего сразу на 1й
  rewind: true,

  pagination: {
    el: '.swiper-pagination',
    // el: '.test',
    modifierClass: 'swiper-pagination-pag ',
    // el: '.pag',
    currentClass: 'start',
    totalClass: 'end',
    type: 'fraction',
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,

  },

  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    nextEl: '.test-next',
    prevEl: '.test-prev',
  },

});

// const swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--scroll-remove');
  } else {
    document.body.classList.remove('page__body--scroll-remove');
  }
});

// const navActive = document.querySelector('.switchers__switch--active');
// const switchers = document.querySelectorAll('.switchers__switch');

// switchers.forEach(item => {
//   item.addEventListener('click', () => {
//     // console.log("object");
//     if (item.classList.contains('.switchers__switch--active')) {
//       item.classList.remove('switchers__switch--active');
//     } else {
//       item.classList.add('switchers__switch--active');
//     }
//   });
// });

// switchers.forEach(item => {
//   item.addEventListener('click', (target) => {
//     // console.log("object");
//     // console.log(target);
//     if (target.classList.contains('switchers__switch--active')) {
//       target.classList.toggle('switchers__switch--active');
//     }
//   });
// });

// swiper попытки
// const swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'fraction',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

// alert(document.querySelector('.slider__list').children.length);
