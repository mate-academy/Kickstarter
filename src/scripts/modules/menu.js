export const initMenu = () => {
  const menu = document.querySelector('.mobile-menu');
  const openButton = document.querySelector('[data-menu-open]');
  const closeButton = document.querySelector('[data-menu-close]');

  if (!menu || !openButton || !closeButton) {
    return;
  }

  const closeTargets = menu.querySelectorAll('a');

  const setOpen = (isOpen) => {
    menu.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('menu-is-open', isOpen);
    openButton.setAttribute('aria-expanded', String(isOpen));
  };

  openButton.addEventListener('click', () => setOpen(true));

  closeButton.addEventListener('click', () => setOpen(false));

  closeTargets.forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });
};
