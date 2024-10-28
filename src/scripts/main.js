'use strict';
// burger
const burgerOpen = document.querySelector('.burger__open');
const burgerClose = document.querySelector('.burger__close');
const menu = document.querySelector('.menu');
const body = document.body;
const menuLinks = document.querySelectorAll('.nav__link');

burgerOpen.addEventListener('click', () => {
  burgerOpen.classList.add('rotated');
  setTimeout(() => {
    burgerOpen.style.display = 'none';
    burgerClose.style.display = 'block';
  }, 300);

  menu.classList.add('menu--active');
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.width = '100%';
});

burgerClose.addEventListener('click', closeMenu);

function closeMenu() {
  burgerOpen.style.display = 'block';
  burgerClose.style.display = 'none';
  menu.classList.remove('menu--active');

  setTimeout(() => {
    burgerOpen.classList.remove('rotated');
  }, 100);

  body.style.overflow = '';
  body.style.position = '';
  body.style.width = '';
}

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    closeMenu();

    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});



// lang
const translations = {
  en: {
    story: "OUR STORY",
    about: "ABOUT US",
    features: "FEATURES",
    touch: "GET IN TOUCH",
    specs: "SPECS",
    buy: "BUY",
    presentationTitle: 'Futuristic Wireless Speaker',
    presentationText: 'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',
    cardTitleFirst: 'Futuristic Design',
    cardTextFirst: 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
    cardTitleSecond: 'Tweeter Speaker System',
    cardTextSecond: 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
    cardTitleThird: 'Multiroom System',
    cardTextThird: 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
    cardTitleFourth: 'Intuitive Lighting System',
    cardTextFourth: 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.',
    aboutTitle: 'DESIGNED FOR THE FUTURE',
    aboutText: 'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',
    aboutLink: 'See more about us',
    technologyTitle: 'Luna Eye',
    technologyText: 'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',
    testimonilasText: '“It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”',
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
    footerRights: '© 2024 All rights reserved. Terms of Use & Privacy Policy',

  },
  ua: {
    story: "НАША ІСТОРІЯ",
    about: "ПРО НАС",
    features: "ОСОБЛИВОСТІ",
    touch: "ЗВ'ЯЖІТЬСЯ",
    specs: "СПЕЦИФІКАЦІЇ",
    buy: "КУПИТИ",
    presentationTitle: 'Новий аудіобокс',
    presentationText: 'Гра Luna збалансована та плавна у всіх частотних діапазонах, що робить музику природно приємною та помітно більш багатошаровою.',
    cardTitleFirst: 'Футуристичний дизайн',
    cardTextFirst: 'Щоб надати Luna справді бездоганний вигляд, ми спеціально обрали алюміній авіаційного класу як матеріал і використали технологію тривимірного розтягнення та згинання, а також метод високоточного холодного кування.',
    cardTitleSecond: 'Твітерна акустична система',
    cardTextSecond: 'Для забезпечення більш багатошарової звукової продуктивності, кращої за один повнодіапазонний динамік, наша команда оснастила Luna додатковим високочастотним динаміком, який самостійно відповідає за високочастотний звук.',
    cardTitleThird: 'Система Multiroom',
    cardTextThird: 'Luna нативно сумісна з вашою домашньою Wi-Fi мережею. Налаштуйте кілька динаміків у різних кімнатах, щоб розширити музичний досвід на весь будинок.',
    cardTitleFourth: 'Інтуїтивна система освітлення',
    cardTextFourth: 'Інтуїтивно зрозумілий інтерфейс дозволяє налаштовувати відтінок і насиченість кольору для освітлення, яке підходить до будь-якого настрою та ситуації.',
    aboutTitle: 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО',
    aboutText: 'У 2014 році група захоплених промислових дизайнерів, досвідчених інженерів і акустичних експертів створила crazybaby. Це команда пристрасних людей, які настільки божевільні, що вважають, що можуть кинути виклик індустрії за допомогою інноваційних аудіопродуктів.',
    aboutLink: 'Побачити більше про нас',
    technologyTitle: 'Місячне око',
    technologyText: 'Luna Eye — суть цієї інноваційної системи освітлення та аудіосистеми. Він складається з незалежного високочастотного динаміка, світловодного компонента, купола та кільцевого орнаменту.',
    testimonilasText: '«Мене, чесно кажучи, дуже здивувало, коли я отримав такий чудовий звук, який виходив із цього маленького компактного пристрою. А завдяки щітковій алюмінієвій поверхні це так знайомо. Як мій iPhone».',
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
    footerRights: '© 2024 Усі права захищено. Умови використання та політика конфіденційності',
  },
}

// Функція для зміни мови
function changeLanguage(lang) {
  const elements = document.querySelectorAll('[data-translate-key]');
  const en = document.querySelector('.actions__buttons-en');
  const enDesk = document.querySelector('.actions-desk__buttons-en');
  const ua = document.querySelector('.actions__buttons-ua');
  const uaDesk = document.querySelector('.actions-desk__buttons-ua');
  elements.forEach((element) => {
    const key = element.getAttribute('data-translate-key');
    element.textContent = translations[lang][key];
  });

  if (lang === 'en') {
    ua.classList.remove('active-lang');
    uaDesk.classList.remove('active-lang');
    en.classList.add('active-lang');
    enDesk.classList.add('active-lang');
  } else if (lang === 'ua') {
    en.classList.remove('active-lang');
    enDesk.classList.remove('active-lang');
    ua.classList.add('active-lang');
    uaDesk.classList.add('active-lang');
  } else {
    en.classList.add('active-lang');
    enDesk.classList.add('active-lang');
  }
  console.log(lang);

}

document.querySelector('.actions__buttons-ua').addEventListener('click', () => changeLanguage('ua'));
document.querySelector('.actions__buttons-en').addEventListener('click', () => changeLanguage('en'));
document.querySelector('.actions-desk__buttons-ua').addEventListener('click', () => changeLanguage('ua'));
document.querySelector('.actions-desk__buttons-en').addEventListener('click', () => changeLanguage('en'));

//slider
const slides = document.querySelector('.slider__container');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');
const countSlide = document.querySelector('.slider__counter-number');

let currentIndex = 0;

function showSlide(index) {
  const totalSlides = slide.length - 3;

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;

  countSlide.textContent = `0${currentIndex + 1}`;
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

// questions block

const form = document.querySelector('.form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (form.checkValidity()) {
    form.querySelector('.form__email').value = '';
    form.querySelector('.form__message').value = '';

  }
});
