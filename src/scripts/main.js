'use strict';

const enButton = document.querySelector('.languages--en');
const uaButton = document.querySelector('.languages--ua');
const toggle = document.querySelector('.languages');
const enButtonMob = document.querySelector('.languages--eng');
const uaButtonMob = document.querySelector('.languages--ukr');
const toggleMob = document.querySelector('.languages--menu');
const title = document.querySelector('.header__title');
const questionButton = document.querySelector('.questions__button');
const textarea = document.querySelector('.questions__input--textarea');
const email = document.querySelector('.questions__input--email');
const formSubmit = document.querySelector('.questions__form');
const inputs = document.querySelectorAll('.questions__input');
const featuresCategories = document.querySelector('.features__blocks');
const backBtn = document.querySelector('.features__btn--left');
const forwardBtn = document.querySelector('.features__btn--right');
const sliderFirst = document.querySelector('.features__first-num');
const sliderLast = document.querySelector('.features__last-num');

function setSuccessState() {
  textarea.classList.add('questions__input--success');
  email.classList.add('questions__input--success');
}

function unsetSuccessState() {
  for (const input of inputs) {
    input.classList.remove('questions__input--success');
    input.classList.add('.questions__input--default');
  }
}

const translations = {
  'EN': {
    'languages--en': 'EN',
    'languages--ua': 'UA',
    'top-actions__button': 'Buy',
    'menu__button': 'Buy',
    'header__title': 'Futuristic Wireless Speaker',
    'header__text': 'Luna\'s performance is balanced and smooth'
    + ' in all frequency ranges which makes the music'
    + ' both naturally pleasant and distinctly more layered.',
    'list__story': 'OUR STORY',
    'list__about': 'ABOUT US',
    'list__tech': 'TECHNOLOGY',
    'list__features': 'FEATURES',
    'list__getintouch': 'GET IN TOUCH',
    'list--story': 'OUR STORY',
    'list--about': 'ABOUT US',
    'list--tech': 'TECHNOLOGY',
    'list--features': 'FEATURES',
    'list--getin': 'GET IN TOUCH',
    'benefit__title__design': 'Futuristic Design',
    'benefit__text__design': 'To give Luna a truly flawless look,'
    + ' we specifically picked aircraft grade aluminum as its material and'
    + ' adopted both three-dimensional stretch-bending technology and'
    + ' a high precision cold forging technique.',
    'benefit__title__tweeter': 'Tweeter Speaker System',
    'benefit__text__tweeter': 'To deliver a more layered sound performance'
    + ' better than a sole full-range speaker, '
    + 'our team equipped Luna with one more tweeter speaker'
    + ' responsible for high-frequency sound independently.',
    'benefit__title__multi': 'Multiroom System',
    'benefit__text__multi': 'Luna is natively compatible'
    + ' with your home Wi-Fi. Set up multiple speakers'
    + ' in different rooms to expand your music experience'
    + ' into the entire house.',
    'benefit__title__light': 'Intuitive Lighting System',
    'benefit__text__light': 'An intuitive user interface'
    + ' allows you to adjust the hue and saturation of color for'
    + ' lighting that fits any mood and situation.',
    'about__title': 'DESIGNED FOR THE FUTURE',
    'about__text': 'In 2014, a group of geeky industrial designers'
    + ', engineering veterans and acoustic experts formed crazybaby. This is'
    + ' a bunch of passionate people who are crazy enough to think they'
    + ' can challenge the industry with disruptive audio products.',
    'about__us': 'See more about us',
    'about__title--reversed': 'Luna Eye',
    'about__eye': 'Luna Eye is to the essence of'
    + ' this innovative light and audio system. It comprises an independent'
    + ' tweeter speaker, a light guiding component, '
    + 'a dome and a ring ornament.',
    'about__link-translate': 'See more about us',
    'technology__text': 'It really took me by surprise'
    + ' honestly to have such full beautiful sound that coming out of this'
    + ' small compact device. And with the brush aluminum surface,'
    + ' it feels so familiar. Like my iPhone.',
    'technology__name': 'Garrett Martin',
    'technology__position': 'Creative Director',
    'features__title': 'FEATURES',
    'features__conect': 'Connectivity',
    'features__audio': 'Hands Free Wireless Audio',
    'features__bluetooth': 'Bluetooth 4.0 LE',
    'features__wifi': 'Wi-Fi 2.4 GHz',
    'features__multi': 'Smart Multiroom System Set Up',
    'features__mode': 'Party Mode with 6.0 Units and above',
    'features__net': 'MESHNET Multi Speaker Network',
    'features__sound': 'Sound & Music',
    'features__power': 'Feel-in-chest Base Power',
    'features__trans': 'Lossless Digital Audio Transmission',
    'features__stereo': 'Easy & Stable Stereo Pairing',
    'features__sounds': 'Crisp and Clear High Frequency Sound',
    'features__music': 'Streams from Cloud Music and Local Library',
    'features__auto': 'Auto Music from Last Song Stopped',
    'features__app': 'App Features',
    'features__shedule': 'Customize Music Schedule',
    'features__clock': 'Wake Up with Favorite Songs',
    'features__detection': 'Home Detection Auto Wake Up',
    'features__color': 'Color Wheel',
    'questions__title': 'DO YOU HAVE ANY QUESTIONS?',

  },
  'UA': {
    'languages--en': 'АНГ',
    'languages--ua': 'УКР',
    'top-actions__button': 'Купити',
    'menu__button': 'Купити',
    'header__title': 'БЕЗДРОТОВА АКУСТИЧНА СИСТЕМА МАЙБУТНЬОГО',
    'header__text': 'Звучання Луни збалансоване і плавне'
    + ' у всіх діапазонах частот,'
    + ' що робить музику природно приємною і помітно багатшою.',
    'list__story': 'НАША ІСТОРІЯ',
    'list__about': 'ПРО НАС',
    'list__tech': 'ТЕХНОЛОГІЯ',
    'list__features': 'ОСОБЛИВОСТІ',
    'list__getintouch': 'КОНТАКТИ',
    'list--story': 'НАША ІСТОРІЯ',
    'list--about': 'ПРО НАС',
    'list--tech': 'ТЕХНОЛОГІЯ',
    'list--features': 'ОСОБЛИВОСТІ',
    'list--getin': 'КОНТАКТИ',
    'benefit__title__design': 'Футуристичний дизайн',
    'benefit__text__design': 'Щоб надати Луні по-справжньому бездоганний вигляд'
    + ', ми спеціально вибрали алюміній авіаційного класу як матеріал'
    + ' і використовували технологію тривимірного розтягування-згину'
    + ' та високоточне холодне штампування.',
    'benefit__title__tweeter': 'Нова система динаміків',
    'benefit__text__tweeter': 'Для забезпечення багатошарової звукової'
    + ' продуктивності, кращої, ніж у простого динаміка з повним діапазоном,'
    + ' наша команда оснастила Луну ще одним твітером,'
    + ' який відповідає за високочастотний звук.',
    'benefit__title__multi': 'Система Multiroom',
    'benefit__text__multi': 'Луна має вбудовану сумісність з'
    + ' домашньою Wi-Fi мережею. Встановіть кілька динаміків'
    + ' у різних кімнатах, щоб розширити свій музичний досвід на всю оселю.',
    'benefit__title__light': 'Система підсвічування',
    'benefit__text__light': 'Інтуїтивний інтерфейс користувача'
    + ' дозволяє вам налаштовувати відтінок і насиченість кольору'
    + ' для підсвічування, яке відповідає будь-якому настрою та ситуації.',
    'about__title': 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО',
    'about__text': 'У 2014 році група дизайнерів'
    + ' промислового обладнання, ветеранів інженерії та експертів з акустики'
    + ' створила crazybaby. Це команда людей, які'
    + ' настільки сміливі, що роблять виклик галузі за допомогою'
    + ' революційних аудіопродуктів.',
    'about__us': 'Більше про нас',
    'about__title--reversed': 'Око Луни',
    'about__eye': 'Око Луни - це сукупність'
    + ' інноваційної системи світла та звуку. Вона складається з'
    + ' незалежного твітер-динаміка, компонента для направлення світла,'
    + ' купола та орнаменту кільця.',
    'about__link-translate': 'Більше про нас',
    'technology__text': 'Це дійсно вразило мене, чесно кажучи,'
    + ' я не очікував отримати настільки повний і прекрасний звук від'
    + ' такого компактного пристрою. З гладким алюмінієвим покриттям,'
    + ' він відчувається так знайомо. Як мій iPhone.',
    'technology__name': 'Гаррет Мартін',
    'technology__position': 'Креативний Директор',
    'features__title': 'ОСОБЛИВОСТІ',
    'features__conect': 'Підключення',
    'features__audio': 'Бездротове Аудіо без Необхідності Використання Рук',
    'features__bluetooth': 'Блютуз 4.0 LE',
    'features__wifi': 'Wi-Fi 2.4 GHz',
    'features__multi': 'Розумне Налаштування Системи Multiroom',
    'features__mode': 'Режим Вечірки з 6.0 Пристроями або більше',
    'features__net': 'Мережа MeshNet для Підключення Кількох Динаміків',
    'features__sound': 'Звук та Музика',
    'features__power': 'Потужний Бас, Відчутний у Грудях',
    'features__trans': 'Передача Цифрового Звуку без Втрат',
    'features__stereo': 'Легке та Стабільне Стереоз’єднання',
    'features__sounds': 'Чіткий і Чистий Високочастотний Звук',
    'features__music': 'Стріми з Cloud Music і Локальної Бібліотеки',
    'features__auto': 'Автоматичне Програвання Музики з Останньої Пісні',
    'features__app': 'Функції Додатку',
    'features__shedule': 'Налаштування Розкладу Музики',
    'features__clock': 'Прокидайся з Улюбленою Музикою',
    'features__detection': 'Автоматичне Прокидання при'
    + ' Виявленні Домашньої Мережі',
    'features__color': 'Кольорове Колесо',
    'questions__title': 'У ВАС Є ЗАПИТАННЯ?',
  },
};

