'use strict';

const english = document.getElementById('en');
const ukrainian = document.getElementById('ua');
const dd1 = document.getElementById('d1');
const dd2 = document.getElementById('d2');
const dd3 = document.getElementById('d3');
const dd4 = document.getElementById('d4');
const dd5 = document.getElementById('d5');
const dd6 = document.getElementById('d6');
const dd7 = document.getElementById('d7');
const dd8 = document.getElementById('d8');
const dd9 = document.getElementById('d9');
const dd10 = document.getElementById('d10');
const dd11 = document.getElementById('d11');
const dd12 = document.getElementById('d12');
const dd13 = document.getElementById('d13');
const dd14 = document.getElementById('d14');
const dd15 = document.getElementById('d15');
const dd16 = document.getElementById('d16');
const dd17 = document.getElementById('d17');
const dd18 = document.getElementById('d18');
const dd19 = document.getElementById('d19');
const dd20 = document.getElementById('d20');
const dd21 = document.getElementById('d21');
const dd22 = document.getElementById('d22');
const dd23 = document.getElementById('d23');
const dd24 = document.getElementById('d24');
const dd25 = document.getElementById('d25');
const dd26 = document.getElementById('d26');
const dd27 = document.getElementById('d27');
const dd28 = document.getElementById('d28');
const dd29 = document.getElementById('d29');
const dd30 = document.getElementById('d30');
const dd31 = document.getElementById('d31');
const dd32 = document.getElementById('d32');
const dd33 = document.getElementById('d33');
const dd34 = document.getElementById('d34');
const dd35 = document.getElementById('d35');
const dd36 = document.getElementById('d36');
const dd37 = document.getElementById('d37');
const dd38 = document.getElementById('d38');
const dd39 = document.getElementById('d39');
const dd40 = document.getElementById('d40');
const dd41 = document.getElementById('d41');
const dd42 = document.getElementById('d42');
const dd43 = document.getElementById('d43');
const dd44 = document.getElementById('d44');
const dd45 = document.getElementById('d45');
const dd46 = document.getElementById('d46');
const dd47 = document.getElementById('d47');
const dd48 = document.getElementById('d48');
const dd49 = document.getElementById('d49');
const dd50 = document.getElementById('d50');
const dd51 = document.getElementById('d51');
const dd52 = document.getElementById('d52');
const dd53 = document.getElementById('d53');
const dd54 = document.getElementById('d54');
const dd55 = document.getElementById('d55');
const dd56 = document.getElementById('d56');
const dd57 = document.getElementById('d57');
const dd58 = document.getElementById('d58');
const dd59 = document.getElementById('d59');
const dd60 = document.getElementById('d60');
const dd61 = document.getElementById('d61');
const dd62 = document.getElementById('d62');
const dd63 = document.getElementById('d63');
const dd64 = document.getElementById('d64');
const dd65 = document.getElementById('d65');
const dd66 = document.getElementById('d66');
const dd67 = document.getElementById('d67');
const changeText = document.getElementById('translate');

english.addEventListener('click', function() {
  change(english, ukrainian);
}, false
);

ukrainian.addEventListener('click', function() {
  change(ukrainian, english);
}, false
);

