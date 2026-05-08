'use strict';

// ===== Language buttons =====
const langButtons = document.querySelectorAll('.menu__btn');

if (langButtons.length) {
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      langButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

// ===== Features slider =====
const categories = [
  {
    title: 'Sound & Music',
    items: [
      'Feel-in-chest Bass Power',
      'Lossless Digital Audio Transmission',
      'Easy & Stable Stereo Pairing',
      'Crisp and Clear High Frequency Sound',
      'Streams from Cloud Music and Local Library',
      'Auto Music Playback from Last Song Stopped'
    ],
    image: '/src/images/features-sound.png'
  },
  {
    title: 'Connectivity',
    items: [
      'Hands Free Wireless Audio',
      'Bluetooth 4.0 LE',
      'Wi-Fi 2.4 GHz (802.11 b/g/n)',
      'Smart Multiroom System Set Up',
      'Party Mode with 6.0 Units and above',
      'MESHNET Multi Speaker Network'
    ],
    image: '/src/images/features-connect.png'
  },
  {
    title: 'App Features',
    items: [
      'Customize Music Schedule',
      'Wake Up with Favorite Songs',
      'Home Detection Auto Wake Up',
      'Color Wheel'
    ],
    image: '/src/images/features-design.png'
  }
];

let current = 0;

// DOM elements
const subtitle   = document.querySelector('.features__subtitle');
const list       = document.querySelector('.features__list');
const image      = document.querySelector('.features__image');
const currentNum = document.querySelector('.features__page--current');
const totalNum   = document.querySelector('.features__page--total');
const btnNext    = document.querySelector('.features__arrow--next');
const btnPrev    = document.querySelector('.features__arrow--prev');

// ===== Render function =====

function render() {
  const cat = categories[current];

  if (!cat) return;


  subtitle.textContent = cat.title;

  list.innerHTML = cat.items
    .map(t => `<li class="features__item">${t}</li>`)
    .join('');

  // image.style.backgroundImage = `url("${cat.image}")`;

  currentNum.textContent = String(current + 1).padStart(2, '0');

  btnPrev.disabled = current === 0;
  btnNext.disabled = current === categories.length - 1;

  currentNum.textContent = String(current + 1).padStart(2, '0');
  totalNum.textContent   = String(categories.length).padStart(2, '0');
}

// ===== Buttons =====
btnNext.addEventListener('click', () => {
  if (current < categories.length - 1) {
    current++;
    btnNext.classList.add('active');
    btnPrev.classList.remove('active');
    render();
  }
});

btnPrev.addEventListener('click', () => {
  if (current > 0) {
    current--;
    btnPrev.classList.add('active');
    btnNext.classList.remove('active');
    render();
  }
});
// ===== Features slider =====
// const categories = [
//   {
//     title: 'Sound & Music',
//     items: [
//       'Feel-in-chest Bass Power',
//       'Lossless Digital Audio Transmission',
//       'Easy & Stable Stereo Pairing',
//       'Crisp and Clear High Frequency Sound',
//       'Streams from Cloud Music and Local Library',
//       'Auto Music Playback from Last Song Stopped'
//     ],
//     image: '/src/images/features-sound.png'
//   },
//   {
//     title: 'Connectivity',
//     items: [
//       'Hands Free Wireless Audio',
//       'Bluetooth 4.0 LE',
//       'Wi-Fi 2.4 GHz (802.11 b/g/n)',
//       'Smart Multiroom System Set Up',
//       'Party Mode with 6.0 Units and above',
//       'MESHNET Multi Speaker Network'
//     ],
//     image: '/src/images/features-connect.png'
//   },
//   {
//     title: 'App Features',
//     items: [
//       'Customize Music Schedule',
//       'Wake Up with Favorite Songs',
//       'Home Detection Auto Wake Up',
//       'Color Wheel'
//     ],
//     image: '/src/images/features-design.png'
//   }
// ];

// let current = 0;

// // DOM elements
// const subtitle   = document.querySelector('.features__subtitle');
// const list       = document.querySelector('.features__list');
// const image      = document.querySelector('.features__image');
// const currentNum = document.querySelector('.features__page--current');
// const totalNum   = document.querySelector('.features__page--total');
// const btnNext    = document.querySelector('.features__arrow--next');
// const btnPrev    = document.querySelector('.features__arrow--prev');

// // ===== Helpers =====
// function isDesktop() {
//   return window.innerWidth >= 1024; // можно поменять брейкпоинт
// }

// // ===== Render function =====
// function render() {

//   // ===== DESKTOP MODE =====
//   if (isDesktop()) {
//     // subtitle.textContent = 'Features';

//     list.innerHTML = categories
//       .map(cat => `
//         <div class="features__block">
//           <h3 class="features__subtitle">${cat.title}</h3>
//           <ul class="features__list">
//             ${cat.items.map(t => `<li class="features__item">${t}</li>`).join('')}
//           </ul>
//         </div>
//       `)
//       .join('');

//     btnPrev.style.display = 'none';
//     btnNext.style.display = 'none';
//     currentNum.style.display = 'none';
//     totalNum.style.display = 'none';

//     return;
//   }

//   // ===== MOBILE / TABLET SLIDER MODE =====
//   const cat = categories[current];
//   if (!cat) return;

//   subtitle.textContent = cat.title;

//   list.innerHTML = cat.items
//     .map(t => `<li class="features__item">${t}</li>`)
//     .join('');

//   currentNum.textContent = String(current + 1).padStart(2, '0');
//   totalNum.textContent   = String(categories.length).padStart(2, '0');

//   btnPrev.style.display = '';
//   btnNext.style.display = '';
//   currentNum.style.display = '';
//   totalNum.style.display = '';

//   btnPrev.disabled = current === 0;
//   btnNext.disabled = current === categories.length - 1;
// }

// // ===== Buttons =====
// btnNext.addEventListener('click', () => {
//   if (current < categories.length - 1) {
//     current++;
//     render();
//   }
// });

// btnPrev.addEventListener('click', () => {
//   if (current > 0) {
//     current--;
//     render();
//   }
// });

// // ===== Responsive update =====
// window.addEventListener('resize', render);

// // init
// render();
