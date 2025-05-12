'use strict';
// #region form
document.getElementById('question__form').addEventListener('submit', function(event) {

  setTimeout(function() {
          location.reload();
  }, 1100);

})

// #endregion

// #region features slider
document.addEventListener("DOMContentLoaded", () => {
  initSlider();
});

window.onload = function() {
  initSlider();
};

const slides = document.querySelectorAll('.features__area');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pagination = document.getElementById('pagination');
const currentArea = document.querySelector('.features__current-area');
const finalArea = document.querySelector('.features__final-area')
let currentSlide = 0;

function initSlider() {
  if (window.innerWidth < 1280) {
    updateSlider();
  } else {
    slides.forEach(slide => slide.style.display = 'flex');
  }
}

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    updateSlider();
  }
});

window.addEventListener('resize', initSlider);

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'flex' : 'none';
  });

  currentArea.textContent = `${currentSlide + 1}`;

  prevBtn.classList.toggle('active', currentSlide === 0);
  pagination.classList.toggle('active', currentSlide === 0);
}

updateSlider();
// #endregion

// #region Switcher language
document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("selectedLanguage") || "uk";
  updateLanguage(savedLanguage);
});

document.querySelectorAll(".activities__option").forEach(button => {
  button.addEventListener("click", () => {
    const selectedLanguage = button.dataset.lang;
    localStorage.setItem("selectedLanguage", selectedLanguage);
    updateLanguage(selectedLanguage);
  });
});

function updateLanguage(language) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    el.innerHTML = translations[language][key];
  });

  document.querySelector(".form__field--email").placeholder = translations[language].placeholderEmail;
  document.querySelector(".form__field--message").placeholder = translations[language].placeholderMessage;
}

