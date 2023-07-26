/* eslint-disable max-len */
'use strict';

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('my-button');

input1.addEventListener('input', toggleButtonState);
input2.addEventListener('input', toggleButtonState);

function toggleButtonState() {
  if (input1.value.trim() !== '' && input2.value.trim() !== '') {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
}

const languageData = {
  en: {
    title: 'Futuristic Wireless Speaker',
    description: 'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',

    nav1: 'OUR STORY',
    nav2: 'ABOUT US',
    nav3: 'FEATURES',
    nav4: 'GET IN TOUCH',

    secondBlock__tittle1: 'Futuristic Design',
    secondBlock__text1: 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',

    secondBlock__tittle2: 'Tweeter Speaker System',
    secondBlock__text2: 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',

    secondBlock__tittle3: 'Multiroom System',
    secondBlock__text3: 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',

    secondBlock__tittle4: 'Intuitive Lighting System',
    secondBlock__text4: 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.',

    forthBlock__tittle: 'DESIGNED FOR THE FUTURE',
    forthBlock__text: 'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',

    fifthBlock__tittle: 'Luna Eye',
    fifthBlock__text: 'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',

    learn1: 'See more about us',
    learn2: 'See more about us',

    sixthBlock__text: 'It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.',
    sixthBlock__name: 'Garrett Martin',
    sixthBlock__prof: 'Creative Director',

    seventhBlock__tittle: 'FEATURES',
    seventhBlock__tittleList1: 'Connectivity',
    seventhBlock__text1_1: 'Hands Free Wireless Audio',
    seventhBlock__text1_2: 'Bluetooth 4.0 LE',
    seventhBlock__text1_3: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
    seventhBlock__text1_4: 'Smart Multiroom System Set Up',
    seventhBlock__text1_5: 'Party Mode with 6.0 Units and above',
    seventhBlock__text1_6: 'MESHNET Multi Speaker Network',

    seventhBlock__tittleList2: 'Sound & Music',
    seventhBlock__text2_1: 'Feel-in-chest Base Power',
    seventhBlock__text2_2: 'Lossless Digital Audio Transmission',
    seventhBlock__text2_3: 'Easy & Stable Stereo Pairing',
    seventhBlock__text2_4: 'Crisp and Clear High Frequency',
    seventhBlock__text2_5: 'Streams from Cloud Music and Local Library',
    seventhBlock__text2_6: 'Auto Music from Last Song Stopped',

    seventhBlock__tittleList3: 'App Features',
    seventhBlock__text3_1: 'Customize Music Schedule',
    seventhBlock__text3_2: 'Wake Up with Favorite Songs',
    seventhBlock__text3_3: 'Home Detection Auto Wake Up',
    seventhBlock__text3_4: 'Color Wheel',

    eightBlock_tittle: 'DO YOU HAVE ANY QUESTIONS?',
  },
  ua: {
    title: 'Футуристична бездротова колонка',
    description: 'Робота Luna збалансована і плавна у всіх частотних діапазонах, що робить музику природно приємною і помітно багатошаровою.',
    nav1: 'НАША ІСТОРІЯ',
    nav2: 'ПРО НАС',
    nav3: 'ФУНКЦІЇ',
    nav4: 'НА ЗВЯЗКУ',

    secondBlock__tittle1: 'Футуристичний дизайн',
    secondBlock__text1: 'Щоб надати Luna справді бездоганного вигляду, ми спеціально вибрали авіаційний алюміній як його матеріал і використали технологію тривимірного згинання на розтяжку та високоточну техніку холодного кування.',

    secondBlock__tittle2: 'Акустична система твітера',
    secondBlock__text2: 'Щоб забезпечити більш багатошаровий звук, кращий, ніж єдиний повнодіапазонний динамік, наша команда оснастила Luna ще одним твітерним динаміком, який відповідає за високочастотний звук незалежно.',

    secondBlock__tittle3: 'Система Multiroom',
    secondBlock__text3: 'Luna нативно сумісна з домашнім Wi-Fi. Встановіть кілька динаміків у різних кімнатах, щоб розширити музичний досвід у всьому будинку.',

    secondBlock__tittle4: 'Інтуїтивно зрозуміла система освітлення',
    secondBlock__text4: 'Інтуїтивно зрозумілий інтерфейс користувача дозволяє регулювати відтінок і насиченість кольорів для освітлення, яке відповідає будь-якому настрою та ситуації.',

    forthBlock__tittle: 'Розроблений для майбутнього',
    forthBlock__text: 'У 2014 році група промислових дизайнерів, ветеранів техніки та експертів з акустики створила crazybaby. Це група пристрасних людей, які настільки божевільні, щоб думати, що можуть кинути виклик індустрії за допомогою руйнівних аудіопродуктів.',

    fifthBlock__tittle: 'Luna Eye',
    fifthBlock__text: 'Luna Eye — суть цієї інноваційної системи освітлення та аудіосистеми. Він складається з незалежного високочастотного динаміка, світловодного компонента, купола та кільцевого орнаменту.',

    learn1: 'Дізнайтеся більше про нас',
    learn2: 'Дізнайтеся більше про нас',

    sixthBlock__text: 'Мене, чесно кажучи, дуже здивувало таке чудове звучання, яке виходить із цього маленького компактного пристрою. А завдяки щітковій алюмінієвій поверхні це так знайомо. Як мій iPhone.',
    sixthBlock__name: 'Гаррет Мартін',
    sixthBlock__prof: 'Креативний директор',

    seventhBlock__tittle: 'ФУНКЦІЇ',
    seventhBlock__tittleList1: 'Підключення',
    seventhBlock__text1_1: 'Hands Free Wireless Audio',
    seventhBlock__text1_2: 'Bluetooth 4.0 LE',
    seventhBlock__text1_3: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
    seventhBlock__text1_4: 'Налаштування системи Smart Multiroom',
    seventhBlock__text1_5: 'Режим вечірки з одиницями 6.0 і вище',
    seventhBlock__text1_6: 'Мережа з кількома динаміками MESHNET',

    seventhBlock__tittleList2: 'Звук і музика',
    seventhBlock__text2_1: 'Відчуття звуку в грудях',
    seventhBlock__text2_2: 'Передача цифрового звуку без втрат',
    seventhBlock__text2_3: 'Легке та стабільне стереосполучення',
    seventhBlock__text2_4: 'Чіткі та чисті високі частоти',
    seventhBlock__text2_5: 'Потоки з Cloud Music і локальної бібліотеки',
    seventhBlock__text2_6: 'Автоматична зупинка музики з останньої пісні',

    seventhBlock__tittleList3: 'Функції програми',
    seventhBlock__text3_1: 'Налаштування музичного розкладу',
    seventhBlock__text3_2: 'Прокидайтеся з улюбленими піснями',
    seventhBlock__text3_3: 'Відслідковування пробудження',
    seventhBlock__text3_4: 'Кругова підсвітка',

    eightBlock_tittle: 'У ВАС Є ЯКІ-НЕБУДЬ ПИТАННЯ?',
  },
};

function toggleLanguage(language) {
  const elementsToUpdate = document.querySelectorAll('[data-lang]');

  elementsToUpdate.forEach((element) => {
    const key = element.dataset.lang;

    element.innerText = languageData[language][key];

    if (language === 'ua') {
      element.classList.add('margin-ua');

      if (window.innerWidth > 1200) {
        element.classList.add('large-font');
        element.classList.remove('medium-font', 'small-font', 'smallest-font');
      } else if (window.innerWidth <= 1200 && window.innerWidth > 800) {
        element.classList.add('medium-font');
        element.classList.remove('large-font', 'small-font', 'smallest-font');
      } else if (window.innerWidth <= 800 && window.innerWidth > 642) {
        element.classList.add('small-font');
        element.classList.remove('large-font', 'medium-font', 'smallest-font');
      } else if (window.innerWidth <= 642 && window.innerWidth > 0) {
        element.classList.add('smallest-font');
        element.classList.remove('large-font', 'medium-font', 'small-font');
      } else {
        element.classList.remove('large-font', 'medium-font', 'small-font', 'smallest-font');
      }
    } else {
      element.classList.remove('margin-ua');
      element.classList.remove('large-font', 'medium-font', 'small-font', 'smallest-font');
    }
  });

  document.documentElement.lang = language;

  const activeLinks = document.querySelectorAll('.lang.active');

  activeLinks.forEach((link) => {
    link.classList.remove('active');
  });

  const selectedLink = document.querySelector(`.lang.${language}Link`);

  selectedLink.classList.add('active');
}

// Set styles for the default language (English) from CSS
toggleLanguage('en');

// Update styles when the window is resized
window.addEventListener('resize', () => {
  toggleLanguage(document.documentElement.lang);
});

// Add event listeners for language links
const languageLinks = document.querySelectorAll('.lang');

languageLinks.forEach((link) => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    const language = link.classList.contains('enLink') ? 'en' : 'ua';

    toggleLanguage(language);
  });
});

