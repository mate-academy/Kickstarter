'use strict';

const slides = document.querySelectorAll('.feature');
const buttons = document.querySelectorAll('.features__control');
const prevButton = document.querySelector('.features__control--prev');
const currnetNumber = document.querySelector('.features__current');
let slideIndex = 0;
const currentSlideIndex = ['01', '02', '03'];
const index = slideIndex;

currnetNumber.textContent = `${currentSlideIndex[index]}`;

function showSlide(index) {
  slides[slideIndex].classList.remove('active');
  slides[index].classList.add('active');
  slideIndex = index;
}

buttons.forEach((e) => {
  e.addEventListener('click', () => {
    if (e.classList.contains('features__control--prev')) {
      let index = slideIndex - 1;

      buttons[0].classList.add('features__control--prev--active');
      buttons[1].classList.remove('features__control--next--active');

      if (index < 0) {
        index = slides.length - 1;
      }

      currnetNumber.textContent = `${currentSlideIndex[index]}`;

      showSlide(index);
    } else if (e.classList.contains('features__control--next')) {
      let index = slideIndex + 1;

      buttons[1].classList.add('features__control--next--active');
      buttons[0].classList.remove('features__control--prev--active');

      if (index >= slides.length) {
        index = 0;
      }

      currnetNumber.textContent = `${currentSlideIndex[index]}`;

      showSlide(index);
    }
  });
});

showSlide(slideIndex);

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim-active');
    }
  });
}

const options = { threshold: [0.5] };
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.anim');

for (const elm of elements) {
  observer.observe(elm);
}

const translateButtonEn = document.querySelectorAll('.params__translate--en');
const translateButtonUa = document.querySelectorAll('.params__translate--ua');


const specs = document.querySelectorAll('.params__specs');
const buttonBuy = document.querySelectorAll('.button-buy');
const headerTitle = document.querySelectorAll('.header__title');
const headerText = document.querySelectorAll('.header__text');
const navLink1 = document.querySelectorAll('.nav__link-1');
const navLink2 = document.querySelectorAll('.nav__link-2');
const navLink3 = document.querySelectorAll('.nav__link-3');
const navLink4 = document.querySelectorAll('.nav__link-4');
const aboutUsTitle1 = document.querySelectorAll('.about-us__title-1');
const aboutUsTitle2 = document.querySelectorAll('.about-us__title-2');
const aboutUsTitle3 = document.querySelectorAll('.about-us__title-3');
const aboutUsTitle4 = document.querySelectorAll('.about-us__title-4');
const aboutUsText1 = document.querySelectorAll('.about-us__text-1');
const aboutUsText2 = document.querySelectorAll('.about-us__text-2');
const aboutUsText3 = document.querySelectorAll('.about-us__text-3');
const aboutUsText4 = document.querySelectorAll('.about-us__text-4');
const presentationTitle1 = document.querySelectorAll('.presentation__title-1');
const presentationText1 = document.querySelectorAll('.presentation__text-1');
const presentationTitle2 = document.querySelectorAll('.presentation__title-2');
const presentationText2 = document.querySelectorAll('.presentation__text-2');
const presentationLink = document.querySelectorAll('.presentation__link');
const testimonilasQoute = document.querySelectorAll('.testimonilas__qoute');
const testimonilasName = document.querySelectorAll('.testimonilas__name');
const testimonilasProfession = document.querySelectorAll('.testimonilas__profession');
const featuresTitle = document.querySelectorAll('.features__title');
const featureTitle1 = document.querySelectorAll('.feature__title-1');
const featureTitle2 = document.querySelectorAll('.feature__title-2');
const featureTitle3 = document.querySelectorAll('.feature__title-3');
const featureItem1 = document.querySelectorAll('.feature__item-1');
const featureItem2 = document.querySelectorAll('.feature__item-2');
const featureItem3 = document.querySelectorAll('.feature__item-3');
const featureItem4 = document.querySelectorAll('.feature__item-4');
const featureItem5 = document.querySelectorAll('.feature__item-5');
const featureItem6 = document.querySelectorAll('.feature__item-6');
const featureItem7 = document.querySelectorAll('.feature__item-7');
const featureItem8 = document.querySelectorAll('.feature__item-8');
const featureItem9 = document.querySelectorAll('.feature__item-9');
const featureItem10 = document.querySelectorAll('.feature__item-10');
const featureItem11 = document.querySelectorAll('.feature__item-11');
const featureItem12 = document.querySelectorAll('.feature__item-12');
const featureItem13 = document.querySelectorAll('.feature__item-13');
const featureItem14 = document.querySelectorAll('.feature__item-14');
const featureItem15 = document.querySelectorAll('.feature__item-15');
const featureItem16 = document.querySelectorAll('.feature__item-16');
const footerTitle = document.querySelectorAll('.footer__title');
const formButton = document.querySelectorAll('.form__button');
const footerText = document.querySelectorAll('.footer__text');
const formInput = document.querySelector('.form__input');
const formMessage = document.querySelector('.form__message');

