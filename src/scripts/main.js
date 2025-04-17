// Об'єкт з перекладами
const translations = {
  en: {
    headerTitle: "Futuristic Wireless Speaker",
    headerDescription: "Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered."
  },
  ua: {
    headerTitle: "Футуристична бездротова колонка",
    headerDescription: "Продуктивність Луни збалансована та плавна на всіх частотах, що робить музику природно приємною і значно більш багатошаровою."
  }
};

// Функція для зміни мови
function changeLanguage(lang) {
  // Оновлюємо текст за допомогою ID
  document.getElementById('header-title').textContent = translations[lang].headerTitle;
  document.getElementById('header-description').textContent = translations[lang].headerDescription;
}

// Оновлення активного класу для всіх блоків
function updateActiveLanguage(lang) {
  // Знаходимо всі елементи з класом .lang
  const langs = document.querySelectorAll('.lang');
  langs.forEach(l => {
    // Видаляємо активний клас з усіх мов
    l.classList.remove('active');
    // Додаємо активний клас для вибраної мови
    if (l.textContent.trim().toLowerCase() === lang) {
      l.classList.add('active');
    }
  });
}

// Обробка події на клік по мові
document.addEventListener('DOMContentLoaded', () => {
  // Для кожного блоку language-switcher
  const languageSwitcherBlocks = document.querySelectorAll('.language-switcher');

  languageSwitcherBlocks.forEach(block => {
    const langs = block.querySelectorAll('.lang');

    langs.forEach(lang => {
      lang.addEventListener('click', () => {
        // Вибір мови (EN / UA)
        const selectedLang = lang.textContent.trim().toLowerCase();

        // Оновлюємо активну мову для всіх блоків
        updateActiveLanguage(selectedLang);

        // Оновлюємо текст на сторінці
        changeLanguage(selectedLang);

        // Зберігаємо вибір мови у console для перевірки
        console.log('Selected language:', selectedLang);
      });
    });
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.mySwiper', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.icon--arrow-next',
      prevEl: '.icon--arrow-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
        return `<span class="${currentClass}"></span> <span class="swiper-pagination-slash">/</span> <span class="${totalClass}"></span>`;
      },
      formatFractionCurrent: function (number) {
        return number < 10 ? '0' + number : number;
      },
      formatFractionTotal: function (number) {
        return number < 10 ? '0' + number : number;
      }
    },
    breakpoints: {
      // Для ПК (1024px і більше)
      1280: {
        slidesPerView: 3,
      },
      }
  });
});

