'use strict';

document.querySelector('.burger-menu').onclick = () => {
  document.querySelector('.burger-menu__toggler').checked = false;
};

document.querySelector('.video-btn').onclick = () => {
  document.querySelector('.video__clip').play();
  document.querySelector('.video-btn').style.display = 'none';
};

document.querySelector('.video__clip').onpause = () => {
  document.querySelector('.video-btn').style.display = 'block';
};
