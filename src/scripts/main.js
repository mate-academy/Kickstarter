'use strict';
AOS.init({
  duration:1500,
  disable: 'phone'
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const menuOpen = document.querySelector ('.header__menu-open')
const menu = document.querySelector('.header__nav')
const menuClose = document.querySelector ('.menu__top-close')

menuOpen.addEventListener('click', () => {
menu.classList.toggle('header__nav-active')
})

menuClose.addEventListener('click',() => {
  menu.classList.remove('header__nav-active')
})




const mailInput = document.querySelector('.mail');
const messageInput = document.querySelector('.area-message');
const submitBtn = document.querySelector('.questions__btn');

function toggleButtonState() {
  if (mailInput.value.trim() !== '' && messageInput.value.trim() !== '') {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

mailInput.addEventListener('input', toggleButtonState);
messageInput.addEventListener('input', toggleButtonState);