function change(langOn, langOff1) {
  if (!langOn.classList.contains('current_lang')) {
    langOn.classList.add('current_lang');
    langOff1.classList.remove('current_lang');
  }

  if (langOn.innerHTML === 'EN') {
    changeText.classList.add('english');
    changeText.classList.remove('ukrainian');
    changeText.innerHTML = 'Buy';
    dd1.innerHTML = 'SPECS';
    dd2.innerHTML = 'Futuristic Wireless Speaker';

    dd3.innerHTML = 'Luna’s performance is balanced and smooth in all frequency'
      + ' ranges which makes the music both naturally pleasant and'
      + 'distinctly more layered.';
    dd4.innerHTML = 'OUR STORY';
    dd5.innerHTML = 'ABOUT US';
    dd6.innerHTML = 'TECHNOLOGY';
    dd7.innerHTML = 'FEATURES';
    dd8.innerHTML = 'GET IN TOUCH';
    dd9.innerHTML = 'FUTURISTIC DESIGN';

    dd10.innerHTML = 'To give Luna a truly flawless look, we'
    + ' specifically picked aircraft grade aluminum as its'
    + 'material and adopted both three-dimensional stretch-bending'
    + 'technology and a high precision cold forging technique.';
    dd11.innerHTML = 'TWEETER SPEAKER SYSTEM';

    dd12.innerHTML = 'To deliver a more layered sound performance'
    + 'better than a sole full-range speaker, our team equipped'
    + 'Luna with one more tweeter speaker responsible for high-frequency'
    + 'sound independently.';
    dd13.innerHTML = 'MULTIROOM SYSTEM';

    dd14.innerHTML = 'Luna is natively compatible with your home Wi-Fi.'
    + 'Set up multiple speakers in different rooms to expand your music'
    + ' experience into the entire house.';
    dd15.innerHTML = 'INTUITIVE LIGHTING SYSTEM';

    dd16.innerHTML = 'An intuitive user interface allows you'
    + 'to adjust the hue and saturation of color for lighting'
    + 'that fits any mood and situation.';

    dd17.innerHTML = 'DESIGNED FOR THE FUTURE';

    dd18.innerHTML = 'In 2014, a group of geeky industrial designers,'
    + ' engineering veterans and acoustic experts formed crazybaby.'
    + 'This is a bunch of passionate people who are crazy enough'
    + ' to think they can challenge the industry with'
    + ' disruptive audio products.';
    dd19.innerHTML = 'SEE MORE ABOUT US';
    dd20.innerHTML = 'LUNA EYE';

    dd21.innerHTML = 'Luna Eye is to the essence of this'
    + 'innovative light and audio system. It comprises'
    + 'an independent tweeter speaker, a light guiding component,'
    + ' a dome and a ring ornament.';
    dd22.innerHTML = 'SEE MORE ABOUT US';

    dd23.innerHTML = '“It really took me by surprise honestly to'
    + ' have such full beautiful sound that coming out of this small'
    + 'compact device. And with the brush aluminum surface, it feels so'
    + 'familiar. Like my iPhone.”';
    dd24.innerHTML = 'Garrett Martin';
    dd25.innerHTML = 'Creative Director';
    dd26.innerHTML = 'FEATURES';
    dd27.innerHTML = 'CONNECTIVITY';
    dd28.innerHTML = 'Hands Free Wireless Audio';
    dd29.innerHTML = 'Bluetooth 4.0 LE';
    dd30.innerHTML = 'Wi-Fi 2.4 GHz (802.11 b/g/n)';
    dd31.innerHTML = 'Smart Multiroom System Set Up';
    dd32.innerHTML = 'Party Mode with 6.0 Units and above';
    dd33.innerHTML = 'MESHNET Multi Speaker Network';
    dd34.innerHTML = 'APP FEATURES';
    dd35.innerHTML = 'Customize Music Schedule';
    dd36.innerHTML = 'Wake Up with Favorite Songs';
    dd37.innerHTML = 'Home Detection Auto Wake Up';
    dd38.innerHTML = 'Color Wheel';
    dd39.innerHTML = 'SOUND & MUSIC';
    dd40.innerHTML = 'Feel-in-chest Base Power';
    dd41.innerHTML = 'Lossless Digital Audio Transmission';
    dd42.innerHTML = 'Easy & Stable Stereo Pairing';
    dd43.innerHTML = 'Crisp and Clear High Frequency Sound';
    dd44.innerHTML = 'Streams from Cloud Music and Local Library';
    dd45.innerHTML = 'Auto Music Playback from Last Song Stopped';
    dd46.innerHTML = 'SOUND & MUSIC';
    dd47.innerHTML = 'Feel-in-chest Base Power';
    dd48.innerHTML = 'Lossless Digital Audio Transmission';
    dd49.innerHTML = 'Easy & Stable Stereo Pairing';
    dd50.innerHTML = 'Crisp and Clear High Frequency Sound';
    dd51.innerHTML = 'Streams from Cloud Music and Local Library';
    dd52.innerHTML = 'Auto Music from Last Song Stopped';
    dd53.innerHTML = 'CONNECTIVITY';
    dd54.innerHTML = 'Hands Free Wireless Audio';
    dd55.innerHTML = 'Bluetooth 4.0 LE';
    dd56.innerHTML = 'Wi-Fi 2.4 GHz (802.11 b/g/n)';
    dd57.innerHTML = 'Smart Multiroom System Set Up';
    dd58.innerHTML = 'Party Mode with 6.0 Units and above';
    dd59.innerHTML = 'MESHNET Multi Speaker Network';
    dd60.innerHTML = 'APP FEATURES';
    dd61.innerHTML = 'Customize Music Schedule';
    dd62.innerHTML = 'Wake Up with Favorite Songs';
    dd63.innerHTML = 'Home Detection Auto Wake Up';
    dd64.innerHTML = 'Color Wheel';
    dd65.innerHTML = 'DO YOU HAVE ANY QUESTIONS?';
    dd66.innerHTML = 'SEND';

    dd67.innerHTML = '© 2019 All rights reserved.'
    + ' Terms of Use & Privacy Policy';
  } else if (langOn.innerHTML === 'UA') {
    changeText.classList.add('ukrainian');
    changeText.classList.remove('english');
    changeText.innerHTML = 'Купити';
    dd1.innerHTML = 'Характеристики';
    dd2.innerHTML = 'Футуристичний бездротовий динамік';

    dd3.innerHTML = 'Продуктивність "Luna" збалансована та плавна'
    + ' у всіх частотних діапазонах, що робить музику природно приємною'
    + ' та помітно більш багатошаровою.';
    dd4.innerHTML = 'НАША ІСТОРІЯ';
    dd5.innerHTML = 'ПРО НАС';
    dd6.innerHTML = 'ТЕХНОЛОГІЯ';
    dd7.innerHTML = 'ОСОБЛИВОСТІ';
    dd8.innerHTML = "ЗВ'ЯЗАТИСЬ";
    dd9.innerHTML = 'ФУТУРИСТИЧНИЙ ДИЗАЙН';

    dd10.innerHTML = 'Щоб надати "Luna" справді бездоганного вигляду,'
    + ' ми спеціально вибрали авіаційний алюміній як його матеріал і'
    + ' використали технологію тривимірного згинання на розтяжку та'
    + ' високоточну техніку холодного кування.';
    dd11.innerHTML = 'АКУСТИЧНА СИСТЕМА "TWEETER"';

    dd12.innerHTML = 'Щоб забезпечити більш багатошаровий звук, кращий,'
    + ' ніж єдиний повнодіапазонний динамік, наша команда оснастила "Luna"'
    + ' ще одним твітерним динаміком, який відповідає за високочастотний'
    + ' звук незалежно.';
    dd13.innerHTML = 'СИСТЕМА "MULTIROOM"';

    dd14.innerHTML = '"Luna" безпосередньо сумісна з домашнім Wi-Fi.'
    + ' Встановіть кілька динаміків у різних кімнатах, щоб розширити'
    + ' музичний досвід у всьому будинку.';
    dd15.innerHTML = 'ІНТУЇТИВНО ЗРОЗУМІЛА СИСТЕМА ОСВІТЛЕННЯ';

    dd16.innerHTML = 'Інтуїтивно зрозумілий інтерфейс користувача'
    + ' дозволяє регулювати відтінок і насиченість кольорів для освітлення,'
    + ' яке відповідає будь-якому настрою та ситуації.';
    dd17.innerHTML = 'РОЗРОБЛЕНО ДЛЯ МАЙБУТНЬОГО';

    dd18.innerHTML = 'У 2014 році група промислових дизайнерів,'
    + ' ветеранів техніки та експертів з акустики створила "crazybaby".'
    + ' Це група пристрасних людей, які настільки божевільні,'
    + ' щоб думати, що можуть кинути виклик індустрії за допомогою'
    + ' руйнівних аудіопродуктів.';
    dd19.innerHTML = 'ДИВІТЬСЯ БІЛЬШЕ ПРО НАС';
    dd20.innerHTML = 'ОКО "LUNA"';

    dd21.innerHTML = 'Око "Luna" — суть цієї інноваційної системи'
    + ' освітлення та аудіосистеми. Воно складається з незалежного'
    + ' високочастотного динаміка, світловодного компонента, купола'
    + ' та кільцевого орнаменту.';
    dd22.innerHTML = 'ДИВІТЬСЯ БІЛЬШЕ ПРО НАС';

    dd23.innerHTML = '«Мене, чесно кажучи, дуже здивувало таке повне'
    + ' звучання, яке виходить із цього маленького компактного пристрою.'
    + ' А з шліфованою алюмінієвою поверхнею він здається таким'
    + ' знайомим. Як мій iPhone».';
    dd24.innerHTML = 'Гаррет Мартін';
    dd25.innerHTML = 'Креативний директор';
    dd26.innerHTML = 'ОСОБЛИВОСТІ';
    dd27.innerHTML = "З'ЄДНАННЯ";
    dd28.innerHTML = 'Бездротова аудіосистема "Hands Free"';
    dd29.innerHTML = 'Bluetooth 4.0 LE';
    dd30.innerHTML = 'Wi-Fi 2,4 ГГц (802.11 b/g/n)';
    dd31.innerHTML = 'Налаштування системи "Smart Multiroom"';
    dd32.innerHTML = 'Режим вечірки з одиницями 6.0 і вище';
    dd33.innerHTML = 'Мережа з декількома гучномовцями "MESHNET"';
    dd34.innerHTML = 'ОСОБЛИВОСТІ ДОДАТКУ';
    dd35.innerHTML = 'Налаштуйте музичний розклад';
    dd36.innerHTML = 'Прокидайтеся з улюбленими піснями';
    dd37.innerHTML = 'Автоматичне пробудження';
    dd38.innerHTML = 'Коло кольорів';
    dd39.innerHTML = 'ЗВУК І МУЗИКА';
    dd40.innerHTML = 'Базова потужність "відчуття в грудях"';
    dd41.innerHTML = 'Передача цифрового звуку без втрат';
    dd42.innerHTML = 'Легке та стабільне стереоз’єднання';
    dd43.innerHTML = 'Чіткий і чистий високочастотний звук';
    dd44.innerHTML = 'Потоки з "Cloud Music" і локальної бібліотеки';

    dd45.innerHTML = 'Автоматичне відтворення музики'
    + 'з останньої пісні зупинено';
    dd46.innerHTML = 'ЗВУК І МУЗИКА';
    dd47.innerHTML = 'Базова потужність "відчуття в грудях"';
    dd48.innerHTML = 'Передача цифрового звуку без втрат';
    dd49.innerHTML = 'Легке та стабільне стереоз’єднання';
    dd50.innerHTML = 'Чіткий і чистий високочастотний звук';
    dd51.innerHTML = 'Потоки з "Cloud Music" і локальної бібліотеки';

    dd52.innerHTML = 'Автоматичне відтворення музики'
    + ' з останньої пісні зупинено';
    dd53.innerHTML = "З'ЄДНАННЯ";
    dd54.innerHTML = 'Бездротова аудіосистема "Hands Free"';
    dd55.innerHTML = 'Bluetooth 4.0 LE';
    dd56.innerHTML = 'Wi-Fi 2,4 ГГц (802.11 b/g/n)';
    dd57.innerHTML = 'Налаштування системи "Smart Multiroom"';
    dd58.innerHTML = 'Режим вечірки з одиницями 6.0 і вище';
    dd59.innerHTML = 'Мережа з декількома гучномовцями "MESHNET"';
    dd60.innerHTML = 'ОСОБЛИВОСТІ ДОДАТКУ';
    dd61.innerHTML = 'Налаштуйте музичний розклад';
    dd62.innerHTML = 'Прокидайтеся з улюбленими піснями';
    dd63.innerHTML = 'Автоматичне пробудження';
    dd64.innerHTML = 'Коло кольорів';
    dd65.innerHTML = 'У ВАС Є ЯКІ-НЕБУДЬ ПИТАННЯ?';
    dd66.innerHTML = 'ВІДПРАВИТИ';

    dd67.innerHTML = '© 2019 Усі права захищено.'
    + ' Умови використання та політика конфіденційності';
  }
}

const formClass = document.querySelector('.form-class');

function submitForm(event) {
  event.preventDefault();
  formClass.reset();
  window.scrollTo(0, 0);
}

formClass.addEventListener('submit', submitForm);

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
