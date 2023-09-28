'use strict';

const isMobile = {
  Android: () => {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: () => {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: () => {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: () => {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: () => {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: () => {
    return (
      isMobile.Android()
      || isMobile.BlackBerry()
      || isMobile.iOS()
      || isMobile.Opera()
      || isMobile.Windows()
    );
  },
};

const menuOpener = document.querySelector('.top-action__menu-opener');
const menuCloser = document.querySelector('.top-action__menu-closer');
const body = document.querySelector('.page__body');
const menuLinks = document.querySelectorAll('.navigation__link');
const mainMenu = document.querySelector('.navigation');
const scrolWidth = window.innerWidth - document.body.clientWidth;

const setTitleHeight = () => {
  const benefitsTitle = document.querySelectorAll('.benefits__title');
  let maxTitleHeight = benefitsTitle[0].offsetHeight;

  for (let i = 1; i < benefitsTitle.length; i++) {
    if (benefitsTitle[i].offsetHeight > maxTitleHeight) {
      maxTitleHeight = benefitsTitle[i].offsetHeight;
    }
  }

  benefitsTitle.forEach(title => {
    title.style.height = maxTitleHeight + 'px';
  });
};

setTitleHeight();

if (menuOpener) {
  menuOpener.addEventListener('click', (e) => {
    menuOpener.classList.toggle('_active');
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  menuCloser.addEventListener('click', (e) => {
    body.classList.toggle('_lock');
    mainMenu.classList.toggle('_open');

    if (!isMobile.any()) {
      if (body.classList.contains('_lock')) {
        body.style.paddingRight = scrolWidth + 'px';
      } else {
        body.style.paddingRight = 0;
      }
    }
  });
}

if (menuCloser) {
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', (e) => {
      body.classList.toggle('_lock');
      mainMenu.classList.toggle('_open');

      if (!isMobile.any()) {
        if (body.classList.contains('_lock')) {
          setTimeout(() => {
            body.style.paddingRight = scrolWidth + 'px';
          }, 300);
        } else {
          setTimeout(() => {
            body.style.paddingRight = 0;
          }, 300);
        }
      }
    });
  }
}

const form = document.querySelector('.questions__form');
const formButton = document.querySelector('.questions__button');
const clientEmail = document.querySelector('.questions__input');
const clientMessage = document.querySelector('.questions__textarea');

formButton.addEventListener('click', () => {
  if (!clientEmail.checkValidity()) {
    clientEmail.classList.add('_error');
  } else {
    clientEmail.classList.remove('_error');
  }

  if (!clientMessage.checkValidity()) {
    clientMessage.classList.add('_error');
  } else {
    clientMessage.classList.remove('_error');
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
  location.reload();
});

$(document).ready(() => {
  $('.owl-carousel').owlCarousel({
    // Настройки слайдера
    loop: false, // Зациклить слайды
    margin: 16, // Отступ между слайдами
    nav: true, // Показать навигацию (кнопки "Вперед" и "Назад")
    dots: false,
    items: 1,
    autoWidth: false,
    onInitialized: updateSlideInfo,
    onTranslated: updateSlideInfo,
  });

  function updateSlideInfo(event) {
    const currentItem = event.item.index + 1;
    const totalItems = event.item.count;

    // Форматирование числа текущего слайда
    const formattedCurrentItem = currentItem < 10 ? '0' + currentItem : currentItem;
    // Форматирование общего количества слайдов
    const formattedTotalItems = totalItems < 10 ? '0' + totalItems : totalItems;

    $('.features__current-slide').text(formattedCurrentItem);
    $('.features__total-slides').text(formattedTotalItems);
  }
});
