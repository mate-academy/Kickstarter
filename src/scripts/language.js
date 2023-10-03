'use strict';

const input = document.querySelector('.get-in-touch__input-email');
const textbox = document.querySelector('.get-in-touch__input-message');
const enButton = document.querySelector('.language__english');
const uaButton = document.querySelector('.language__ukrainian');
const enButtonMobile = document.querySelector('.language__english--mobile');
const uaButtonMobile = document.querySelector('.language__ukrainian--mobile');

const translations = {
  en: {
    buy: 'buy',
    specs: 'specs',
    futuristic: 'Futuristic Wireless Speaker',
    lunas: 'Luna’s performance is balanced and smooth'
    + 'in all frequency ranges which makes the music both'
    + 'naturally pleasant and distinctly more layered.',

    ourstory: 'our story',
    aboutus: 'about us',
    features: 'features',
    getintouch: 'get in touch',
    futuristicdesign: 'Futuristic Design',
    togiveluna: 'To give Luna a truly flawless look, we'
     + 'specifically picked aircraft grade aluminum as its'
     + 'material and adopted both three-dimensional stretch-bending '
     + 'technology and a high precision cold forging technique.',
    tweeter: 'Tweeter Speaker System',
    todeliver: 'To deliver a more layered sound performance'
    + ' better than a sole full-range speaker, our team equipped '
    + 'Luna with one more tweeter speaker responsible '
    + 'for high-frequency sound independently.',
    multiroom: 'Multiroom System',
    lunaisnatively: 'Luna is natively compatible with your home Wi-Fi. Set '
    + 'up multiple speakers in different rooms to '
    + 'expand your music experience into the entire house.',
    intuitive: 'Intuitive Lighting System',
    anintuitive: 'An intuitive user interface allows you to adjust '
    + 'the hue and saturation of color for lighting '
    + 'that fits any mood and situation.',
    designerforthe: 'DESIGNED FOR THE FUTURE',
    inagroupofgeeky: 'In 2014, a group of geeky industrial '
    + 'designers, engineering veterans and acoustic experts '
    + 'formed crazybaby. This is a bunch of passionate people '
    + 'who are crazy enough to think they can challenge '
    + 'the industry with disruptive audio products.',
    seemore: 'See more about us',
    lunaeye: 'Luna Eye',
    lunaeayistothe: 'Luna Eye is to the essence of this '
    + 'innovative light and audio system. It comprises an '
    + 'independent tweeter speaker, a light guiding component, '
    + 'a dome and a ring ornament.',
    itreallytook: '“It really took me by surprise honestly to have '
    + 'such full beautiful sound that coming out of this small compact '
    + 'device. And with the brush aluminum surface, it feels '
    + 'so familiar. Like my iPhone.”',
    gerrett: 'Garrett Martin',
    creativedirector: 'Creative Director',
    featurestitle: 'features',
    connectivity: 'Connectivity',
    handsfree: 'Hands Free Wireless Audio',
    bluetooth: 'Bluetooth 4.0 LE',
    wifi: 'Wi-Fi 2.4 GHz (802.11 b/g/n)',
    smartmultiroom: 'Smart Multiroom System Set Up',
    partymode: 'Party Mode with 6.0 Units and above',
    meshnet: 'MESHNET Multi Speaker Network',
    appfeatures: 'App Features',
    customizemusic: 'Customize Music Schedule',
    wakeup: 'Wake Up with Favorite Songs',
    homedetection: 'Home Detection Auto Wake Up',
    colorwheel: 'Color Wheel',
    soundmusik: 'Sound & Music',
    feelin: 'Feel-in-chest Base Power',
    lossless: 'Lossless Digital Audio Transmission',
    easy: 'Easy & Stable Stereo Pairing',
    crisp: 'Crisp and Clear High Frequency Sound',
    streams: 'Streams from Cloud Music and Local Library',
    automusik: 'Auto Music from Last Song Stopped',
    doyouhave: 'do you have any questions?',
    send: 'send',
    allright: '© 2019 All rights reserved. Terms of Use & Privacy Policy',
  },
  ua: {
    buy: 'купити',
    specs: 'специфікації',
    futuristic: 'Сучасний мобільний динамік',
    lunas: 'Гра Luna збалансована та плавна у всіх '
    + 'частотних діапазонах, що робить музику природно '
    + 'приємною та помітно більш багатошаровою.',
    ourstory: 'наша історія',
    aboutus: 'про нас',
    features: 'особливості',
    getintouch: 'будемо на звязку',
    futuristicdesign: 'Футуристичний дизайн',
    togiveluna: 'Щоб надати Luna справді бездоганного '
    + 'вигляду, ми спеціально вибрали авіаційний алюміній '
    + 'як його матеріал і застосували як тривимірну технологію '
    + 'розтягування, так і технологію високоточного холодного кування.',
    tweeter: 'Акустична система твітера',
    todeliver: 'Щоб забезпечити більш багатошаровий звук, '
    + 'кращий, ніж єдиний повнодіапазонний динамік, наша команда '
    + 'оснастила Luna ще одним твітерним динаміком, який відповідає '
    + 'за високочастотний звук незалежно.',
    multiroom: 'Система Multiroom',
    lunaisnatively: 'Luna нативно сумісна з домашнім Wi-Fi. '
    + 'Встановіть кілька динаміків у різних кімнатах, щоб розширити '
    + 'музичний досвід у всьому будинку.',
    intuitive: 'Інтуїтивно зрозуміла система освітлення',
    anintuitive: 'Інтуїтивно зрозумілий інтерфейс користувача '
    + 'дозволяє регулювати відтінок і насиченість кольорів '
    + 'для освітлення, яке відповідає будь-якому настрою та ситуації.',
    designerforthe: 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО',
    inagroupofgeeky: 'У 2014 році група промислових дизайнерів, '
    + 'ветеранів техніки та експертів з акустики створила crazybaby. '
    + 'Це група пристрасних людей, які настільки божевільні, щоб думати, '
    + 'що можуть кинути виклик індустрії за допомогою руйнівних '
    + 'аудіопродуктів.',
    seemore: 'Дізнайтеся більше про нас',
    lunaeye: 'Місячне око',
    lunaeayistothe: 'Luna Eye — суть цієї інноваційної системи '
    + 'освітлення та аудіосистеми. Він складається з незалежного '
    + 'високочастотного динаміка, світловодного компонента, купола '
    + 'та кільцевого орнаменту.',
    itreallytook: '"Мене, чесно кажучи, дуже здивувало, коли я '
    + 'отримав такий чудовий звук, який виходив із цього маленького '
    + 'компактного пристрою. А завдяки щітковій алюмінієвій поверхні '
    + 'це так знайомо. Як мій iPhone".',
    gerrett: 'Гаррет Мартін',
    creativedirector: 'Креативний директор',
    featurestitle: 'особливості',
    connectivity: 'Підключення',
    handsfree: 'Бездротова аудіосистема Hands Free',
    bluetooth: 'Блютуз 4.0 LE',
    wifi: 'ВАЙ-ФАЙ 2,4 ГГц (802.11 b/g/n)',
    smartmultiroom: 'Налаштування системи Smart Multiroom',
    partymode: 'Режим вечірки з одиницями 6.0 і вище',
    meshnet: 'Мережа з декількома гучномовцями MESHNET',
    appfeatures: 'Функції програми',
    customizemusic: 'Налаштуйте музичний розклад',
    wakeup: 'Прокидайтеся з улюбленими піснями',
    homedetection: 'Автоматичне розпізнавання будинку',
    colorwheel: 'Колірне коло',
    soundmusik: 'Звук і музика',
    feelin: 'Базова потужність відчуття в грудяхs',
    lossless: 'Передача цифрового звуку без втрат',
    easy: 'Легке та стабільне стереоз’єднання',
    crisp: 'Чіткий і чистий високочастотний звук',
    streams: 'Потоки з Cloud Music і локальної бібліотеки',
    automusik: 'Автоматична зупинка музики з останньої пісні',
    doyouhave: 'у вас є які-небудь питання?',
    send: 'відправити',
    allright: '© 2019 Усі права захищено. Умови використання та '
    + 'політика конфіденційності',
  },
};