const translations = {
  en: {
    headerTitle: "Futuristic Wireless Speaker",
    headerText: "Luna’s performance is balanced and smooth in all frequency ranges which makes the music both naturally pleasant and distinctly more layered.",
    ourStoryMenu: "Our story",
    aboutUsMenu: "About us",
    featuresMenu: "features",
    getInTouchMenu: "Get in touch",
    specsMenu: "Specs",
    buyButton: "Buy",
    futuristicDesign: "Futuristic Design",
    futuristicDescrip: "To give Luna a truly flawless look, we specifically picked aircraft grade aluminum as its material and adopted both three-dimensional stretch-bending technology and a high precision cold forging technique.",
    tweeterSS: "Tweeter Speaker System",
    tweeterSSDescrp: "To deliver a more layered sound performance better than a sole full-range speaker, our team equipped Luna with one more tweeter speaker responsible for high-frequency sound independently.",
    multiroomSystem: "Multiroom System",
    multiroomSystemDescrp: "Luna is natively compatible with your home Wi-Fi. Set up multiple speakers in different rooms to expand your music experience into the entire house.",
    intuitiveLightS: "Intuitive Lighting System",
    intuitiveLightSDescrp: "An intuitive user interface allows you to adjust the hue and saturation of color for lighting that fits any mood and situation.",
    aboutUsTitle: "Designed for the future",
    aboutUsDescrpFirst: "In 2014, a group of geeky industrial designers, engineering veterans and acoustic experts formed crazybaby. This is a bunch of passionate people who are crazy enough to think they can challenge the industry with disruptive audio products.",
    seeMoreBtn: "See more about us",
    aboutUsTitleSecond: "Luna Eye",
    aboutUsDescrpSecond: "Luna Eye is to the essence of this innovative light and audio system. It comprises an independent tweeter speaker, a light guiding component, a dome and a ring ornament.",
    quote: "It really took me by surprise honestly to have such full beautiful sound that coming out of this small compact device. And with the brush aluminum surface, it feels so familiar. Like my iPhone.",
    testmnAuthor: "Garrett Martin",
    testmnJob: "Creative Director",
    featuresTitle: "Features",
    areaTitle1: "Connectivity",
    areaTitle2: "App Features",
    areaTitle3: "Sound & Music",
    area1Li1: "Hands Free Wireless Audio",
    area1Li2: "Bluetooth 4.0 LE",
    area1Li3: "Wi-Fi 2.4 GHz (802.11 b/g/n)",
    area1Li4: "Smart Multiroom System Set Up",
    area1Li5: "Party Mode with 6.0 Units and above",
    area1Li6: "MESHNET Multi Speaker Network",
    area2Li1: "Customize Music Schedule",
    area2Li2: "Wake Up with Favorite Songs",
    area2Li3: "Home Detection Auto Wake Up",
    area2Li4: "Color Wheel ",
    area3Li1: "Feel-in-chest Base Power",
    area3Li2: "Lossless Digital Audio Transmission",
    area3Li3: "Easy & Stable Stereo Pairing",
    area3Li4: "Crisp and Clear High Frequency Sound",
    area3Li5: "Streams from Cloud Music and Local Library",
    area3Li6: "Auto Music from Last Song Stopped",
    questionTitle: "Do You have any questions?",
    placeholderEmail: "Your email",
    placeholderMessage: "Your message...",
    sendButton: "Send"
  },

  uk: {
    headerTitle: "Сучасна бездротова колонка",
    headerText: "Звучання Luna збалансоване і плавне у всіх частотних діапазонах, що робить музику одночасно приємною і водночас більш багатошаровою.",
    ourStoryMenu: "Наша історія",
    aboutUsMenu: "Про нас",
    featuresMenu: "Особливості",
    getInTouchMenu: "Зв'яжіться з нами",
    specsMenu: "Деталі",
    buyButton: "Купити",
    futuristicDesign: "Футуристичний дизайн",
    futuristicDescrip: "Щоб надати Luna дійсно бездоганного вигляду, ми спеціально вибрали в якості матеріалу авіаційний алюміній і застосували як технологію тривимірного розтягування-згинання та високоточну техніку холодного кування.",
    tweeterSS: "Високочастотна акустична система",
    tweeterSSDescrp: "Щоб забезпечити більш багаторівневе звучання, ніж у єдиного повнодіапазонного динаміка, наша команда оснастила Luna ще одним високочастотним динаміком, який відповідає за високочастотне звучання незалежно від нього.",
    multiroomSystem: "Багатокімнатна система",
    multiroomSystemDescrp: "Luna сумісна з вашим домашнім Wi-Fi. Встановіть кілька колонок у різних кімнатах, щоб розширити можливості прослуховування музики в усьому будинку.",
    intuitiveLightS: "Інтуїтивно зрозуміла система освітлення",
    intuitiveLightSDescrp: "Інтуїтивно зрозумілий користувацький інтерфейс дозволяє налаштувати відтінок і насиченість кольору для освітлення, що відповідає будь-якому настрою та ситуації.",
    aboutUsTitle: "Створено для майбутнього",
    aboutUsDescrpFirst: "У 2014 році група дивакуватих промислових дизайнерів, ветеранів інженерії та експертів з акустики заснували crazybaby. Це група пристрасних людей, які настільки божевільні, що вважають, що можуть кинути виклик індустрії, створивши революційні аудіопродукти.",
    seeMoreBtn: "Більше про нас",
    aboutUsTitleSecond: "Luna Eye",
    aboutUsDescrpSecond: "Luna Eye - це суть цієї інноваційної світло-аудіосистеми. Вона складається з незалежного високочастотного динаміка, світловодного компонента, купола та кільцевої прикраси",
    quote: "Чесно кажучи, я був здивований таким повним і красивим звучанням, що виходить з цього маленького компактного пристрою. А завдяки матовій алюмінієвій поверхні він здається таким знайомим. Як мій iPhone.",
    testmnAuthor: "Гарретт Мартін",
    testmnJob: "Креативний директор",
    featuresTitle: "Особливості",
    areaTitle1: "Зв'язок",
    areaTitle2: "Функції додатку",
    areaTitle3: "Звук і музика",
    area1Li1: "Бездротова аудіосистема",
    area1Li2: "Bluetooth 4.0 LE",
    area1Li3: "Wi-Fi 2,4 ГГц (802.11 b/g/n)",
    area1Li4: "Розумна багатокімнатна система налаштувань",
    area1Li5: "Режим вечірки з пристроями 6.0 та вище",
    area1Li6: "MESHNET Мережа з декількома динаміками",
    area2Li1: "Налаштуйте музичний розклад",
    area2Li2: "Прокидайтеся з улюбленими піснями",
    area2Li3: "Домашнє виявлення автопробудження",
    area2Li4: "Кольорове колесо",
    area3Li1: "Базова потужність відчуття в грудях",
    area3Li2: "Передача цифрового аудіо без втрат",
    area3Li3: "Просте і стабільне стерео сполучення",
    area3Li4: "Чіткий і чистий високочастотний звук",
    area3Li5: "Потоки з хмарної музики та локальної бібліотеки",
    area3Li6: "Автомузика з останньої вимкненої пісні",
    questionTitle: "Маєте запитання?",
    placeholderEmail: "Ваш email",
    placeholderMessage: "Ваше повідомлення...",
    sendButton: "Надіслати"
  }
};
// #endregion

//  #region video-presentation
document.querySelector(".presentation__video-cover").addEventListener("click", () => {
  document.querySelector(".presentation__video-cover").style.display = "none";
  document.querySelector("#videoFrame").style.display = "block";
});
// #endregion
