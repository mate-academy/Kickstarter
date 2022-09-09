'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('#form').addEventListener('submit', e => {
  e.preventDefault();

  const inputs = document.querySelectorAll('.form__field');

  inputs.forEach(input => {
    input.value = '';
  });

  window.location.replace('#');
});

function createSlider(slider) {
  const list = document.querySelector(slider);
  const listLength = list.children.length;
  const prevBtn = document.querySelector('.feature__arrow--left');
  const nextBtn = document.querySelector('.feature__arrow--right');
  const positionSpan = document.querySelector('.feature__current-position');

  let currentPosition = 0;

  const moveTo = position => {
    currentPosition = position;

    if (currentPosition > listLength - 1) {
      currentPosition = 0;
    } else if (currentPosition < 0) {
      currentPosition = listLength - 1;
    }

    list.style.transform = `translateX(-${currentPosition * 100}%)`;
    positionSpan.textContent = `0${currentPosition + 1}`;
  };

  nextBtn.addEventListener('click', () => {
    moveTo(currentPosition + 1);
  });

  prevBtn.addEventListener('click', () => {
    moveTo(currentPosition - 1);
  });

  moveTo(0);
}

createSlider('.features__slides');