function changeLanguage(lang) {
  const translation = translations[lang];

  for (const key in translation) {
    const element = document.querySelector(`.${key}`);

    if (element) {
      element.textContent = translation[key];
    }
  }
}

toggle.addEventListener('click', (e) => {
  if (e.target.className.includes('languages--ua')) {
    uaButton.style.color = '#333';
    enButton.style.color = '#bdbdbd';
    title.style.fontSize = '50px';
    title.style.lineHeight = '60px';
    questionButton.value = 'Надіслати';
    textarea.placeholder = 'Ваше повідомлення...';
    email.placeholder = 'Ваша пошта';
    changeLanguage('UA');
  } else {
    enButton.style.color = '#333';
    uaButton.style.color = '#bdbdbd';
    title.style.fontSize = '62px';
    title.style.lineHeight = '78px';
    questionButton.value = 'Send';
    textarea.placeholder = 'Your message...';
    email.placeholder = 'Your email';
    changeLanguage('EN');
  }
});

toggleMob.addEventListener('click', (e) => {
  if (e.target.className.includes('languages--ukr')) {
    uaButtonMob.style.color = '#333';
    enButtonMob.style.color = '#bdbdbd';
    title.style.fontSize = '50px';
    title.style.lineHeight = '60px';
    questionButton.value = 'Надіслати';
    textarea.placeholder = 'Ваше повідомлення...';
    email.placeholder = 'Ваша пошта';
    changeLanguage('UA');
  } else {
    enButtonMob.style.color = '#333';
    uaButtonMob.style.color = '#bdbdbd';
    title.style.fontSize = '62px';
    title.style.lineHeight = '78px';
    questionButton.value = 'Send';
    textarea.placeholder = 'Your message...';
    email.placeholder = 'Your email';
    changeLanguage('EN');
  }
});

