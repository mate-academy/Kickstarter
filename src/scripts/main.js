/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
  cellAlign: 'center',
  contain: true,
  arrowShape: false,
});

const menu = document.querySelector('.navbar');
const toggler = document.querySelector('.menu__toggler');
const buy = document.querySelector('.menu__buy');
const brand = document.querySelector('.menu__brand-link');
const header = document.querySelector('body');

toggler.onclick = function toggleSidebar() {
  toggler.classList.toggle('menu__toggler--active');
  buy.classList.toggle('menu__buy--active');
  menu.classList.toggle('navbar--open');
  brand.classList.toggle('menu__brand-link--open');
  header.classList.toggle('header--open');
};
