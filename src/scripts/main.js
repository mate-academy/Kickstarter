
document.addEventListener('DOMContentLoaded', function() {
  // Функція для завантаження тексту для обраної мови
  function loadLanguage(lang) {
    const texts = {
      en: {
        'header__top-specs': 'SPECS',
        'header__top-buttons-en': 'EN',
        'header__top-buttons-ua': 'UA',
        'header__top-cta': 'BUY',
        'header__middle-title': 'Futuristic Wireless Speaker',
        'header__middle-description': 'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.',

        'menu__list-nav-ourStory': 'OUR STORY',
        'menu__list-nav-aboutUs': 'ABOUT US',
        'menu__list-nav-features': 'FEATURES',
        'menu__list-nav-getInTouch': 'GET IN TOUCH',
        'menu__items-specs': 'SPECS',
        'menu__button-cta': 'BUY',

        'navigation__link-ourStory': 'OUR STORY',
        'navigation__link-aboutUs': 'ABOUT US',
        'navigation__link-features': 'FEATURES',
        'navigation__link-getInTouch': 'GET IN TOUCH',

        'benefits__card-futuristicDesign-title': 'Futuristic Design',
        'benefits__card-futuristicDesign-text': 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.',
        'benefits__card-tweeterSpeakerSystem-title': 'Tweeter Speaker System',
        'benefits__card-tweeterSpeakerSystem-text': 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.',
        'benefits__card-multiroomSystem-title': 'Multiroom System',
        'benefits__card-multiroomSystem-text': 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.',
        'benefits__card-intuitiveLightingSystem-title': 'Intuitive Lighting System',
        'benefits__card-intuitiveLightingSystem-text': 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.',

        'designed__title': 'DESIGNED FOR THE FUTURE',
        'designed__text': 'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.',
        'designed__link': 'See more about us',

        'luna-eye__title': 'Luna Eye',
        'luna-eye__text': 'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.',
        'luna-eye__link': 'See more about us',

        'response__text': 'It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.',
        'response__author-name': 'Garrett Martin',
        'response__author-job': 'Creative Director',

        'features__section-title': 'FEATURES',
        'features__card-connectivity-title': 'Connectivity',
        'features__card-connectivity-items-01': 'Hands Free Wireless Audio',
        'features__card-connectivity-items-02': 'Bluetooth 4.0 LE',
        'features__card-connectivity-items-03': 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
        'features__card-connectivity-items-04': 'Smart Multiroom System Set Up',
        'features__card-connectivity-items-05': 'Party Mode with 6.0 Units and above',
        'features__card-connectivity-items-06': 'MESHNET Multi Speaker Network',



        'features__card-soundMusic-title': 'Sound & Music',
        'features__card-soundMusic-items-01': 'Feel-in-chest Base Power',
        'features__card-soundMusic-items-02': 'Lossless Digital Audio Transmission',
        'features__card-soundMusic-items-03': 'Easy & Stable Stereo Pairing',
        'features__card-soundMusic-items-04': 'Crisp and Clear High Frequency Sound',
        'features__card-soundMusic-items-05': 'Streams from Cloud Music and Local Library',
        'features__card-soundMusic-items-06': 'Auto Music from Last Song Stopped',

        'features__card-appFeatures-title': 'App Features',
        'features__card-appFeatures-items-01': 'Customize Music Schedule',
        'features__card-appFeatures-items-02': 'Wake Up with Favorite Songs',
        'features__card-appFeatures-items-03': 'Home Detection Auto Wake Up',
        'features__card-appFeatures-items-04': 'Color Wheel',

        'question__title': 'DO YOU HAVE ANY QUESTIONS?',
        'question__form-email-placeholder': 'Your email',
        'question__form-message-placeholder': 'Your message...',
        'question__form-button': 'Send',

        'footer__terms': '© 2019 All rights reserved. Terms of Use & Privacy Policy'
      },
      ua: {
        'header__top-specs': 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ',
        'header__top-buttons-en': 'EN',
        'header__top-buttons-ua': 'UA',
        'header__top-cta': 'КУПИТИ',

        'header__middle-title': 'Футуристична бездротова колонка',
        'header__middle-description': 'Продуктивність Luna збалансована і плавна у всіх частотних діапазонах, що робить музику як природно приємною, так і явно більш багатогранною.',

        'menu__list-nav-ourStory': 'НАША ІСТОРІЯ',
        'menu__list-nav-aboutUs': 'ПРО НАС',
        'menu__list-nav-features': 'ФУНКЦІЇ',
        'menu__list-nav-getInTouch': 'ЗВ’ЯЗАТИСЯ З НАМИ',
        'menu__items-specs': 'ТЕХНІЧНІ ХАРАКТЕРИСТИКИ',
        'menu__button-cta': 'КУПИТИ',

        'navigation__link-ourStory': 'НАША ІСТОРІЯ',
        'navigation__link-aboutUs': 'ПРО НАС',
        'navigation__link-features': 'ФУНКЦІЇ',
        'navigation__link-getInTouch': 'ЗВ’ЯЗАТИСЯ З НАМИ',

        'benefits__card-futuristicDesign-title': 'Футуристичний дизайн',
        'benefits__card-futuristicDesign-text': 'Для досягнення бездоганного вигляду Luna ми спеціально вибрали алюміній авіаційного класу та застосували як тривимірну технологію розтяжного згинання, так і техніку високоточного холодного штампування.',
        'benefits__card-tweeterSpeakerSystem-title': 'Система твітера',
        'benefits__card-tweeterSpeakerSystem-text': 'Для досягнення більш насиченого звукового ефекту, ніж у звичайної широкосмугової колонки, наша команда обладнала Luna додатковим твіттером для відтворення високих частот.',
        'benefits__card-multiroomSystem-title': 'Мультикімнатна система',
        'benefits__card-multiroomSystem-text': 'Luna без проблем інтегрується з вашим домашнім Wi-Fi. Налаштуйте кілька колонок у різних кімнатах, щоб розширити музичний досвід на всю хату.',
        'benefits__card-intuitiveLightingSystem-title': 'Інтуїтивна система освітлення',
        'benefits__card-intuitiveLightingSystem-text': 'Інтуїтивний інтерфейс дозволяє вам регулювати відтінок і насиченість кольору для освітлення, що підходить будь-якому настрою та ситуації.',

        'designed__title': 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО',
        'designed__text': 'У 2014 році група захоплених промислових дизайнерів, інженерів і акустичних експертів створила crazybaby. Це команда захоплених людей, які настільки божевільні, що вважають, що можуть кинути виклик індустрії з допомогою революційних аудіопродуктів.',
        'designed__link': 'Дивитися більше про нас',

        'luna-eye__title': 'Luna Eye',
        'luna-eye__text': 'Luna Eye є суттю цієї інноваційної системи освітлення та звуку. Вона складається з незалежного твіттера, компонента для проведення світла, куполу та обідка.',
        'luna-eye__link': 'Дивитися більше про нас',

        'response__text': 'Мене насправді вразило, що з такого маленького компактного пристрою виходить така повна і гарна звук. І з матовою алюмінієвою поверхнею він виглядає так знайомо. Як мій iPhone.',
        'response__author-name': 'Гарретт Мартін',
        'response__author-job': 'Креативний директор',

        'features__section-title': 'ФУНКЦІЇ',
        'features__card-connectivity-title': 'Зв’язок',
        'features__card-connectivity-items-01': 'Бездротове аудіо без рук',
        'features__card-connectivity-items-02': 'Bluetooth 4.0 LE',
        'features__card-connectivity-items-03': 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
        'features__card-connectivity-items-04': 'Налаштування смарт-мультикімнатної системи',
        'features__card-connectivity-items-05': 'Режим вечірки з 6 і більше одиницями',
        'features__card-connectivity-items-06': 'MESHNET Мережа з кількома колонками',


        'features__card-soundMusic-title': 'Звук і музика',
        'features__card-soundMusic-items-01': 'Звукова потужність, що відчувається у грудях',
        'features__card-soundMusic-items-02': 'Без втрат цифрового аудіо',
        'features__card-soundMusic-items-03': 'Легка і стабільна стереопара',
        'features__card-soundMusic-items-04': 'Чіткий і ясний звук високих частот',
        'features__card-soundMusic-items-05': 'Потокове відтворення з хмарних музичних сервісів та локальної бібліотеки',
        'features__card-soundMusic-items-06': 'Автоматичне відновлення музики з останньої зупинки',

        'features__card-appFeatures-title': 'Функції додатка',
        'features__card-appFeatures-items-01': 'Налаштування розкладу музики',
        'features__card-appFeatures-items-02': 'Пробудження з улюбленими піснями',
        'features__card-appFeatures-items-03': 'Автоматичне пробудження при виявленні вдома',
        'features__card-appFeatures-items-04': 'Колірне колесо',

        'question__title': 'Є ПИТАННЯ?',
        'question__form-email-placeholder': 'Ваша електронна пошта',
        'question__form-message-placeholder': 'Ваше повідомлення...',
        'question__form-button': 'Відправити',

        'footer__terms': '© 2019 Всі права захищені. Умови використання та Політика конфіденційності'
      }
    };

    // Змінюємо текст на сайті відповідно до обраної мови
    Object.keys(texts[lang]).forEach(key => {
      const elements = document.querySelectorAll(`.${key}`);
      elements.forEach(element => {
        if (element) {
          if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = texts[lang][key];
          } else {
            element.textContent = texts[lang][key];
          }
        }
      });
    });

    // Зберігаємо вибір мови у localStorage
    localStorage.setItem('language', lang);

    // Оновлюємо активний стан кнопок
    updateButtonStates(lang);
  }

  // Функція для оновлення активного стану кнопок
  function updateButtonStates(lang) {
    const buttons = document.querySelectorAll('.header__top-buttons-button, .menu__items-buttons-button');
    buttons.forEach(button => {
      if (button.getAttribute('data-lang') === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  // Обробка натискань на кнопки
  function setupLanguageButtons() {
    const languageButtons = document.querySelectorAll('.header__top-buttons-button, .menu__items-buttons-button');
    languageButtons.forEach(button => {
      button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        loadLanguage(lang);
      });
    });
  }

  setupLanguageButtons();

  // Завантажуємо мову з localStorage при завантаженні сторінки
  const savedLanguage = localStorage.getItem('language') || 'en';
  loadLanguage(savedLanguage);
});





document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.features__slider-button-left');
  const nextButton = document.querySelector('.features__slider-button-right');
  const slides = document.querySelectorAll('.features__card');
  const totalSlides = slides.length;
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    updateSlideNumber(index);
  }

  function updateSlideNumber(index) {
    document.querySelector('.features__slider-one').textContent = ('0' + (index + 1)).slice(-2);
    document.querySelector('.features__slider-two').textContent = ('0' + totalSlides).slice(-2);
  }

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  });

  // Initialize the first slide
  showSlide(currentSlide);
});


window.addEventListener('hashchange', (event) => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

