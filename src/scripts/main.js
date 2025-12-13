'use strict';

const languageButtons = document.querySelectorAll('.language [data-lang]');
const languageSlash = document.querySelectorAll('.language__slash');
const specs = document.querySelectorAll('.link__specs');
const aboutDescription = document.querySelector('.about__description');
const activeButtonClassName = 'language__button--active';
const i18nElements = document.querySelectorAll('[data-i18n]');
const i18nPlaceholders = document.querySelectorAll('[data-i18n-placeholder]');

const translations = {
  en: {
    specs: 'specs',
    buyButton: 'buy',
    headerTitle: 'Futuristic Wireless Speaker',
    headerData:
      'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',
    ourStoryButton: 'our story',
    aboutButton: 'abiut us',
    featuresButton: 'features',
    sendButton: 'send',
    questionsButton: 'get in touch',
    rights: '© 2019 All rights reserved. Terms of Use & Privacy Policy',
    benefitsTitleDesign: 'futuristic design',
    benefitsDescriptionDesign:
      'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
    benefitsSpeakerTitle: 'tweeter speaker system',
    benefitsSpeakerDescription:
      'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
    benefitsMultiroomTitle: 'multiroom system',
    benefitsMultiroomDescription:
      'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
    benefitsLightningTitle: 'intuitive lightning system',
    benefitsLightningDescription:
      'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.',
    seeMoreButton: 'see more about us',
    aboutTitle: 'designed for the future',
    aboutDescription:
      'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',
    technologyTitle: 'luna eye',
    technologyDescription:
      'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',
    testimoniaslComment:
      '“It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.”',
    testimonialsName: 'Garrett Martin',
    testimonialsPosition: 'Creative Director',
    featuresTitle: 'features',
    soundTitle: 'Sound & Music',
    soundInfo: 'Feel-in-chest Base Power',
    soundInfo1: 'Lossless Digital Audio Transmission',
    soundInfo2: 'Easy & Stable Stereo Pairing',
    soundInfo3: 'Crisp and Clear High Frequency Sound',
    soundInfo4: 'Streams from Cloud Music and Local Library',
    soundInfo5: 'Auto Music Playback from Last Song Stopped',
    appFeaturesTitle: 'App Features',
    appFeaturesInfo: 'Customize Music Schedule',
    appFeaturesInfo1: 'Wake Up with Favorite Songs',
    appFeaturesInfo2: 'Home Detection Auto Wake Up',
    appFeaturesInfo3: 'Color Wheel',
    connectivityTitle: 'Connectivity',
    connectivityInfo: 'Hands Free Wireless Audio',
    connectivityInfo1: 'Bluetooth 4.0 LE',
    connectivityInfo2: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
    connectivityInfo3: 'Smart Multiroom System Set Up',
    connectivityInfo4: 'Party Mode with 6.0 Units and above',
    connectivityInfo5: 'MESHNET Multi Speaker Network',
    questionsTitle: 'do you have any questions?',
    emailPlaceholder: 'Your email',
  },
  ua: {
    specs: 'характеристики',
    buyButton: 'купити',
    emailPlaceholder: 'Ваш email',
    headerTitle: 'Футуристична бездротова колонка',
    headerData:
      'Звучання Luna збалансоване та плавне у всіх діапазонах частот, що робить музику природно приємною та більш багатошаровою.',
    ourStoryButton: 'наша історія',
    aboutButton: 'про нас',
    featuresButton: 'особливості',
    sendButton: 'надіслати',
    questionsButton: 'звʼязатися з нами',
    rights:
      '© 2019 Усі права захищені. Умови використання та Політика конфіденційності',
    benefitsTitleDesign: 'футуристичний дизайн',
    benefitsDescriptionDesign:
      'Щоб надати Luna бездоганний вигляд, ми спеціально обрали авіаційний алюміній як матеріал і застосували технологію тривимірного гнуття та високоточне холодне кування.',
    benefitsSpeakerTitle: 'твітерна акустична система',
    benefitsSpeakerDescription:
      'Для більш багатошарового звучання, кращого за один повнодіапазонний динамік, наша команда оснастила Luna додатковим твітером, який окремо відповідає за високі частоти.',
    benefitsMultiroomTitle: 'мультирум система',
    benefitsMultiroomDescription:
      'Luna нативно сумісна з домашнім Wi-Fi. Налаштуйте кілька колонок у різних кімнатах, щоб поширити музику на весь будинок.',
    benefitsLightningTitle: 'інтуїтивна система підсвічування',
    benefitsLightningDescription:
      'Інтуїтивний інтерфейс дозволяє налаштовувати відтінок і насиченість світла відповідно до будь-якого настрою чи ситуації.',
    seeMoreButton: 'дізнатися більше про нас',
    aboutTitle: 'створено для майбутнього',
    aboutDescription:
      'У 2014 році група захоплених промислових дизайнерів, досвідчених інженерів та експертів з акустики створила crazybaby. Це команда людей, які достатньо сміливі, щоб кинути виклик індустрії революційними аудіопродуктами.',
    technologyTitle: 'luna eye',
    technologyDescription:
      'Luna Eye — це серце інноваційної світло-аудіо системи. Вона складається з незалежного твітера, світлового напрямного компонента, купола та декоративного кільця.',
    testimoniaslComment:
      '«Чесно кажучи, мене дуже здивувало, наскільки повне й красиве звучання виходить із такого маленького компактного пристрою. А матовий алюмінієвий корпус відчувається таким знайомим. Як мій iPhone».',
    testimonialsName: 'Гаррет Мартін',
    testimonialsPosition: 'Креативний директор',
    featuresTitle: 'особливості',
    soundTitle: 'Звук і музика',
    soundInfo: 'Потужні баси, що відчуваються грудьми',
    soundInfo1: 'Передача цифрового аудіо без втрат',
    soundInfo2: 'Легке та стабільне стереопарування',
    soundInfo3: 'Чіткі та чисті високі частоти',
    soundInfo4: 'Відтворення з хмарних сервісів та локальної бібліотеки',
    soundInfo5: 'Автоматичне відтворення з останньої зупиненої композиції',
    appFeaturesTitle: 'Можливості додатку',
    appFeaturesInfo: 'Налаштування розкладу відтворення',
    appFeaturesInfo1: 'Пробудження з улюбленими піснями',
    appFeaturesInfo2: 'Автоматичне пробудження з визначенням дому',
    appFeaturesInfo3: 'Кольорове колесо',
    connectivityTitle: 'Підключення',
    connectivityInfo: 'Бездротове аудіо з функцією hands-free',
    connectivityInfo1: 'Bluetooth 4.0 LE',
    connectivityInfo2: 'Wi-Fi 2.4 ГГц (802.11 b/g/n)',
    connectivityInfo3: 'Налаштування розумної мультирум системи',
    connectivityInfo4: 'Режим вечірки з 6 і більше пристроями',
    connectivityInfo5: 'MESHNET мережа з кількох колонок',
    questionsTitle: 'є питання?',
  },
};