window.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.seventh-block__container-card');
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const currentSlide = document.querySelector('.current-slide');
  const totalSlides = document.querySelector('.total-slides');

  let currentIndex = 0;

  function showCard(index) {
    cards.forEach((card, i) => {
      if (i === index) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    currentSlide.textContent = (index + 1).toString().padStart(2, '0');
  }

  function showNextCard() {
    currentIndex++;

    if (currentIndex >= cards.length) {
      currentIndex = 0;
    }
    showCard(currentIndex);
  }

  function showPrevCard() {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = cards.length - 1;
    }
    showCard(currentIndex);
  }

  prevBtns.forEach(btn => {
    btn.addEventListener('click', showPrevCard);
  });

  nextBtns.forEach(btn => {
    btn.addEventListener('click', showNextCard);
  });

  showCard(0); // Добавляем эту строку, чтобы показать первую карточку при загрузке страницы

  currentSlide.textContent = '01';
  totalSlides.textContent = cards.length.toString().padStart(2, '0');
});

// Получите все ссылки внутри nav__list
const navLinks = document.querySelectorAll('.nav__link');

// Добавьте обработчик события для каждой ссылки
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    document.querySelector('.nav__list').classList.remove('nav__list--open');
    document.querySelector('.close-menu').style.display = 'none';
    document.querySelector('.burger-menu').style.display = 'block';
    document.querySelector('.nav__list').style.opacity = '0';
    document.querySelector('.nav__list').style.visibility = 'hidden';
  });
});

// Добавьте обработчик события для кнопки бургера
document.querySelector('.burger-menu').addEventListener('click', function() {
  document.querySelector('.nav__list').classList.add('nav__list--open');
  document.querySelector('.close-menu').style.display = 'block';
  document.querySelector('.burger-menu').style.display = 'none';
  document.querySelector('.nav__list').style.opacity = '1';
  document.querySelector('.nav__list').style.visibility = 'visible';
});

// Добавьте обработчик события для кнопки закрытия меню
document.querySelector('.close-menu').addEventListener('click', function() {
  document.querySelector('.nav__list').style.opacity = '0';
  document.querySelector('.nav__list').style.visibility = 'hidden';

  setTimeout(function() {
    document.querySelector('.nav__list').classList.remove('nav__list--open');
    document.querySelector('.close-menu').style.display = 'none';
    document.querySelector('.burger-menu').style.display = 'block';
  }, 300);
});
