'use strict';

(function videoplayer() {
  const vid = document.querySelector('.movie__video');
  const img = document.querySelector('.movie__img');
  const play = document.querySelector('.movie__play-button');
  const darker = document.querySelector('.movie__darker');

  vid.onclick = function() {
    vid.pause();
    darker.style.display = 'block';
    img.style.display = 'block';
    play.style.display = 'block';
  };

  play.onclick = function() {
    darker.style.display = 'none';
    img.style.display = 'none';
    play.style.display = 'none';
    vid.play();
  };
})();

(function navShadow() {
  window.onscroll = function() {
    if (document.querySelector('.nav').offsetTop - window.pageYOffset === 0) {
      document.querySelector('.nav').style.boxShadow = '0 0 2px #0db2b3';
    } else {
      document.querySelector('.nav').style.boxShadow = 'none';
    }
  };
})();

(function languageToggler() {
  let buttonIsActive = false;

  document.querySelector('.header__button--language').onclick = inputerUaHtml;
  document.querySelector('.burger__button--language').onclick = inputerUaHtml;

  function inputerUaHtml() {
    document.querySelector(`#burger-checkbox`).checked = false;

    if (buttonIsActive) {
      document.location.reload();
    } else {
      buttonIsActive = true;

      document.querySelector('.header__button-span--ua').classList
        .toggle('header__button-span--transparent');

      document.querySelector('.header__button-span--en').classList
        .toggle('header__button-span--transparent');

      document.querySelector('.burger__button-span--ua').classList
        .toggle('burger__button-span--transparent');

      document.querySelector('.burger__button-span--en').classList
        .toggle('burger__button-span--transparent');

      document.querySelector('.burger__button--specs')
        .innerHTML = 'Характеристики';

      document.querySelector('.burger__link:nth-of-type(2)')
        .innerHTML = 'Наша iсторiя';

      document.querySelector('.burger__link:nth-of-type(3)')
        .innerHTML = 'Про нас';

      document.querySelector('.burger__link:nth-of-type(4)')
        .innerHTML = 'Технологiя';

      document.querySelector('.burger__link:nth-of-type(5)')
        .innerHTML = 'Особливостi';

      document.querySelector('.burger__link:nth-of-type(6)')
        .innerHTML = 'На зв\'язку';

      document.querySelector('.header__button--specs')
        .innerHTML = 'Характеристики';

      document.querySelector('.header__button--buy')
        .innerHTML = 'Замовити';

      document.querySelector('.preview__heading')
        .innerHTML = 'Футуристичний <br> бездротовий <br> гучномовець';

      document.querySelector('.preview__paragraph').innerHTML
        = 'Звучання Luna є плавним та <br> врівноваженим у всіх частотних <br> діапазонах, що робить музику бiльш <br> приємною, виразною i багатошаровою';

      document.querySelector('.nav__link:nth-child(1)')
        .innerHTML = 'Наша iсторiя';

      document.querySelector('.nav__link:nth-child(2)')
        .innerHTML = 'Про нас';

      document.querySelector('.nav__link:nth-child(3)')
        .innerHTML = 'Технологiя';

      document.querySelector('.nav__link:nth-child(4)')
        .innerHTML = 'Особливостi';

      document.querySelector('.nav__link:nth-child(5)')
        .innerHTML = 'На зв\'язку';

      document.querySelector('.description-card:nth-of-type(1) .description-card__heading')
        .innerHTML = 'Футуристичний дизайн';

      document.querySelector('.description-card:nth-of-type(1) .description-card__paragraph')
        .style.marginTop = '22px';

      document.querySelector('.description-card:nth-of-type(1) .description-card__paragraph')
        .innerHTML = 'Щоб надати Luna справді бездоганний вигляд, ми виготовили його з авiацiйного алюмінію, iз застосуванням тривимірної технології розгинання на розтягуванні, а також високоточної техніки холодного кування.';

      document.querySelector('.description-card:nth-of-type(2) .description-card__heading')
        .innerHTML = 'Подвiйна акустична система';

      document.querySelector('.description-card:nth-of-type(2) .description-card__paragraph')
        .innerHTML = 'Щоб надати звуковi об\'єм більший, ніж може забезпечити один звичайний динамік повного діапазону, наша команда оснастила Luna ще одним спецiальним динаміком, відповідальним за високочастотний звук.';

      document.querySelector('.description-card:nth-of-type(3) .description-card__heading')
        .innerHTML = 'Мультикiмнатна система';

      document.querySelector('.description-card:nth-of-type(3) .description-card__paragraph')
        .style.marginTop = '22px';

      document.querySelector('.description-card:nth-of-type(3) .description-card__paragraph')
        .innerHTML = 'Luna може бути пiд\'єднаний до вашого домашнього Wi-Fi. Розташуйте кілька динаміків у різних кімнатах, щоб отримувати яскравi музичнi враження по всьому будинку.';

      document.querySelector('.description-card:nth-of-type(4) .description-card__heading')
        .innerHTML = 'Iнтуiтивна система освiтлення';

      document.querySelector('.description-card:nth-of-type(4) .description-card__paragraph')
        .innerHTML = 'Інтуїтивно зрозумілий інтерфейс користувача дозволяє регулювати відтінок і насиченість кольору освітлення, щоб воно вiдповiдало будь-якому настрою та ситуації.';

      document.querySelector('.about__heading')
        .innerHTML = 'Розроблений <br> на майбутнє';

      document.querySelector('.about__paragraph')
        .innerHTML = 'У 2014 році група примхливих промислових дизайнерів, ветеранiв інженерії та акустичних експертів утворила crazybaby. Це цiла купа ентузiастiв, які достатньо божевільні, щоб вважати, що можуть кинути виклик всiй галузі своїми бомбезними аудіопродуктами.';

      document.querySelector('.about__more')
        .innerHTML = 'Бiльше про нас';

      document.querySelector('.technology__heading')
        .innerHTML = 'Технологiя';

      document.querySelector('.technology__review-paragraph')
        .innerHTML = 'Для мене насправді було сюрпризом, коли я побачив, який повний, прекрасний звук виходить з цього маленького компактного пристрою. А з алюмінієвою поверхнею щітки вiн відчувається таким знайомим. Як мій iPhone.';

      document.querySelector('.technology__person-name')
        .innerHTML = 'Гарретт Мартiн';

      document.querySelector('.technology__person-job')
        .innerHTML = 'Креативний директор';

      document.querySelector('.features__heading').innerHTML = 'Особливостi';

      document.querySelector('.features-card:nth-of-type(1) .features-card__heading')
        .innerHTML = 'Звук & Музика';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(1)')
        .innerHTML = 'Вiбрує в груди на базовiй потужностi';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(2)')
        .innerHTML = 'Цифрова передача аудіо без втрат якостi';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(3)')
        .innerHTML = 'Легке та стабільне стереоутворення';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(4)')
        .innerHTML = 'Чіткі та чистi високочастотні звуки';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(5)')
        .innerHTML = 'Радiопотоки хмарної музики та з мiсцевих станцiй';

      document.querySelector('.features-card:nth-of-type(1) .features-card__item:nth-of-type(6)')
        .innerHTML = 'Автоматичне відтворення музики з останньої зупиненої пісні';

      document.querySelector('.features-card:nth-of-type(2) .features-card__heading')
        .innerHTML = 'Зв\'язок';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(1)')
        .innerHTML = 'Безкоштовне бездротове аудіо';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(2)')
        .innerHTML = 'Bluetooth 4.0 LE';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(3)')
        .innerHTML = 'Wi-Fi 2,4 ГГц (802,11 b / g / n)';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(4)')
        .innerHTML = 'Налаштування розумної багатокімнатної системи';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(5)')
        .innerHTML = '"Патi-мод" з 6 учасниками і вище';

      document.querySelector('.features-card:nth-of-type(2) .features-card__item:nth-of-type(6)')
        .innerHTML = 'Потужна мережа MESHNET Multi Speaker Network';

      document.querySelector('.features-card:nth-of-type(3) .features-card__heading')
        .innerHTML = 'Особливості програми';

      document.querySelector('.features-card:nth-of-type(3) .features-card__item:nth-of-type(1)')
        .innerHTML = 'Налаштування порядку програвання';

      document.querySelector('.features-card:nth-of-type(3) .features-card__item:nth-of-type(2)')
        .innerHTML = 'Прокидайся з улюбленими піснями';

      document.querySelector('.features-card:nth-of-type(3) .features-card__item:nth-of-type(3)')
        .innerHTML = 'Визначення будинку, Автопробудження';

      document.querySelector('.features-card:nth-of-type(3) .features-card__item:nth-of-type(4)')
        .innerHTML = 'Колесо кольорiв & регулювання насиченостi';

      document.querySelector('.contacts__heading')
        .innerHTML = 'Маєш якесь запитання?';

      document.querySelector('.contacts__email')
        .placeholder = 'Ваш email';

      document.querySelector('.contacts__message')
        .placeholder = 'Ваше повiдомлення';

      document.querySelector('.contacts__submit')
        .innerHTML = 'Вiдправити';

      document.querySelector('.footer__copyright')
        .innerHTML = '© 2019 Всі права захищені. Умови використання та Політика конфіденційності';
    }
  };
})();

(function specsToggler() {
  const specs = document.querySelector('.specs');
  const subBody = document.querySelector('.sub-body');

  document.querySelector('.header__button--specs').onclick = () => {
    subBody.style.display = 'none';
    specs.style.display = 'block';
  };

  document.querySelector('.burger__button--specs').onclick = () => {
    document.querySelector(`#burger-checkbox`).checked = false;
    subBody.style.display = 'none';
    specs.style.display = 'block';
  };

  document.querySelector('.specs__x').onclick = () => {
    specs.style.display = 'none';
    subBody.style.display = 'block';
  };
})();
