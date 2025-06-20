const body = document.body;
const burgerToggle = document.getElementById('burgerToggle');
const burgerMenu = document.getElementById('burgerMenu');
const menuLinks = document.querySelectorAll(
  '.burger-menu__link, .burger-menu__buy-button, .header-top__link'
);

export const openMenu = () => {
  burgerMenu.classList.add('burger-menu--active');
  body.classList.add('no-scroll');
  body.dataset.menu = 'open';
};

export const closeMenu = () => {
  burgerMenu.classList.remove('burger-menu--active');
  body.classList.remove('no-scroll');
  delete body.dataset.menu;
};

export const initMenu = () => {
  burgerToggle.addEventListener('click', () => {
    burgerMenu.classList.contains('burger-menu--active') ? closeMenu() : openMenu();
  });

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
};
