/* Change checked active menu-link */
const menuLink = [...document.querySelectorAll('.menu__link')];

menuLink.map(a => a.addEventListener('click', function() {
  menuLink.map(b => b.classList.remove('menu__link--is-active'));
  a.classList.add('menu__link--is-active');
}));