for (const buttonUa of translateButtonUa) {
  buttonUa.addEventListener('click', () => {

    for (let i = 0; i < translateButtonEn.length; i++) {
      translateButtonUa[i].classList.add('params__translate--active');
      translateButtonEn[i].classList.remove('params__translate--active');
    }

    getEachElement(specs, 'СПЕЦИФІКАЦІЇ');
    getEachElement(buttonBuy, 'Купити');
    getEachElement(headerTitle, 'ФУТУРИСТИЧНИЙ БЕЗДРОТОВИЙ ДИНАМІК');
    getEachElement(headerText, 'Гра Luna збалансована та плавна у всіх частотних діапазонах, що робить музику природно приємною та помітно більш багатошаровою.');
    getEachElement(navLink1, 'Наша історія');
    getEachElement(navLink2, 'Про нас');
    getEachElement(navLink3, 'Особливості');
    getEachElement(navLink4, 'Зв’язатися');
    getEachElement(aboutUsTitle1, 'ФУТУРИСТИЧНИЙ ДИЗАЙН');
    getEachElement(aboutUsText1, 'Щоб надати Luna справді бездоганного вигляду, ми спеціально вибрали авіаційний алюміній як його матеріал і застосували як тривимірну технологію розтягування, так і технологію високоточного холодного кування.');
    getEachElement(aboutUsTitle2, 'АКУСТИЧНА СИСТЕМА ТВІТЕРА');
    getEachElement(aboutUsText2, 'Щоб забезпечити більш багатошаровий звук, кращий, ніж єдиний повнодіапазонний динамік, наша команда оснастила Luna ще одним твітерним динаміком, який відповідає за високочастотний звук незалежно.');
    getEachElement(aboutUsTitle3, 'СИСТЕМА MULTIROOM');
    getEachElement(aboutUsText3, 'Luna нативно сумісна з домашнім Wi-Fi. Встановіть кілька динаміків у різних кімнатах, щоб розширити музичний досвід у всьому будинку.');
    getEachElement(aboutUsTitle4, 'ІНТУЇТИВНО ЗРОЗУМІЛА СИСТЕМА ОСВІТЛЕННЯ');
    getEachElement(aboutUsText4, 'Інтуїтивно зрозумілий інтерфейс користувача дозволяє регулювати відтінок і насиченість кольорів для освітлення, яке відповідає будь-якому настрою та ситуації.');
    getEachElement(presentationTitle1, 'СТВОРЕНО ДЛЯ МАЙБУТНЬОГО');
    getEachElement(presentationText1, '2014 році група промислових дизайнерів, ветеранів техніки та експертів з акустики створила crazybaby. Це група пристрасних людей, які настільки божевільні, щоб думати, що можуть кинути виклик індустрії за допомогою руйнівних аудіопродуктів.');
    getEachElement(presentationTitle2, 'МІСЯЧНЕ ОКО');
    getEachElement(presentationText2, 'Luna Eye — суть цієї інноваційної системи освітлення та аудіосистеми. Він складається з незалежного високочастотного динаміка, світловодного компонента, купола та кільцевого орнаменту.');
    getEachElement(presentationLink, 'ДІЗНАЙТЕСЯ БІЛЬШЕ ПРО НАС');
    getEachElement(testimonilasQoute, 'Мене, чесно кажучи, дуже здивувало таке чудове звучання, яке виходить із цього маленького компактного пристрою. А завдяки щітковій алюмінієвій поверхні це так знайомо. Як мій iPhone.');
    getEachElement(testimonilasName, 'Гаррет Мартін');
    getEachElement(testimonilasProfession, 'Креативний Директор');
    getEachElement(featuresTitle, 'ОСОБЛИВОСТІ');
    getEachElement(featureTitle1, 'Звук & Музика');
    getEachElement(featureTitle2, 'ПІДКЛЮЧЕННЯ');
    getEachElement(featureTitle3, 'ФУНКЦІЇ ДОДАТКІВ');
    getEachElement(featureItem1, 'Базова потужність відчуття в грудях');
    getEachElement(featureItem2, 'Передача цифрового звуку без втрат');
    getEachElement(featureItem3, 'Легке та стабільне стереоз’єднання');
    getEachElement(featureItem4, 'Чіткий і чистий високочастотний звук');
    getEachElement(featureItem5, 'Потоки з Cloud Music і локальної бібліотеки');
    getEachElement(featureItem6, 'Автоматична зупинка музики з останньої пісні');
    getEachElement(featureItem7, 'Бездротова аудіосистема Hands Free');
    getEachElement(featureItem8, 'Bluetooth 4.0 LE');
    getEachElement(featureItem9, 'Wi-Fi 2,4 ГГц (802.11 b/g/n)');
    getEachElement(featureItem10, 'Налаштування системи Smart Multiroom');
    getEachElement(featureItem11, 'Режим вечірки з одиницями 6.0 і вище');
    getEachElement(featureItem12, 'Мережа з декількома гучномовцями MESHNET');
    getEachElement(featureItem13, 'Налаштуйте музичний розклад');
    getEachElement(featureItem14, 'Прокидайтеся з улюбленими піснями');
    getEachElement(featureItem15, 'Автоматичне розпізнавання будинку');
    getEachElement(featureItem16, 'Колірне коло');
    getEachElement(footerTitle, 'У ВАС Є ЯКІ-НЕБУДЬ ПИТАННЯ?');
    getEachElement(formButton, 'НАДІСЛАТИ');
    getEachElement(footerText, '© 2023 Всі права захищені. Умови використання та політика конфіденційності');
    formInput.placeholder = 'Ваша електрона адреса'
    formMessage.placeholder = 'Ваше повідомлення...'
  });
}

