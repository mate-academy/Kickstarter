'use strict';

const header = document.querySelector('.header')
const navMenu = header.querySelector('.nav')
const burger = header.querySelector('.burger')
const navMenuLinks = navMenu.querySelectorAll('.nav__link')
const headerButton = header.querySelector('.button--header')

function menuToggle(burger,navMenu,headerButton) {
  burger.classList.toggle('burger--active')
  navMenu.classList.toggle('nav--active')
  headerButton.classList.toggle('button--active')


  if(navMenu.classList.contains('nav--active')) {
    console.log('a')
    document.body.style.overflow = 'hidden';
  }else {
    document.body.style.overflow = '';
  }
}

function menuActions(burger,navMenu,headerButton) {
  burger.addEventListener('click', () => menuToggle(burger,navMenu,headerButton))
}

function closeMenuOnLinkClick(navMenuLinks,burger,navMenu,headerButton) {
  for (let item of navMenuLinks) {
    item.addEventListener('click',()=> menuToggle(burger,navMenu,headerButton))
  }
}

document.addEventListener('DOMContentLoaded',() => {
  menuActions(burger,navMenu,headerButton);
  closeMenuOnLinkClick(navMenuLinks,burger,navMenu,headerButton)
})
