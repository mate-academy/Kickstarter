'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const translations = {
    en: {
      specs: 'SPECS',
      buy: 'BUY',
      headerTitle: 'FUTURISTIC<br>WIRELESS<br>SPEAKER',
      headerSubtitle:
        'Luna’s performance is balanced and smooth in all' +
        'frequency ranges which makes the music both naturally' +
        'pleasant and distinctly more layered.',
      ourStory: 'OUR STORY',
      aboutUs: 'ABOUT US',
      features: 'FEATURES',
      getInTouch: 'GET IN TOUCH',
      designTitle: 'Futuristic Design',
      designText:
        'To give Luna a truly flawless look,' +
        'we specifically picked aircraft grade aluminum as its material' +
        'and adopted both  three-dimensional stretch-bending technology' +
        'and a high precision cold forging technique.',
      tweeterTitle: 'Tweeter Speaker System',
      tweeterText:
        'To deliver a more layered sound performance better than a sole' +
        'full-range speaker, our team equipped Luna with one more tweeter' +
        'speaker responsible for high-frequency sound independently.',
      multiroomTitle: 'Multiroom System',
      multiroomText:
        'Luna is natively compatible with your home Wi-Fi.' +
        'Set up multiple speakers in different' +
        'rooms to expand your music experience into the entire house.',
      intuitiveTitle: 'Intuitive Lighting System',
      intuitiveText:
        'An intuitive user interface allows you to adjust the hue' +
        'and saturation of color for lighting' +
        'that fits any mood and situation.',
      designedTitle: 'DESIGNED FOR THE FUTURE',
      designedText:
        'In 2014, a group of geeky industrial designers, engineering veterans' +
        ' and acoustic experts formed crazybaby. This is a bunch of' +
        'passionate people who are crazy enough to think they can challenge' +
        'the industry with disruptive audio products.',
      designedLink: 'SEE MORE ABOUT US',
      lunaTitle: 'LUNA EYE',
      lunaText:
        'Luna Eye is to the essence of this innovative light and audio ' +
        'system. It comprises an independent tweeter speaker, a light ' +
        'guiding component, a dome and a ring ornament.',
      lunaLink: 'SEE MORE ABOUT US',
      testimonialText:
        'It really took me by surprise honestly to have such full beautiful ' +
        'sound that coming out of this small compact device. And with ' +
        ' the brush aluminum surface, it feels so familiar. Like my iPhone.',
      name: 'Garrett Martin',
      director: 'Creative Director',
      connectivity: 'CONNECTIVITY',
      wireless: 'Hands Free Wireless Audio',
      multiroomSystem: 'Smart Multiroom System Set UpE',
      partyMode: 'Party Mode with 6.0 Units and above',
      meshnet: 'MESHNET Multi Speaker Network',
      appFeatures: 'App Features',
      musicSchedule: 'Customize Music Schedule',
      wakeUp: 'Wake Up with Favorite Songs',
      detectionAuto: 'Home Detection Auto Wake Up',
      colorWheel: 'Color Wheel',
      soundMusic: 'Sound & Music',
      basePower: 'Feel-in-chest Base Power',
      digitalAudio: 'Lossless Digital Audio Transmission',
      stereoPairing: 'Easy & Stable Stereo Pairing',
      frequencySound: 'Crisp and Clear High Frequency Sound',
      streams: 'Streams from Cloud Music and Local Library',
      autoMusic: 'Auto Music from Last Song Stopped',
      questions: 'DO YOU HAVE ANY QUESTIONS?',
      send: 'Send',
      allRights: '© 2019 All rights reserved. Terms of Use & Privacy Policy',
    },
    ua: {
      specs: 'ХАРАКТЕРИСТИКИ',
      buy: 'КУПИТИ',
      headerTitle: 'ПРОГРЕСИВНА<br>СМАРТ<br>КОЛОНКА',
      headerSubtitle:
        'Звучання Luna збалансоване і плавне у всіх частотних ' +
        'діапазнах, що робить музику природно приємною і ' +
        'водночас більш багатошаровою.',
      ourStory: 'НАША ІСТОРІЯ',
      aboutUs: 'ПРО НАС',
      features: 'МОЖЛИВОСТІ',
      getInTouch: 'ЗВ’ЯЗАТИСЯ',
      designTitle: 'Футуристичний дизайн',
      designText:
        'Щоб надати Luna бездоганний вигляд, ми обрали авіаційний алюміній ' +
        'як матеріал і застосували технологію тривимірного гнуття ' +
        'та високоточне холодне кування.',

      tweeterTitle: 'Акустична ВЧ-система',
      tweeterText:
        'Щоб забезпечити більш багаторівневе звучання, ніж у єдиного ' +
        'повнодіапазонного динаміка, наша команда оснастила Luna ще одним ' +
        'високочастотним динаміком, який відповідає за високочастотне ' +
        'звучання незалежно від нього.',
      multiroomTitle: 'Мультирум система',
      multiroomText:
        'Luna сумісна з вашим домашнім Wi-Fi. ' +
        'Встановіть кілька колонок у різних кімнатах, ' +
        'щоб розширити можливості прослуховування музики в усьому будинку.',
      intuitiveTitle: 'Інтуїтивне освітлення',
      intuitiveText:
        'Інтуїтивно зрозумілий користувацький інтерфейс дозволяє ' +
        'налаштувати відтінок і насиченість кольору для освітлення, ' +
        'що відповідає будь-якому настрою і ситуації.',
      designedTitle: 'СТВОРЕНІ ДЛЯ МАЙБУТНЬОГО',
      designedText:
        'У 2014 році група дивакуватих промислових дизайнерів, ветеранів ' +
        'інженерії та експертів з акустики заснували crazybaby. Це група ' +
        'пристрасних людей, які настільки божевільні, що вважають, що можуть ' +
        'кинути виклик індустрії, створивши революційні аудіопродукти. ',
      designedLink: 'ДІЗНАЙТЕСЯ БІЛЬШЕ ПРО НАС',
      lunaTitle: 'МІСЯЧНЕ ОКО',
      lunaText:
        'Місячне Око - це суть цієї інноваційної світло-аудіосистеми. ' +
        'Вона складається з незалежного високочастотного динаміка, ' +
        'світловодного компонента, купола та кільцевої прикраси.',
      lunaLink: 'ДІЗНАЙТЕСЯ БІЛЬШЕ ПРО НАС',
      testimonialText:
        '"Чесно кажучи, я був здивований таким повним і красивим звучанням, ' +
        'яке виходить з цього маленького компактного пристрою. А завдяки ' +
        ' матовій алюмінієвій поверхні він відчувається ' +
        'таким знайомим. Як мій iPhone”',
      name: 'Гарретт Мартін',
      director: 'Креативний Директор',
      connectivity: "ЗВ'ЯЗОК",
      wireless: 'Бездротовий аудіо зв\'язок "Вільні руки"',
      multiroomSystem: 'Налаштування мультирум-системи',
      partyMode: 'Режим вечірки з 6.0 пристроями і вище',
      meshnet: 'MESHNET Мережа з декількома динаміками',
      appFeatures: 'ФУНКЦІЇ ПРОГРАМИ',
      musicSchedule: 'Налаштуйте музичний розклад',
      wakeUp: 'Прокидайтеся з улюбленими піснями',
      detectionAuto: 'Автоматичне пробудження при виявленні будинку',
      colorWheel: 'Кольорове колесо',
      soundMusic: 'ЗВУК І МУЗИКА',
      basePower: 'Базова потужність, що відчувається в грудях',
      digitalAudio: 'Передача цифрового аудіо без втрат',
      stereoPairing: 'Просте та стабільне стереосполучення',
      frequencySound: 'Чіткий і чистий високочастотний звук',
      streams: 'Стримінг з хмари та локальної бібліотеки',
      autoMusic: 'Автоматичне відтворення музики з останньої зупиненої пісні',
      questions: 'У ВАС Є ЗАПИТАННЯ?',
      send: 'НАДІСЛАТИ',
      allRights:
        '© 2019 Всі права захищені. ' +
        'Умови використання та політика конфіденційності',
    },
  };

  function setLanguage(lang) {
    const t = translations[lang];

    document.querySelector('.top-bar__icons > div').textContent = t.specs;
    document.querySelector('.icon--buy').textContent = t.buy;
    document.querySelector('.header__title').innerHTML = t.headerTitle;

    document.querySelector('.header__title--low').textContent =
      t.headerSubtitle;
    document.querySelector('a[href="#our story"]').textContent = t.ourStory;
    document.querySelector('a[href="#about us"]').textContent = t.aboutUs;
    document.querySelector('a[href="#features"]').textContent = t.features;
    document.querySelector('a[href="#cart"]').textContent = t.getInTouch;

    document.querySelector('.testimonial__text').textContent =
      t.testimonialText;
    document.querySelector('.testimonial__name').textContent = t.name;
    document.querySelector('.testimonial__position').textContent = t.director;

    document.querySelector('.characteristics__title').textContent =
      t.connectivity;
    document.querySelector('.connection__title').textContent = t.questions;
    document.querySelectorAll('.product__title')[0].textContent = t.designTitle;

    document.querySelectorAll('.product__description')[0].textContent =
      t.designText;

    document.querySelectorAll('.product__title')[1].textContent =
      t.tweeterTitle;

    document.querySelectorAll('.product__description')[1].textContent =
      t.tweeterText;

    document.querySelectorAll('.product__title')[2].textContent =
      t.multiroomTitle;

    document.querySelectorAll('.product__description')[2].textContent =
      t.multiroomText;

    document.querySelectorAll('.product__title')[3].textContent =
      t.intuitiveTitle;

    document.querySelectorAll('.product__description')[3].textContent =
      t.intuitiveText;

    document.querySelectorAll('.facts__title')[0].textContent = t.designedTitle;

    document.querySelectorAll('.facts__title--low')[0].textContent =
      t.designedText;

    document.querySelectorAll('.facts__link')[0].textContent = t.designedLink;
    document.querySelectorAll('.facts__title')[1].textContent = t.lunaTitle;

    document.querySelectorAll('.facts__title--low')[1].textContent = t.lunaText;

    document.querySelectorAll('.facts__link')[1].textContent = t.lunaLink;

    document.querySelectorAll('.characteristics__description')[0].textContent =
      t.wireless;

    document.querySelectorAll('.characteristics__description')[3].textContent =
      t.multiroomSystem;

    document.querySelectorAll('.characteristics__description')[4].textContent =
      t.partyMode;

    document.querySelectorAll('.characteristics__description')[5].textContent =
      t.meshnet;

    document.querySelectorAll('.characteristics__title')[1].textContent =
      t.appFeatures;

    document.querySelectorAll('.characteristics__description')[6].textContent =
      t.musicSchedule;

    document.querySelectorAll('.characteristics__description')[7].textContent =
      t.wakeUp;

    document.querySelectorAll('.characteristics__description')[8].textContent =
      t.detectionAuto;

    document.querySelectorAll('.characteristics__description')[9].textContent =
      t.colorWheel;

    document.querySelectorAll('.characteristics__title')[2].textContent =
      t.soundMusic;

    document.querySelectorAll('.characteristics__description')[10].textContent =
      t.basePower;

    document.querySelectorAll('.characteristics__description')[11].textContent =
      t.digitalAudio;

    document.querySelectorAll('.characteristics__description')[12].textContent =
      t.stereoPairing;

    document.querySelectorAll('.characteristics__description')[13].textContent =
      t.frequencySound;

    document.querySelectorAll('.characteristics__description')[14].textContent =
      t.streams;

    document.querySelectorAll('.characteristics__description')[15].textContent =
      t.autoMusic;

    document.querySelector('.connection__button').textContent = t.send;
    document.querySelector('.copyright').textContent = t.allRights;

    document
      .querySelector('#email')
      .setAttribute('placeholder', 'Ваш email...');

    document
      .querySelector('#message')
      .setAttribute('placeholder', 'Ваше повідомлення...');
  }

  document.querySelectorAll('.icon--switcher button').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');

let current = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.remove('active', 'prev', 'next');

    if (i === index) {
      s.classList.add('active');
    } else if (i < index) {
      s.classList.add('prev');
    } else {
      s.classList.add('next');
    }
  });

  indicator.textContent = `${String(index + 1).padStart(2, '0')} / 0${slides.length}`;

  prev.disabled = index === 0;
  next.disabled = index === slides.length - 1;
}

prev.addEventListener('click', () => {
  if (current > 0) {
    current--;
    showSlide(current);
  }
});

next.addEventListener('click', () => {
  if (current < slides.length - 1) {
    current++;
    showSlide(current);
  }
});

showSlide(current);

// window.addEventListener('resize', () => showSlide(current));
