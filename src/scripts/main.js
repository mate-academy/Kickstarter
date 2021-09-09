'use strict';

const subNavButtons = document.querySelectorAll('.sub-nav__link');

subNavButtons.forEach(button => {
  button.addEventListener('click', function() {
    subNavButtons.forEach(btn =>
      btn.classList.remove('sub-nav__link--is--active'));
    this.classList.add('sub-nav__link--is--active');
  });
});

const video = document.querySelector('.presentation');

video.addEventListener('click', function() {
  this.paused ? this.play() : this.pause();
});
