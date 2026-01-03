'use strict';

const languages = document.querySelectorAll('.header__link');

languages.forEach(language => {
  language.addEventListener('click', (event) => {
    event.preventDefault();

    languages.forEach(l => l.classList.remove('header__link--active'));

   
    language.classList.add('header__link--active');
  });
});


const sliders = document.querySelectorAll('.features__section');
const next = document.querySelector('.swipper-nav__next');
const prev = document.querySelector('.swipper-nav__prev');
const currentPage = document.querySelector('.swipper-nav__current-page');
let currentSlider = 0;

function updateSlider() {
  sliders.forEach(slider => {
    slider.classList.remove('features__section--active', 'grid--2-5-tab', 'grid--1-5-mob');
  });

  sliders[currentSlider].classList.add('features__section--active', 'grid--2-5-tab', 'grid--1-5-mob');
  currentPage.textContent = currentSlider + 1;
}

next.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlider < sliders.length - 1) {
    currentSlider++;
    updateSlider();
  }
});

prev.addEventListener('click', (event) => {
  event.preventDefault();

  if (currentSlider > 0) {
    currentSlider--;
    updateSlider();
  }
});

updateSlider();


const openAside = document.querySelector('.header__burger');
const closeAside = document.querySelector('.aside__close-button');
const aside = document.querySelector('.aside');
const page = document.querySelector('.page')
const menuItem = document.querySelectorAll('.aside__nav-item')


openAside.addEventListener('click', ()=>{
    aside.classList.add('aside--open');
    page.classList.add('page--no-scroll')
})

closeAside.addEventListener('click', ()=>{
    aside.classList.remove('aside--open');
    page.classList.remove('page--no-scroll')
})

menuItem.forEach(item =>{
    item.addEventListener('click', (event)=>{
        page.classList.remove('page--no-scroll');
        aside.classList.remove('aside--open');
        
    })
})

const elements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate--show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

elements.forEach(el => observer.observe(el));