const aboutUsH = document.querySelector('.about-us__headline');
const technologyH = document.querySelector('.technology__headline');
const aboutUsPctr = document.querySelector('.about-us__pctr');
const technologyPctr = document.querySelector('.technology__pctr');
const featuresSection = document.querySelectorAll('.feature__section');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

/* Put a headline before the picture */

if (window.matchMedia('(max-width: 767px)').matches) {
  aboutUsH.appendChild(aboutUsPctr);
  technologyH.appendChild(technologyPctr);
}

/* Hide features sections on max-width: 1023px */

if (window.matchMedia('(max-width: 1023px)').matches) {
  for (let i = 0; i < featuresSection.length; i++) {
    if (i !== featuresSection.length - 1) {
      featuresSection[i].style.display = 'none';
    }
  }
}

/* Change checked active menu-link */
const menuLink = [...document.querySelectorAll('.menu__link')];

menuLink.map(a => a.addEventListener('click', function() {
  menuLink.map(b => b.classList.remove('menu__link--is-active'));
  a.classList.add('menu__link--is-active');
}));
