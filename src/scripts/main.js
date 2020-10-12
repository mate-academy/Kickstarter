'use strict';

const menu = document.querySelector('.burger-menu');
const btn = menu.querySelector('.burger-menu__nav-tgl');
const body = document.querySelector('body');
const bodyHidden = document.querySelector('body.hudden');
const nav = document.querySelector('.burger-menu__nav');

btn.addEventListener('click', evt => {
  menu.classList.toggle('active');
  body.classList.toggle('hidden');
  bodyHidden.classList.toggle('active');
});

nav.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('hidden');
});

const video = document.querySelector('.video-section__item');
const playBtn = document.getElementById('play-pause');

function tagglePlayPause() {
  if (video.paused) {
    playBtn.className = 'pause';
    video.play();
  } else {
    playBtn.className = 'play';
    video.pause();
  }
}

playBtn.onclick = function() {
  tagglePlayPause();
};

// eslint-disable-next-line no-undef
const aboutSlider = tns({
  container: '.about-slider',
  items: 1,
  responsive: {
    640: {
      edgePadding: 20,
      gutter: 20,
      items: 2,
    },
    700: {
      gutter: 30,
    },
    900: {
      items: 3,
    },
  },
});

aboutSlider();

// eslint-disable-next-line no-undef
$(
  '<div class="product-quantity-nav">\n'
  + '<div class="product-quantity-button product-quantity-down">-</div>\n'
    + '<div class="product-quantity-button product-quantity-up">+</div>\n'
    + '</div>').insertAfter('.product-quantity input');

// eslint-disable-next-line no-undef
$('.product-quantity').each(
  function() {
    // eslint-disable-next-line no-undef
    const spinner = $(this);
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
