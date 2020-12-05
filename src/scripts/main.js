'use strict';

const menu = document.querySelector('.navbar');
const toggler = document.querySelector('.menu__toggler');
const buy = document.querySelector('.menu__buy');

toggler.onclick = function toggleSidebar() {
  toggler.classList.toggle('menu__toggler--active');
  buy.classList.toggle('menu__buy--active');
  menu.classList.toggle('navbar--open');
};
