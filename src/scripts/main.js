'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.querySelector('form');
const inputs = document.querySelectorAll('.questions__field');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});

function newSlider(slider) {
  const btnPrev = slider.querySelector('.button--prev');
  const btnNext = slider.querySelector('.button--next');
  const list = slider.querySelector('.list');
  const counter = slider.querySelector('.counter');

  const slideCount = list.childElementCount;

  let currentPosition = 0;

  function moveTo(targetPosition) {
    if (targetPosition < 0) {
      currentPosition = slideCount - 1;
    } else if (targetPosition > slideCount - 1) {
      currentPosition = 0;
    } else {
      currentPosition = targetPosition;
    }

    counter.textContent = currentPosition + 1;

    list.style.transform = `translateX(${-currentPosition * 100}%)`;
  }

  btnNext.addEventListener('click', () => {
    moveTo(currentPosition + 1);
  });

  btnPrev.addEventListener('click', () => {
    moveTo(currentPosition - 1);
  });

  moveTo(0);
}

const slider1 = document.getElementById('slider1');

newSlider(slider1, true);

// function backToTop() {
//   let button1 = $('.back-to-top');

//   $(window).on('scrollTop', () => {
//     if ($(this).scrollTop() >= 50) {
//       button1.fadeIn();
//     } else {
//       button1.fadeOut();
//     }
//   });

//   button1.on('click', (e) => {
//     e.preventDefault();
//     $('html').animate({scrollTop: 0}, 1000);
//   })
// }

// backToTop();
