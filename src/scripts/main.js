'use strict';

// eslint-disable-next-line no-undef
$(function() {
  // eslint-disable-next-line no-undef
  $('.aboutus__wrapper-mobile').slick({
    arrows: false,
    dots: true,
    swipe: true,
    swipeToSlide: true,
  });
});

// eslint-disable-next-line no-undef
$(function() {
  // eslint-disable-next-line no-undef
  const slider = $('.features__wrapper--mobile');
  // eslint-disable-next-line no-undef
  const number = $('.features__page-one');
  // eslint-disable-next-line no-undef
  const buttonNext = $('.features__btn--next');
  // eslint-disable-next-line no-undef
  const buttonPrev = $('.features__btn--prev');
  // eslint-disable-next-line no-undef

  slider.slick({
    swipe: true,
    arrows: false,
  });

  slider.on('afterChange', function(event, slick, currentSlide) {
    const pageNumber = currentSlide + 1;
    // Оскільки нумерація починається з 0

    number.text('0' + pageNumber);
  });

  buttonNext.on('click', function() {
    slider.slick('slickNext');
  });

  buttonPrev.on('click', function() {
    slider.slick('slickPrev');
  });
});

const translations = {
  en: {
    specs: 'Specs',
    buy: 'Buy',
    ourStory: 'Our story',
    aboutUs: 'About us',
    features: 'Features',
    getInTouch: 'Get in touch',
    titleFuturistic: 'Futuristic Wireless Speaker',
    paragraph: 'Luna’s performance is balanced'
    + ' and smooth in all frequency ranges which makes'
    + ' the music both naturally pleasant and distinctly more'
    + ' layered.',
    futuristicDesign: 'Futuristic Design',
    futuristicDesignText: 'To give Luna a truly flawless look, we specifically'
    + ' picked aircraft grade aluminum as its material and adopted both'
    + ' three-dimensional stretch-bending technology and a high'
    + ' precision cold forging technique.',
    tweeterSpeakerSystem: 'Tweeter Speaker System',
    tweeterSpeakerSystemText: 'To deliver a more layered sound performance'
    + ' better than a sole full-range speaker, our team equipped Luna with one'
    + ' more tweeter speaker responsible for high-frequency sound'
    + ' independently.',
    multiroomSystem: 'Multiroom System',
    multiroomSystemText: 'Luna is natively compatible with your'
    + ' home Wi-Fi. Set up multiple speakers in different rooms'
    + ' to expand your music experience into the entire house.',
    intuitiveLightingSystem: 'Intuitive Lighting System',
    intuitiveLightingSystemText: 'An intuitive user interface allows you'
    + ' to adjust the hue and saturation of color for lighting'
    + ' that fits any mood and situation.',
    designedForTheFuture: 'Designed for the future',
    designedForTheFutureText: 'In 2014, a group of geeky industrial designers,'
    + ' engineering veterans and acoustic experts formed crazybaby.'
    + ' This is a bunch of passionate people who are crazy enough to'
    + ' think they can challenge the industry with disruptive audio products.',
    seeMoreAboutUs: 'See more about us',
    lunaEye: 'Luna Eye',
    lunaEyeText: 'Luna Eye is to the essence of this innovative light and audio'
    + ' system. It comprises an independent tweeter speaker, a light guiding'
    + ' component, a dome and a ring ornament.',
    quote: 'It really took me by surprise honestly to have such full beautiful'
    + 'sound that coming out of this small compact device. And with the'
    + 'brush aluminum surface, it feels so familiar. Like my iPhone.',
    author: 'Garrett Martin',
    profession: 'Creative Director',
    titleFeatures: 'Features',

    connectivity: 'Connectivity',
    handfree: 'Hands Free Wireless Audio',
    bluetooth: 'Bluetooth 4.0 LE',
    wiFi: 'Wi-Fi 2,4 GHz (802.11 b/g/n)',
    smart: 'Smart Multiroom System Set Up',
    partyMode: 'Party Mode with 6.0 Units and above',
    meshnet: 'MESHNET Multi Speaker Network',

    appFeatures: 'App Features',
    customize: 'Customize Music Schedule',
    favotiteSongs: 'Wake Up with Favorite Songs',
    homeDetection: 'Home Detection Auto Wake Up',
    colorWheel: 'Color Wheel',

    csoundMusic: 'CSound & Music',
    basePower: 'Feel-in-chest Base Power',
    audioTransmission: 'Lossless Digital Audio Transmission',
    stereoPairing: 'Easy & Stable Stereo Pairing',
    crispClear: 'Crisp and Clear High Frequency Sound',
    streams: 'Streams from Cloud Music and Local Library',
    autoMusic: 'Auto Music from Last Song Stopped',

    doYouHave: 'Do you have any questions?',
    yourEmailPlaceholder: 'Your email',
    send: 'Send',
    footerText: '© 2019 All rights reserved. Terms of Use & Privacy Policy',
  },

  ua: {
    specs: 'Специфікації',
    buy: 'Купити',
    ourStory: 'Наша історія',
    aboutUs: 'Про нас',
    features: 'Особливості',
    getInTouch: 'Зв’язатися',
    titleFuturistic: 'Футуристичний бездротовий динамік',
    paragraph: 'Гра Luna збалансована та плавна у всіх частотних діапазонах,'
    + ' що робить музику природно приємною та помітно більш багатошаровою.',
    futuristicDesign: 'Футуристичний дизайн',
    futuristicDesignText: 'Щоб надати Luna справді бездоганного вигляду, ми'
    + ' спеціально вибрали авіаційний алюміній як його матеріал і застосували'
    + ' як тривимірну технологію розтягування, так і технологію високоточного'
    + ' холодного кування.',
    tweeterSpeakerSystem: 'Акустична система твітера',
    tweeterSpeakerSystemText: 'Щоб забезпечити більш багатошаровий звук,'
    + ' кращий, ніж єдиний повнодіапазонний динамік, наша команда оснастила'
    + ' Luna ще одним твітерним динаміком, який відповідає за високочастотний'
    + ' звук незалежно.',
    multiroomSystem: 'Система Multiroom',
    multiroomSystemText: 'Luna нативно сумісна з домашнім Wi-Fi.'
    + ' Встановіть кілька динаміків у різних кімнатах, щоб розширити музичний'
    + ' досвід у всьому будинку.',
    intuitiveLightingSystem: 'Інтуїтивно зрозуміла система освітлення',
    intuitiveLightingSystemText: 'Інтуїтивно зрозумілий інтерфейс користувача'
    + ' дозволяє регулювати відтінок і насиченість кольорів для освітлення,'
    + ' яке відповідає будь-якому настрою та ситуації.',
    designedForTheFuture: 'Створено для майбутнього',
    designedForTheFutureText: '2014 році група промислових дизайнерів,'
    + ' ветеранів техніки та експертів з акустики створила crazybaby. Це група'
    + ' пристрасних людей, які настільки божевільні, щоб думати, що можуть'
    + ' кинути виклик індустрії за допомогою руйнівних аудіопродуктів.',
    seeMoreAboutUs: 'Дізнайтеся більше про нас',
    lunaEye: 'Місячне око',
    lunaEyeText: 'Luna Eye — суть цієї інноваційної системи освітлення'
    + ' та аудіосистеми. Він складається з незалежного високочастотного'
    + ' динаміка, світловодного компонента, купола та кільцевого орнаменту.',
    quote: 'Мене, чесно кажучи, дуже здивувало таке чудове звучання,'
    + ' яке виходить із цього маленького компактного пристрою.'
    + ' А завдяки щітковій алюмінієвій поверхні це так знайомо.'
    + ' Як мій iPhone.',
    author: 'Гаррет Мартін',
    profession: 'Креативний директор',
    titleFeatures: 'Особливості',

    connectivity: 'Підключення',
    handfree: 'Бездротова аудіосистема Hands Free',
    bluetooth: 'Bluetooth 4.0 LE',
    wiFi: 'Wi-Fi 2,4 ГГц (802.11 b/g/n)',
    smart: 'Налаштування системи Smart Multiroom',
    partyMode: 'Режим вечірки з одиницями 6.0 і вище',
    meshnet: 'Мережа з декількома гучномовцями MESHNET',

    appFeatures: 'Функції додатків',
    customize: 'Налаштуйте музичний розклад',
    favotiteSongs: 'Прокидайтеся з улюбленими піснями',
    homeDetection: 'Автоматичне розпізнавання будинку',
    colorWheel: 'Колірне коло',

    csoundMusic: 'CSound та музика',
    basePower: 'Базова потужність відчуття в грудях',
    audioTransmission: 'Передача цифрового звуку без втрат',
    stereoPairing: 'Легке та стабільне стереоз’єднання',
    crispClear: 'Чіткий і чистий високочастотний звук',
    streams: 'Потоки з Cloud Music і локальної бібліотеки',
    autoMusic: 'Автоматична зупинка музики з останньої пісні',

    doYouHave: 'У вас є які-небудь питання?"',
    yourEmailPlaceholder: 'Ваша електронна адреса',
    send: 'Надіслати',
    footerText: '© 2019 Всі права захищені.'
    + ' Умови використання та політика конфіденційності',
  },
};

function changeLanguage(language) {
  const selectedLanguage = language;

  const translation = translations[selectedLanguage];

  const elementsToUpdate = document.querySelectorAll('[data-translate]');

  elementsToUpdate.forEach(element => {
    const key = element.getAttribute('data-translate');

    if (translation[key]) {
      element.textContent = translation[key];
    }
  });

  const emailInput = document.querySelector(
    '[data-translate="yourEmailPlaceholder"]'
  );

  emailInput.placeholder = translation.yourEmailPlaceholder;

  const enRadio = document.getElementById('en-m');
  const uaRadio = document.getElementById('ua-m');
  const enRadioMobile = document.getElementById('en--m');
  const uaRadioMobile = document.getElementById('ua--m');

  enRadio.addEventListener('change', () => {
    changeLanguage('en');
  });

  uaRadio.addEventListener('change', () => {
    changeLanguage('ua');
  });

  enRadioMobile.addEventListener('change', () => {
    changeLanguage('en');
  });

  uaRadioMobile.addEventListener('change', () => {
    changeLanguage('ua');
  });
};

changeLanguage('en');
