'use strict';

const menuButton = document.getElementById('burger-menu');
const menu = document.getElementById('menu');
const body = document.body;
const page = document.documentElement;
const languageButtons = document.querySelectorAll('.select-language__button');

menuButton.addEventListener('click', () => {
  if (menuButton.classList.contains('menu-button__burger-menu--close')) {
    closeMenu()
  } else {
    openMenu()
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

  const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

  outer.parentNode.removeChild(outer);

  return scrollbarWidth;

}

function openMenu() {
  menuButton.classList.add('menu-button__burger-menu--close');
  menu.classList.add('menu--open');
  body.style.overflowY = "hidden";
  page.style.paddingRight = getScrollbarWidth() + 'px';
}

function closeMenu() {
  menuButton.classList.remove('menu-button__burger-menu--close');
  menu.classList.remove('menu--open');
  body.style.overflowY = "auto";
  page.style.paddingRight = 0;
}

document.addEventListener('click', function(e) {
  const target = e.target;

  // Check if the clicked element is an anchor tag with a hash in the href
  if (target.tagName === 'A' && target.href.includes('#')) {
      closeMenu()

      e.preventDefault(); // Prevent the default anchor click behavior

      // Get the target element by the href attribute
      const targetId = target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          // Scroll to the target element smoothly
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  }

  if (target.classList.contains('select-language__button')) {
    if (!target.classList.contains('text-select-language--active')) {
      languageButtons.forEach((btn) => {
        btn.classList.remove('text-select-language--active');
      })
      target.classList.add('text-select-language--active')
    }
  }
});



if (window.innerWidth < 640) {
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
      totalClass: 'pagination-total'
    }
  });
}