formSubmit.addEventListener('submit', function(event) {
  event.preventDefault();
  formSubmit.reset();
  setSuccessState();
  setTimeout(unsetSuccessState, 200);
});

function slider(
  sliderItemsContainer, backButton,
  forwardButton, sliderOrder,
  sliderItemsNumberText
) {
  const sliderItems = Array.from(
    sliderItemsContainer.querySelectorAll('.features__block')
  );
  const sliderItemsAmount = sliderItems.length;

  sliderItemsNumberText.textContent = `0${sliderItemsAmount}`;

  let sliderPosition = 0;
  const endPosition = sliderItemsAmount - 1;

  sliderOrder.textContent = `0${sliderPosition + 1}`;

  if (sliderPosition === 0) {
    backButton.setAttribute('disabled', 'true');
  } else if (sliderPosition === endPosition) {
    forwardButton.setAttribute('disabled', 'true');
  }

  forwardButton.addEventListener('click', function() {
    if (sliderPosition < endPosition) {
      sliderPosition++;

      sliderOrder.textContent = `0${sliderPosition + 1}`;

      backButton.removeAttribute('disabled');
      forwardButton.removeAttribute('disabled');

      if (sliderPosition === endPosition) {
        forwardButton.setAttribute('disabled', 'true');
      }

      sliderItems.forEach((item, index) => {
        item.style.display = index === sliderPosition ? 'block' : 'none';
      });
    }
  });

  backButton.addEventListener('click', function() {
    if (sliderPosition > 0) {
      sliderPosition--;

      sliderOrder.textContent = `0${sliderPosition + 1}`;

      backButton.removeAttribute('disabled');
      forwardButton.removeAttribute('disabled');

      if (sliderPosition === 0) {
        backButton.setAttribute('disabled', 'true');
      }

      sliderItems.forEach((item, index) => {
        item.style.display = index === sliderPosition ? 'block' : 'none';
      });
    }
  });

  function updateSliderLayout() {
    if (window.innerWidth > 1024) {
      sliderItems.forEach((item) => {
        item.style.display = 'block';
      });
    }

    if (window.innerWidth <= 1024) {
      sliderItems.forEach((item, index) => {
        item.style.display = index === sliderPosition ? 'block' : 'none';
      });
    }
  }

  window.addEventListener('resize', updateSliderLayout);

  updateSliderLayout();
}

slider(
  featuresCategories, backBtn, forwardBtn, sliderFirst, sliderLast
);

if (window.location.hash === '#menu') {
  document.body.classList.add('page__body--with-menu');
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
