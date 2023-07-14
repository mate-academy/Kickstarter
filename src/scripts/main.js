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
  // Обновление текстовых элементов на странице
  document.getElementById('title').innerText = languageData[language].title;
  document.getElementById('description').innerText = languageData[language].description;

  document.getElementById('nav1').innerText = languageData[language].nav1;
  document.getElementById('nav2').innerText = languageData[language].nav2;
  document.getElementById('nav3').innerText = languageData[language].nav3;
  document.getElementById('nav4').innerText = languageData[language].nav4;

  document.getElementById('secondBlock__tittle1').innerText = languageData[language].secondBlock__tittle1;
  document.getElementById('secondBlock__tittle2').innerText = languageData[language].secondBlock__tittle2;
  document.getElementById('secondBlock__tittle3').innerText = languageData[language].secondBlock__tittle3;
  document.getElementById('secondBlock__tittle4').innerText = languageData[language].secondBlock__tittle4;

  document.getElementById('secondBlock__text1').innerText = languageData[language].secondBlock__text1;
  document.getElementById('secondBlock__text2').innerText = languageData[language].secondBlock__text2;
  document.getElementById('secondBlock__text3').innerText = languageData[language].secondBlock__text3;
  document.getElementById('secondBlock__text4').innerText = languageData[language].secondBlock__text4;

  document.getElementById('forthBlock__tittle').innerText = languageData[language].forthBlock__tittle;
  document.getElementById('fifthBlock__tittle').innerText = languageData[language].fifthBlock__tittle;
  document.getElementById('forthBlock__text').innerText = languageData[language].forthBlock__text;
  document.getElementById('fifthBlock__text').innerText = languageData[language].fifthBlock__text;

  document.getElementById('learn1').innerText = languageData[language].learn1;
  document.getElementById('learn2').innerText = languageData[language].learn2;

  document.getElementById('sixthBlock__text').innerText = languageData[language].sixthBlock__text;
  document.getElementById('sixthBlock__name').innerText = languageData[language].sixthBlock__name;
  document.getElementById('sixthBlock__prof').innerText = languageData[language].sixthBlock__prof;

  document.getElementById('seventhBlock__tittle').innerText = languageData[language].seventhBlock__tittle;
  document.getElementById('seventhBlock__tittleList1').innerText = languageData[language].seventhBlock__tittleList1;
  document.getElementById('seventhBlock__tittleList2').innerText = languageData[language].seventhBlock__tittleList2;
  document.getElementById('seventhBlock__tittleList3').innerText = languageData[language].seventhBlock__tittleList3;

  document.getElementById('seventhBlock__text1_1').innerText = languageData[language].seventhBlock__text1_1;
  document.getElementById('seventhBlock__text1_2').innerText = languageData[language].seventhBlock__text1_2;
  document.getElementById('seventhBlock__text1_3').innerText = languageData[language].seventhBlock__text1_3;
  document.getElementById('seventhBlock__text1_4').innerText = languageData[language].seventhBlock__text1_4;
  document.getElementById('seventhBlock__text1_5').innerText = languageData[language].seventhBlock__text1_5;
  document.getElementById('seventhBlock__text1_6').innerText = languageData[language].seventhBlock__text1_6;

  document.getElementById('seventhBlock__text2_1').innerText = languageData[language].seventhBlock__text2_1;
  document.getElementById('seventhBlock__text2_2').innerText = languageData[language].seventhBlock__text2_2;
  document.getElementById('seventhBlock__text2_3').innerText = languageData[language].seventhBlock__text2_3;
  document.getElementById('seventhBlock__text2_4').innerText = languageData[language].seventhBlock__text2_4;
  document.getElementById('seventhBlock__text2_5').innerText = languageData[language].seventhBlock__text2_5;
  document.getElementById('seventhBlock__text2_6').innerText = languageData[language].seventhBlock__text2_6;

  document.getElementById('seventhBlock__text3_1').innerText = languageData[language].seventhBlock__text3_1;
  document.getElementById('seventhBlock__text3_2').innerText = languageData[language].seventhBlock__text3_2;
  document.getElementById('seventhBlock__text3_3').innerText = languageData[language].seventhBlock__text3_3;
  document.getElementById('seventhBlock__text3_4').innerText = languageData[language].seventhBlock__text3_4;

  document.getElementById('eightBlock_tittle').innerText = languageData[language].eightBlock_tittle;

  // Установка нового языка для корневого элемента (может потребоваться для стилей)
  document.documentElement.lang = language;

  // Удаление класса "active" у всех языковых ссылок
  document.getElementById('enLink').classList.remove('active');
  document.getElementById('uaLink').classList.remove('active');

  // Добавление класса "active" к выбранной языковой ссылке
  document.getElementById(language + 'Link').classList.add('active');

  const title = document.getElementById('title');

  // Проверка языка и ограничение ширины
  if (language === 'en') {
    title.style.width = '350px'; // Ограничение ширины на английском языке до 378px
  } else if (language === 'ua') {
    title.style.width = '510px'; // Ограничение ширины на украинском языке до 510px
  }

  const secondBlockTittle4 = document.getElementById('secondBlock__tittle4');

  if (language === 'ua') {
    secondBlockTittle4.style.marginBottom = '22px'; // Добавление нижнего отступа 30px на украинском языке
  } else {
    secondBlockTittle4.style.marginBottom = '28px'; // Удаление нижнего отступа на других языках
  }

  const secondBlockTittle2 = document.getElementById('secondBlock__tittle2');

  if (language === 'ua') {
    secondBlockTittle2.style.marginBottom = '52px';
  } else {
    secondBlockTittle2.style.marginBottom = '26px';
  }

  const secondBlockTittle3 = document.getElementById('secondBlock__tittle3');

  if (language === 'ua') {
    secondBlockTittle3.style.marginBottom = '77px';
  } else {
    secondBlockTittle3.style.marginBottom = '52px';
  }
}

// Назначение обработчиков событий для языковых ссылок
document.getElementById('enLink').addEventListener('click', function(event) {
  event.preventDefault();
  toggleLanguage('en');
});

document.getElementById('uaLink').addEventListener('click', function(event) {
  event.preventDefault();
  toggleLanguage('ua');
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
