/* eslint-disable padding-line-between-statements */
/* eslint-disable no-var */
// eslint-disable-next-line no-unused-vars
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/swiper-bundle.min.css';

// eslint-disable-next-line no-new, no-unused-vars
const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination],
  // Navigation arrows
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#header-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  e.target.reset();
}
);

function reveal() {
  var reveals = document.querySelectorAll('І.about-us');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);
