document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuOpen');
  const menuClose = document.getElementById('menuClose');
  const dropmenu = document.getElementById('dropmenu');

  // Otwieranie menu
  if (menuOpen) {
    menuToggle.addEventListener('click', function () {
      dropmenu.classList.add('active');
      document.body.style.overflow = 'hidden'; // Zablokuj przewijanie strony
    });
  }

  // Zamykanie menu
  if (menuClose) {
    menuClose.addEventListener('click', function () {
      dropmenu.classList.remove('active');
      document.body.style.overflow = ''; // Odblokuj przewijanie strony
    });
  }

  // Zamykanie menu po kliknięciu na link
  const menuLinks = dropmenu.querySelectorAll('a');
  menuLinks.forEach((link) => {
    link.addEventListener('click', function () {
      dropmenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Zamykanie menu po kliknięciu poza nim
  dropmenu.addEventListener('click', function (e) {
    if (e.target === dropmenu) {
      dropmenu.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});