function changeLanguage(lang) {
  const elementsToTranslate = document.querySelectorAll('[data-translate]');

  elementsToTranslate.forEach(element => {
    const textKey = element.getAttribute('data-translate');

    if (translations[lang] && translations[lang][textKey]) {
      element.textContent = translations[lang][textKey];
    }
  });
}

enButton.addEventListener('click', () => {
  changeLanguage('en');
  input.placeholder = 'Your email';
  textbox.placeholder = 'Your message...';
  enButton.style.color = '#333';
  uaButton.style.color = '#828282';
});

uaButton.addEventListener('click', () => {
  changeLanguage('ua');
  input.placeholder = 'Ваша електронна адреса';
  textbox.placeholder = 'Ваше повідомлення...';
  enButton.style.color = '#828282';
  uaButton.style.color = '#333';
});

enButtonMobile.addEventListener('click', () => {
  changeLanguage('en');
  input.placeholder = 'Your email';
  textbox.placeholder = 'Your message...';
  enButtonMobile.style.color = '#333';
  uaButtonMobile.style.color = '#828282';
});

uaButtonMobile.addEventListener('click', () => {
  changeLanguage('ua');
  input.placeholder = 'Ваша електронна адреса';
  textbox.placeholder = 'Ваше повідомлення...';
  enButtonMobile.style.color = '#828282';
  uaButtonMobile.style.color = '#333';
});

changeLanguage('en');
