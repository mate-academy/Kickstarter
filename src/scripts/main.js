'use strict';
document.addEventListener('DOMContentLoaded', () => {
  //language
  const translations = {
    en: {
      story: 'OUR STORY',
      about: 'ABOUT US',
      features: 'FEATURES',
      touch: 'GET IN TOUCH',
      specs: 'SPECS',
      buy: 'BUY',
      presentationTitle: 'Futuristic Wireless Speaker',
      presentationText:
        'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',
      cardTitleFirst: 'Futuristic Design',
      cardTextFirst:
        'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
      cardTitleSecond: 'Tweeter Speaker System',
      cardTextSecond:
        'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
      cardTitleThird: 'Multiroom System',
      cardTextThird:
        'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
      cardTitleFourth: 'Intuitive Lighting System',
      cardTextFourth:
        'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.',
      aboutTitle: 'DESIGNED FOR THE FUTURE',
      aboutText:
        'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',
      aboutLink: 'See more about us',
      technologyTitle: 'Luna Eye',
      technologyText:
        'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',
      testimonilasText:
        '“It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”',
      testimonilasRole: 'Creative Director',
      featuresTitle: 'FEATURES',
      featuresAppTitle: 'App Features',
      slideAppOne: 'Customize Music Schedule',
      slideAppTwo: 'Wake Up with Favorite Songs',
      slideAppThird: 'Home Detection Auto Wake Up',
      slideAppFour: 'Color Wheel',
      featuresConnectivityTitle: 'Connectivity',
      slideConnectivityOne: 'Hands Free Wireless Audio',
      slideConnectivityTwo: 'Bluetooth 4.0 LE',
      slideConnectivityThird: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
      slideConnectivityFour: 'Smart Multiroom System Set Up',
      slideConnectivityFive: 'Party Mode with 6.0 Units and above',
      slideConnectivitySix: 'MESHNET Multi Speaker Network',
      featuresSoundTitle: 'Sound & Music',
      slideSoundpOne: 'Feel-in-chest Base Power',
      slideSoundpTwo: 'Lossless Digital Audio Transmission',
      slideSoundpThird: 'Easy & Stable Stereo Pairing',
      slideSoundpFour: 'Crisp and Clear High Frequency Sound',
      slideSoundpFive: 'Streams from Cloud Music and Local Library',
      slideSoundpSix: 'Auto Music from Last Song Stopped',
      questionsTitle: 'DO YOU HAVE ANY QUESTIONS?',
      questionsButton: 'SEND',
      footerRights:
        '© 2024 All rights reserved. Terms of Use & Privacy Policy',
    },
    ua: {
      story: 'НАША ІСТОРІЯ',
      about: 'ПРО НАС',
      features: 'ОСОБЛИВОСТІ',
      touch: "ЗВ'ЯЖІТЬСЯ",
      specs: 'СПЕЦИФІКАЦІЇ',
      buy: 'КУПИТИ',
      presentationTitle: 'Новий аудіобокс',
      presentationText:
        'Гра Luna збалансована та плавна у всіх частотних діапазонах, що робить музику природно приємною та помітно більш багатошаровою.',
      cardTitleFirst: 'Футуристичний дизайн',
      cardTextFirst:
        'Щоб надати Luna справді бездоганний вигляд, ми спеціально обрали алюміній авіаційного класу як матеріал і використали технологію тривимірного розтягнення та згинання, а також метод високоточного холодного кування.',
      cardTitleSecond: 'Твітерна акустична система',
      cardTextSecond:
        'Для забезпечення більш багатошарової звукової продуктивності, кращої за один повнодіапазонний динамік, наша команда оснастила Luna додатковим високочастотним динаміком, який самостійно відповідає за високочастотний звук.',
      cardTitleThird: 'Система Multiroom',
      cardTextThird:
        'Luna нативно сумісна з вашою домашньою Wi-Fi мережею. Налаштуйте кілька динаміків у різних кімнатах, щоб розширити музичний досвід на весь будинок.',
      cardTitleFourth: 'Інтуїтивна система освітлення',
      cardTextFourth:
        'Інтуїтивно зрозумілий інтерфейс дозволяє налаштовувати відтінок і насиченість кольору для освітлення, яке підходить до будь-якого настрою та ситуації.',
      aboutTitle: 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО',
      aboutText:
        'У 2014 році група захоплених промислових дизайнерів, досвідчених інженерів і акустичних експертів створила crazybaby. Це команда пристрасних людей, які настільки божевільні, що вважають, що можуть кинути виклик індустрії за допомогою інноваційних аудіопродуктів.',
      aboutLink: 'Побачити більше про нас',
      technologyTitle: 'Місячне око',
      technologyText:
        'Luna Eye — суть цієї інноваційної системи освітлення та аудіосистеми. Він складається з незалежного високочастотного динаміка, світловодного компонента, купола та кільцевого орнаменту.',
      testimonilasText:
        '«Мене, чесно кажучи, дуже здивувало, коли я отримав такий чудовий звук, який виходив із цього маленького компактного пристрою. А завдяки щітковій алюмінієвій поверхні це так знайомо. Як мій iPhone».',
      testimonilasRole: 'Креативний директор',
      featuresTitle: 'ОСОБЛИВОСТІ',
      featuresAppTitle: 'Функції програми',
      slideAppOne: 'Налаштуйте музичний розклад',
      slideAppTwo: 'Прокидайтеся з улюбленими піснями',
      slideAppThird: 'Автоматичне розпізнавання будинку',
      slideAppFour: 'Колірне коло',
      featuresConnectivityTitle: 'Підключення',
      slideConnectivityOne: 'Бездротова аудіосистема Hands Free',
      slideConnectivityTwo: 'Bluetooth 4.0 LE',
      slideConnectivityThird: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
      slideConnectivityFour: 'Налаштування системи Smart Multiroom',
      slideConnectivityFive: 'Режим вечірки з одиницями 6.0 і вище',
      slideConnectivitySix: 'Мережа з декількома гучномовцями MESHNET',
      featuresSoundTitle: 'Звук & музика',
      slideSoundpOne: 'Базова потужність відчуття в грудях',
      slideSoundpTwo: 'Передача цифрового звуку без втрат',
      slideSoundpThird: 'Легке та стабільне стереоз’єднання',
      slideSoundpFour: 'Чіткий і чистий високочастотний звук',
      slideSoundpFive: 'Потоки з Cloud Music і локальної бібліотеки',
      slideSoundpSix: 'Автоматична зупинка музики з останньої пісні',
      questionsTitle: 'У ВАС Є ЗАПИТАННЯ?',
      questionsButton: 'ВІДПРАВИТИ',
      footerRights:
        '© 2024 Усі права захищено. Умови використання та політика конфіденційності',
    },
  };

  function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-translate-key');
      element.textContent = translations[lang][key];
    });

    const enButtons = document.querySelectorAll(
      '.menu__lang-en, .actions__buttons-en, .actions-desk__buttons-en',
    );
    const uaButtons = document.querySelectorAll(
      '.menu__lang-ua, .actions__buttons-ua, .actions-desk__buttons-ua',
    );

    if (lang === 'en') {
      uaButtons.forEach((btn) => btn.classList.remove('active-lang'));
      enButtons.forEach((btn) => btn.classList.add('active-lang'));
    } else if (lang === 'ua') {
      enButtons.forEach((btn) => btn.classList.remove('active-lang'));
      uaButtons.forEach((btn) => btn.classList.add('active-lang'));
    }
  }

  const enButtons = document.querySelectorAll(
    '.menu__lang-en, .actions__buttons-en, .actions-desk__buttons-en',
  );
  const uaButtons = document.querySelectorAll(
    '.menu__lang-ua, .actions__buttons-ua, .actions-desk__buttons-ua',
  );

  enButtons.forEach((btn) =>
    btn.addEventListener('click', () => changeLanguage('en')),
  );
  uaButtons.forEach((btn) =>
    btn.addEventListener('click', () => changeLanguage('ua')),
  );

  //slider
  const slides = document.querySelectorAll('.features__block');
  let currentSlide = 0;
  const totalSlides = slides.length;

  const prevArrow = document.querySelector('.slider__arrows-left');
  const nextArrow = document.querySelector('.slider__arrows-right');
  const slideNumberNow = document.querySelector('.slider__number-now');
  const slideNumberAll = document.querySelector('.slider__number-all');

  function updateSlider() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    slideNumberNow.textContent = String(currentSlide + 1).padStart(2, '0');
  }

  prevArrow.addEventListener('click', function () {
    currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    updateSlider();
  });

  nextArrow.addEventListener('click', function () {
    currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    updateSlider();
  });

  slideNumberAll.textContent = String(totalSlides).padStart(2, '0');
  updateSlider();
});
