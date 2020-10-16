'use strict';

const menu = document.querySelector('.burger-menu');
const btn = menu.querySelector('.burger-menu__nav-tgl');
const link = document.querySelector('.burger-menu__nav');
const video = document.querySelector('.video-section__item');
const playBtn = document.querySelector('.video-section__play-button');
const body = document.body;

btn.addEventListener('click', evt => {
  menu.classList.toggle('active');
  body.style.overflow = 'hidden';
});

link.addEventListener('click', evt => {
  menu.classList.remove('active');
  body.style.overflow = 'visible';
});

playBtn.onclick = function() {
  video.play();
  playBtn.style.display = 'none';
};

video.onpause = function() {
  playBtn.style.display = 'flex';
};

document.querySelector(
  '<div class="product-quantity-nav">\n'
  + '<div class="product-quantity-button product-quantity-down">-</div>\n'
    + '<div class="product-quantity-button product-quantity-up">+</div>\n'
    + '</div>').insertAfter('.product-quantity input');

// eslint-disable-next-line no-undef
document.querySelector('.product-quantity').each(
  function() {
    // eslint-disable-next-line no-undef
    const spinner = document.querySelector(this);
    const input = spinner.find('input[type="number"]');
    const btnUp = spinner.find('.product-quantity-up');
    const btnDown = spinner.find('.product-quantity-down');
    const min = input.attr('min');
    const max = input.attr('max');

    btnUp.click(function() {
      const oldValue = parseFloat(input.val());
      let newVal = 0;

      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(function() {
      const oldValue = parseFloat(input.val());
      let newVal = 0;

      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });
