'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const slider1 = document.querySelector('.testimonials');
const list1 = slider1.querySelector('.testimonials__content');
const prev1 = slider1.querySelector('.testimonials__arrow--back');
const next1 = slider1.querySelector('.testimonials__arrow--fore');
const testimonials = slider1.querySelector('.testimonials__counter');
const count1 = list1.children.length;
let currentIndex1 = 0;

function move1() {
  currentIndex1 = (currentIndex1 + 1 + count1) % count1;
  testimonials.textContent = currentIndex1 + 1;
  list1.style.transform = `translateX(${-currentIndex1 * 100}%)`;
}

next1.addEventListener('click', function() {
  move1(currentIndex1 + 1);
});

prev1.addEventListener('click', function() {
  move1(currentIndex1 - 1);
});

const slider = document.querySelector('.features__wrapper');
const list = slider.querySelector('.features__content');
const prev = slider.querySelector('.features__arrow--back');
const next = slider.querySelector('.features__arrow--fore');
const features = slider.querySelector('.features__counter');
const count = list.children.length;
let currentIndex = 0;

function move() {
  currentIndex = (currentIndex + 1 + count) % count;
  features.textContent = currentIndex + 1;
  list.style.transform = `translateX(${-currentIndex * 100}%)`;
}

next.addEventListener('click', function() {
  move(currentIndex + 1);
});

prev.addEventListener('click', function() {
  move(currentIndex - 1);
});

window.onscroll = function() {
  myFunction();
};

// Get the navbar
const navbar = document.getElementById('desktop');

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its
// scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

const videoimage = document.querySelector('.video__image');
const playButton = document.querySelector('.video__play');
const video = document.querySelector('.video__mp4');

playButton.addEventListener('click', () => {
  video.classList.remove('video__mp4--hidden');
  playButton.classList.remove('video__play');
  videoimage.classList.add('video__image--hidden');
});

const form = document.getElementById('myForm');

form.addEventListener('submit', function handleSubmit() {
  // event.preventDefault();

  // 👇️ Send data to server here

  // 👇️ Reset form here
  form.reset();
});
