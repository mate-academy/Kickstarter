/* eslint-disable prefer-const */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  arrowShape: false,
  pageDots: false,
});

const menu = document.querySelector('.navbar');
const toggler = document.querySelector('.menu__toggler');
const buy = document.querySelector('.menu__buy');
const brand = document.querySelector('.menu__brand-link');
const header = document.querySelector('body');
const video = document.querySelector('.announcement__video');
const clicker = document.querySelector('.announcement__video-clicker');

toggler.onclick = function toggleSidebar() {
  toggler.classList.toggle('menu__toggler--active');
  buy.classList.toggle('menu__buy--active');
  menu.classList.toggle('navbar--open');
  brand.classList.toggle('menu__brand-link--open');
  header.classList.toggle('header--open');
};

menu.onclick = function haha() {
  toggler.classList.toggle('menu__toggler--active');
  buy.classList.toggle('menu__buy--active');
  menu.classList.toggle('navbar--open');
  brand.classList.toggle('menu__brand-link--open');
  header.classList.toggle('header--open');
};

clicker.onclick = function toggleVideo() {
  video.classList.toggle('announcement__video--active');
  clicker.classList.toggle('announcement__video-clicker--active');
};

function magnify(imgID, zoom) {
  const img = document.getElementById(imgID);

  const glass = document.createElement('DIV');

  glass.setAttribute('class', 'img-magnifier-glass');

  img.parentElement.insertBefore(glass, img);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = 'no-repeat';
  glass.style.backgroundSize = (img.width * zoom) + 'px ' + (img.height * zoom) + 'px';

  const bw = 3;
  const w = glass.offsetWidth / 2;
  const h = glass.offsetHeight / 2;

  glass.addEventListener('mousemove', moveMagnifier);
  img.addEventListener('mousemove', moveMagnifier);

  glass.addEventListener('touchmove', moveMagnifier);
  img.addEventListener('touchmove', moveMagnifier);

  function moveMagnifier(e) {
    e.preventDefault();

    let pos = getCursorPos(e);
    let x = pos.x;
    let y = pos.y;

    if (x > img.width - (w / zoom)) {
      x = img.width - (w / zoom);
    }

    if (x < w / zoom) {
      x = w / zoom;
    }

    if (y > img.height - (h / zoom)) {
      y = img.height - (h / zoom);
    }

    if (y < h / zoom) {
      y = h / zoom;
    }
    glass.style.left = (x - w) + 'px';
    glass.style.top = (y - h) + 'px';
    glass.style.backgroundPosition = '-' + ((x * zoom) - w + bw) + 'px -' + ((y * zoom) - h + bw) + 'px';
  }

  function getCursorPos(e) {
    let a; let x = 0; let y = 0;

    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;

    return {
      x: x, y: y,
    };
  }
}

magnify('myimage', 3);

let mybutton = document.getElementById('button-scroll');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

mybutton.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