for (const buttonEn of translateButtonEn) {
  buttonEn.addEventListener('click', () => {

    for (let i = 0; i < translateButtonEn.length; i++) {
      translateButtonUa[i].classList.remove('params__translate--active');
      translateButtonEn[i].classList.add('params__translate--active');
    }

    getEachElement(specs, 'SPECS');
    getEachElement(buttonBuy, 'Buy');
    getEachElement(headerTitle, 'Futuristic Wireless Speaker');
    getEachElement(headerText, 'Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.');
    getEachElement(navLink1, 'OUR STORY');
    getEachElement(navLink2, 'ABOUT US');
    getEachElement(navLink3, 'FEATURES');
    getEachElement(navLink4, 'GET IN TOUCH');
    getEachElement(aboutUsTitle1, 'Futuristic Design');
    getEachElement(aboutUsText1, 'To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.');
    getEachElement(aboutUsTitle2, 'Tweeter Speaker System');
    getEachElement(aboutUsText2, 'To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.');
    getEachElement(aboutUsTitle3, 'Multiroom System');
    getEachElement(aboutUsText3, 'Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.');
    getEachElement(aboutUsTitle4, 'Intuitive Lighting System');
    getEachElement(aboutUsText4, 'An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.');
    getEachElement(presentationTitle1, 'DESIGNED FOR THE FUTURE');
    getEachElement(presentationText1, 'In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.');
    getEachElement(presentationTitle2, 'Luna Eye');
    getEachElement(presentationText2, 'Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.');
    getEachElement(presentationLink, 'See more about us');
    getEachElement(testimonilasQoute, 'It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.');
    getEachElement(testimonilasName, 'Garrett Martin');
    getEachElement(testimonilasProfession, 'Creative Director');
    getEachElement(featuresTitle, 'FEATURES');
    getEachElement(featureTitle1, 'Sound & Music');
    getEachElement(featureTitle2, 'Connectivity');
    getEachElement(featureTitle3, 'App Features');
    getEachElement(featureItem1, 'Feel-in-chest Base Power');
    getEachElement(featureItem2, 'Lossless Digital Audio Transmission');
    getEachElement(featureItem3, 'Easy & Stable Stereo Pairing');
    getEachElement(featureItem4, 'Crisp and Clear High Frequency Sound');
    getEachElement(featureItem5, 'Streams from Cloud Music and Local Library');
    getEachElement(featureItem6, 'Auto Music from Last Song Stopped');
    getEachElement(featureItem7, 'Hands Free Wireless Audio');
    getEachElement(featureItem8, 'Bluetooth 4.0 LE');
    getEachElement(featureItem9, 'Wi-Fi 2.4 GHz (802.11 b/g/n)');
    getEachElement(featureItem10, 'Smart Multiroom System Set Up');
    getEachElement(featureItem11, 'Party Mode with 6.0 Units and above');
    getEachElement(featureItem12, 'MESHNET Multi Speaker Network');
    getEachElement(featureItem13, 'Customize Music Schedule');
    getEachElement(featureItem14, 'Wake Up with Favorite Songs');
    getEachElement(featureItem15, 'Home Detection Auto Wake Up');
    getEachElement(featureItem16, 'Color Wheel ');
    getEachElement(footerTitle, 'DO YOU HAVE ANY QUESTIONS?');
    getEachElement(formButton, 'SEND');
    getEachElement(footerText, '© 2023 All rights reserved. Terms of Use & Privacy Policy');
    formInput.placeholder = 'Your email'
    formMessage.placeholder = 'Your message...'
  });
}

function getEachElement(array, text) {
  for (const element of array) {
    element.textContent = text;
  }
}

// const translateButtonEn = document.querySelectorAll('.params__translate--en');
// const translateButtonUa = document.querySelectorAll('.params__translate--ua');


// const specs = document.querySelectorAll('.params__specs');

// for (const buttonUa of translateButtonUa) {
//   buttonUa.addEventListener('click', () => {

//     for (let i = 0; i < translateButtonEn.length; i++) {
//       translateButtonUa[i].classList.add('params__translate--active');
//       translateButtonEn[i].classList.remove('params__translate--active');
//     }

//     for (const element of specs) {
//       element.textContent = 'СПЕЦИФІКАЦІЇ';
//     }
//   });
// }

