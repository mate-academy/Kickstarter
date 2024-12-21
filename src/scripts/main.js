'use strict';

const body = document.querySelector('.body');
const menu = document.querySelector('.menu');
const menuOpenBtn = document.querySelector('.top-bar_burger');
const menuCloseBtn = document.querySelector('.top-bar_menu-close');
const links = document.querySelectorAll('.menu_link');
const form = document.querySelector('.contact_form');
const inputs = document.querySelectorAll('.contact_input');
const slides = document.querySelectorAll('.features_info');
let slideIndex = 0;
const leftControll = document.querySelectorAll('.features_info_slider-things_controlls_left');
const rightControll = document.querySelectorAll('.features_info_slider-things_controlls_right');
const toTopBtn = document.querySelector('.footer_to-top');

const openMenu = () => {
  body.classList.add('body--no-scroll');
  menu.classList.remove('menu--closed');
};

const closeMenu = () => {
  body.classList.remove('body--no-scroll');
  menu.classList.add('menu--closed');
};

const validate = (event) => {
  event.preventDefault();
  inputs.forEach(input => input.value = '');
};

const showSlide = (index) => {
  slides.forEach((slide, i) => {
    slide.classList.toggle('features_info--active', i === index);
  });
};

const nextSlide = () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
};

const prevSlide = () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
};

menuOpenBtn.addEventListener('click', openMenu);
menuCloseBtn.addEventListener('click', closeMenu);
form.addEventListener('submit', validate);
document.addEventListener('DOMContentLoaded', () => showSlide(slideIndex));
toTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
});

rightControll.forEach(button => {
  button.addEventListener('click', nextSlide);
});

leftControll.forEach(button => {
  button.addEventListener('click', prevSlide);
});


links.forEach(link => {
  link.addEventListener('click', closeMenu);
});
