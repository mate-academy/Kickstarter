'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-menu') {
    document.body.classList.add('page__body--scroll-remove');
  } else {
    document.body.classList.remove('page__body--scroll-remove');
  }
});

// const navActive = document.querySelector('.switchers__switch--active');
// const switchers = document.querySelectorAll('.switchers__switch');

// switchers.forEach(item => {
//   item.addEventListener('click', () => {
//     // console.log("object");
//     if (item.classList.contains('.switchers__switch--active')) {
//       item.classList.remove('switchers__switch--active');
//     } else {
//       item.classList.add('switchers__switch--active');
//     }
//   });
// });

// switchers.forEach(item => {
//   item.addEventListener('click', (target) => {
//     // console.log("object");
//     // console.log(target);
//     if (!target.classList.contains('switchers__switch--active')) {
//       target.classList.toggle('switchers__switch--active');
//     }
//   });
// });
