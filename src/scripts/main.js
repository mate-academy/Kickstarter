'use strict';

const menu = document.querySelector('.burger-menu');
const btn = menu.querySelector('.burger-menu__nav-tgl');
btn.addEventListener('click', evt => {
	menu.classList.toggle('active');
})

const video = document.querySelector('.video-section__item'),
      juise = document.querySelector('.video-section__red-juice'),
      playBtn = document.getElementById('play-pause');

function tagglePlayPause() {
  if(video.paused) {
    playBtn.className = 'pause';
    video.play();
  } 
  else {
    playBtn.className = 'play';
    video.pause();
  }
}

playBtn.onclick = function() {
  tagglePlayPause();
}

let slider = tns({
  container: '.about-slider',
  items: 1,
  responsive: {
    650: {
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    700: {
      gutter: 30
    },
    900: {
      items: 3
    }
  }
});


/* $(
  '<div class="product-quantity-nav">\n'
  + '<div class="product-quantity-button product-quantity-down">-</div>\n'npm 
    + '<div class="product-quantity-button product-quantity-up">+</div>\n'
    + '</div>').insertAfter('.product-quantity input');

$('.product-quantity').each(
  function() {
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
  }); */
