'use strict';
'use strict';

document.getElementById('open').addEventListener('click', () => {
  document.getElementById('menu').style.transform = 'translateX(0)';
  document.body.style.overflow = 'hidden';
  document.getElementById('arrowUp').style.display = 'none';
});

function closeMenu() {
  document.getElementById('menu').style.transform = 'translateX(200%)';
  document.body.style.overflow = '';
}

document.getElementById('close').addEventListener('click', closeMenu);
document.getElementById('ourStory').addEventListener('click', closeMenu);
document.getElementById('about').addEventListener('click', closeMenu);
document.getElementById('feature').addEventListener('click', closeMenu);
document.getElementById('getInTouch').addEventListener('click', closeMenu);

const en = document.querySelectorAll('.menu__language--EN');
const ua = document.querySelectorAll('.menu__language--UA');
const en1 = document.getElementById('EN1');
const en2 = document.getElementById('EN2');
const ua1 = document.getElementById('UA1');
const ua2 = document.getElementById('UA2');

en.forEach(english => {
  english.classList.add('activeLang');

  english.addEventListener('click', () => {
    en.forEach(eng => {
      eng.classList.toggle('activeLang', eng === english);
    });

    if (en1.classList.contains('activeLang')) {
      en2.classList.add('activeLang');
    }

    if (en2.classList.contains('activeLang')) {
      en1.classList.add('activeLang');
    }

    ua.forEach(ukr => {
      ukr.classList.remove('activeLang');
    });
  });
});

ua.forEach(ukr => {
  ukr.addEventListener('click', () => {
    ua.forEach(uk => {
      uk.classList.toggle('activeLang', uk === ukr);
    });

    if (ua1.classList.contains('activeLang')) {
      ua2.classList.add('activeLang');
    }

    if (ua2.classList.contains('activeLang')) {
      ua1.classList.add('activeLang');
    }

    en.forEach(eng => {
      eng.classList.remove('activeLang');
    });
  });
});

const form = document.getElementById('form');
const email = document.getElementById('email');
const message = document.getElementById('message');

email.addEventListener('input', () => {
  if (!email.validity.valid) {
    email.style.borderColor = '#eb5757';
  } else {
    email.style.borderColor = '';
  }
});

message.addEventListener('input', () => {
  if (!message.validity.valid) {
    message.style.borderColor = '#eb5757';
  } else {
    message.style.borderColor = '';
  }
});

form.addEventListener('submit', (event) => {
  if (!email.validity.valid || !message.validity.valid) {
    event.preventDefault();
  }

  event.preventDefault();
  email.value = '';
  message.value = '';
});

const scrollToTopButton = document.getElementById('arrowUp');

window.addEventListener('scroll', () => {
  if (window.scrollY > 150) {
    scrollToTopButton.style.opacity = '1';
  } else {
    scrollToTopButton.style.opacity = '0';
  }
});