const placeholderTranslactions = {
  en: {
    emailPlaceholder: 'Your email',
    textareaPlaceholder: 'Your message...',
  },
  ua: {
    emailPlaceholder: 'Ваш email',
    textareaPlaceholder: 'Ваше повідомлення...',
  },
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

function setLanguage(language) {
  languageButtons.forEach((button) => {
    button.classList.toggle(
      activeButtonClassName,
      button.dataset.lang === language,
    );
  });

  changeLanguage(language);
}

function changeLanguage(language) {
  i18nElements.forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const translation = translations[language][key];

    if (translation) {
      el.textContent = translation;
    }
  });

  i18nPlaceholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = placeholderTranslactions[language][key];

    if (translation) {
      el.placeholder = translation;
    }
  });
}

function updateClassBasedOnScreenSize() {
  const screenWidth = window.innerWidth;

  updateLanguageBlock(screenWidth);
  updateSpecs(screenWidth);
  updateAboutDescription(screenWidth);
}

function updateLanguageBlock(screenWidth) {
  if (screenWidth >= 1280) {
    languageButtons.forEach((el) => {
      removeLanguageFont(el);
    });

    languageSlash.forEach((el) => {
      removeLanguageFont(el);
    });
  } else {
    languageButtons.forEach((el) => {
      removeThirdaryFont(el);
    });

    languageSlash.forEach((el) => {
      removeThirdaryFont(el);
    });
  }
}

function removeLanguageFont(element) {
  element.classList.remove('language__font');
  element.classList.add('font-thirdary');
}

function removeThirdaryFont(element) {
  element.classList.remove('font-thirdary');
  element.classList.add('language__font');
}

function updateSpecs(screenWidth) {
  if (screenWidth >= 1280) {
    specs.forEach((spec) => {
      spec.classList.remove('link__specs--font');
      spec.classList.add('font-thirdary');
    });
  } else {
    specs.forEach((spec) => {
      spec.classList.remove('font-thirdary');
      spec.classList.add('link__specs--font');
    });
  }
}

function updateAboutDescription(screenWidth) {
  console.log(screenWidth);
  console.log(aboutDescription.classList);
  if (screenWidth >= 640) {
    aboutDescription.classList.remove('font-secondary');
    aboutDescription.classList.add('font-main');
  } else {
    aboutDescription.classList.remove('font-main');
    aboutDescription.classList.add('font-secondary');
  }
}

updateClassBasedOnScreenSize();

window.addEventListener('resize', updateClassBasedOnScreenSize);

document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  let slides = document.querySelectorAll('.info-card');
  const totalSlides = slides.length;
  let counter = document.querySelector('.slider__counter-current');

  document.querySelector('.slider__counter-total').textContent =
    totalSlides < 10 ? `0${totalSlides}` : totalSlides;

  function changeSlide(direction) {
    slides[currentIndex].classList.remove('info-card--active');
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

    const currentSlide = currentIndex + 1;
    counter.textContent = currentSlide < 10 ? `0${currentSlide}` : currentSlide;
    slides[currentIndex].classList.add('info-card--active');
  }

  const leftButton = document.querySelector('.slider__button--left');
  const rightButton = document.querySelector('.slider__button--right');

  if (leftButton && rightButton) {
    leftButton.addEventListener('click', () => changeSlide(-1));
    rightButton.addEventListener('click', () => changeSlide(1));
  }
});
