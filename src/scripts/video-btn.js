'use strict';

document.querySelector('.video__button').onclick = () => {
  document.querySelector('.video__screen').play();
  document.querySelector('.video__button').style.display = 'none';
};
