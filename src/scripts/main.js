'use strict';

const tabs = document.querySelectorAll('.nav__link');

tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => {
    tabs.forEach(link => {
      link.classList.remove('nav__link--is-active');
    });

    tabs[i].classList.add('nav__link--is-active');
  });
});
