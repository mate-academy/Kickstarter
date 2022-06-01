'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const slider = document.querySelector('.features__wrapper');
const list = slider.querySelector('.features__content');
const prev = slider.querySelector('.features__arrow--back');
const next = slider.querySelector('.features__arrow--fore');
const count = list.children.length;
let currentIndex = 0;

function move() {
  currentIndex = (currentIndex + 1 + count) % count;

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
