'use strict';
'use strict';

let swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('paginationUpdate', function (swiper, paginationEl) {
  const currentEl = paginationEl.querySelector('.swiper-pagination-current');
  const totalEl = paginationEl.querySelector('.swiper-pagination-total');

  if (currentEl && totalEl) {
    currentEl.textContent = String(currentEl.textContent).padStart(2, '0');
    totalEl.textContent = String(totalEl.textContent).padStart(2, '0');
  }
});

//..............................................

const optionsLanguage = document.querySelector('.options__language');

optionsLanguage.addEventListener('click', () => {
  const enLang = optionsLanguage.querySelector('.en');
  const uaLang = optionsLanguage.querySelector('.ua');

  // Переключаем активный класс
  enLang.classList.toggle('active');
  uaLang.classList.toggle('active');
});
