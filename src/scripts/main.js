'use strict';

import $ from 'jquery';
import 'slick-carousel';

// SLIDER Benefits

$('.slider-benefits').slick({
  arrows: false,
  dots: false,
  slidesToShow: 1,
  // speed: 500,
  // easing: 'ease',
  // initialSlide: 0,
  // autoplay: false,
  // autoplaySpeed: 3000,
});

// SLIDER Features

$('.slider-features').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  appendArrows: '.arrowsSlides',
  prevArrow: $('.prev-button'),
  nextArrow: $('.next-button'),
});

const $currentSl = $('.slider-features__numSlide');
const $totalSlides = $('.slider-features__totalSlide');

const total = $('.slider-features').slick('getSlick').slideCount;

$totalSlides.text('0' + total);

$('.slider-features')
  .on('afterChange', function(event, slick, currentSlide, nextSlide) {
  // console.log(currentSlide + 1);
    const i = (currentSlide || 0) + 1;

    $currentSl.text('0' + i);
  });

// Button Bac-To-Top
const backtoTop = document.querySelector('.back-top');

window.addEventListener('scroll', function() {
  if (window.scrollY >= 500) {
    backtoTop.style.opacity = '1';
  } else {
    backtoTop.style.opacity = '0';
  }
});

backtoTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

// Unscroll only for Safari
const body = document.body;
const pageMenu = document.querySelector('.page__menu');
const iconMenu = document.querySelector('.icon--menu');

iconMenu.addEventListener('click', () => {
  body.classList.add('unscroll');
});

pageMenu.addEventListener('click', () => {
  body.classList.remove('unscroll');
});
