/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const menuButton = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const body = document.body;
const page = document.documentElement;
const languageButtons = document.querySelectorAll('.select-language__button');
// const dots = document.getElementsByClassName('dot');

// document.querySelector('.dots').style.display = 'none';

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('menu-button__burger-menu--close')) {
    closeMenu();
  } else {
    openMenu();
  }
});

function getScrollbarWidth() {
  const outer = document.createElement('div');

  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);

  const inner = document.createElement('div');

  outer.appendChild(inner);

  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;
}

function openMenu() {
  menuButton.classList.add('menu-button__burger-menu--close');
  menu.classList.add('menu--open');
  body.style.overflowY = 'hidden';
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menuButton.classList.remove('menu-button__burger-menu--close');
  menu.classList.remove('menu--open');
  body.style.overflowY = 'auto';
  page.style.paddingRight = 0;
}

document.addEventListener('click', function (e) {
  const target = e.target;

  // Check if the clicked element is an anchor tag with a hash in the href
  if (target.tagName === 'A' && target.href.includes('#')) {
    closeMenu();

    e.preventDefault(); // Prevent the default anchor click behavior

    // Get the target element by the href attribute
    const targetId = target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Scroll to the target element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }

  if (target.classList.contains('select-language__button')) {
    if (!target.classList.contains('text-select-language--active')) {
      languageButtons.forEach((button) => {
        button.classList.remove('text-select-language--active');
      });
      target.classList.add('text-select-language--active');
    }
  }
});

/* if (window.innerWidth < 640) {
  const swiper = new Swiper('.swiper-benefits', {
    loop: true,

    autoplay: {
      delay: 5000,
    },
  });
}

if (window.innerWidth < 1280) {
  const swiper = new Swiper('.swiper-features', {
    loop: true,

    autoplay: {
      delay: 5000,
    },
    navigation: {
      prevEl: '.slider__arrow-left-wrapper',
      nextEl: '.slider__arrow-right-wrapper',
    },
    pagination: {
      el: '.features__slider-pagination',
      type: 'fraction',
      currentClass: 'pagination-current',
      totalClass: 'pagination-total',
    },
  });
} */


const slides3 = document.querySelectorAll('.mySlides3');
 const slides2 = document.querySelectorAll('.my-slides2');
const futureItems = document.querySelectorAll('.feature__items');

let slideIndex2 = 1;

function showSlides2(n) {
  // const dots2 = document.getElementsByClassName('dot2');



  if (n > slides2.length) {
    slideIndex2 = 1;
  }

  if (n < 1) {
    slideIndex2 = slides2.length;
  }


    for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.display = 'none';
//futureItems[i].style.display = 'none';
    }


  /* for (i = 0; i < dots2.length; i++) {
      dots2[i].className = dots2[i].className.replace(' active', '');
    } */
  // slides2[slideIndex2 - 1].style.display = 'none';


  // dots2[slideIndex - 1].className += ' active';
  slides2[slideIndex2 - 1].style.display = 'flex';
//futureItems[slideIndex2 - 1].style.display = 'flex';

  // slides2[slideIndex2 - 1].style.height = '250px';

  setTimeout(showSlides2, 5000);
   if (window.innerWidth > 1280) {
     clearTimeout();

     for (let i = 0; i < slides2.length; i++) {
       slides2[i].style.display = 'flex';
     }
   }

}

function plusSlides(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide(n) {
  showSlides2((slideIndex2 = n));
}

let slideIndex3 = 0;
let maxHeight = 0;
let maxHeight2 = 0;
const timeInterval = 3000;
const dots = document.getElementsByClassName('dot');
const slides = document.querySelectorAll('.my-slides');
let slideIndex = 0;

function showSlides() {

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].style.height = '250px';

  dots[slideIndex - 1].className += ' active';

setTimeout(showSlides, 3000);

  if (window.innerWidth >= 744) {
    clearTimeout();

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'block';
    }
  }
}

function showSlides3() {
  for (let i = 0; i < slides3.length; i++) {
    slides3[i].style.opacity = '.9';
    slides3[1].style.opacity = '1';
  }
  slideIndex3++;

  if (slideIndex3 > slides3.length) {
    slideIndex3 = 1;
  }

  if (slideIndex3 - 1 === 0) {
    slides3[slideIndex3 - 1].style.opacity = '.9';
  }

  if (slideIndex3 - 1 === 1) {
    slides3[slideIndex3 - 1].style.opacity = '.5';
  }

  if (slideIndex3 - 1 === 2) {
    slides3[slideIndex3 - 1].style.opacity = '0';
  }

  setTimeout(showSlides3, 2000);
}

// dots.style.display = 'block';
// document.querySelector('.dots').style.display = 'flex';

/* slides.forEach((slide) => {
  maxHeight = Math.max(maxHeight, slide.offsetHeight);
});

slides.forEach((slide) => {
  slide.style.height = maxHeight + 'px';
});

slides2.forEach((slide) => {
  maxHeight2 = Math.max(maxHeight2, slide.offsetHeight);
});

slides2.forEach((slide) => {
  slide.style.height = maxHeight2 + 'px';
}); */



if (window.innerWidth < 744) {

   showSlides();
 }
if (window.innerWidth < 1280) {
   for (let i = 0; i < slides2.length; i++) {
     slides2[i].style.display = 'none';
     // futureItems[i].style.display = 'none';
   }
  showSlides2(slideIndex2);
}
showSlides();
showSlides2();
showSlides3();
  if (window.innerWidth >= 1280) {
    for (let i = 0; i < slides2.length; i++) {
      slides2[i].style.display = 'grid';
     // futureItems[i].style.display = 'grid';
    }
  }



