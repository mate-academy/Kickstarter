'use strict';

// Elements: seleciona os blocos que precisam de interacao na pagina.
const header = document.querySelector('.header');
const menu = document.querySelector('.mobile-menu');
const menuButton = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.mobile-menu__link, .mobile-menu__button');
const form = document.querySelector('.form');

// Mobile menu: fecha o menu e atualiza o estado acessivel do botao.
const closeMenu = () => {
  header.classList.remove('header--menu-open');
  menu.classList.remove('mobile-menu--open');
  menuButton.setAttribute('aria-expanded', 'false');
};

// Mobile menu: alterna entre menu aberto e fechado ao clicar no hamburger.
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('mobile-menu--open');

  header.classList.toggle('header--menu-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

// Mobile menu: fecha o menu depois que o usuario escolhe uma secao.
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Form: evita recarregar a pagina e limpa os campos apos o envio.
form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
