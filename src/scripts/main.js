'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

function shiftCards() {
  const container = document.querySelector('.story__cards');
  const cards = container.querySelectorAll('.story__card');

  const isMobile = window.innerWidth <= 743;

  if (isMobile) {
    const firstCard = cards[0];

    firstCard.style.transform = 'translateX(-100%)';

    setTimeout(() => {
      container.appendChild(firstCard);

      firstCard.style.transform = 'translateX(0)';
    }, 300);
  }

  const interval = 2000;

  setTimeout(shiftCards, interval);
}

if (window.innerWidth <= 743) {
  shiftCards();
}

let transform = 0;
let numberOfSlide = 1;

function shiftFeatures() {
  const container = document.querySelector('.features__container');

  const leftBtns = document.querySelectorAll(
    '.features__actions_arrows-link--left'
  );
  const rightBtns = document.querySelectorAll(
    '.features__actions_arrows-link--right'
  );
  const slideNumber = document.querySelectorAll(
    '.features__actions_nums--target'
  );

  rightBtns.forEach((rightBtn) => {
    rightBtn.addEventListener('click', () => {
      if (transform !== -200) {
        transform -= 100;
        numberOfSlide += 1;

        slideNumber.forEach((block) => {
          block.textContent = numberOfSlide;
        });
      } else {
        transform = 0;
        numberOfSlide = 1;

        slideNumber.forEach((block) => {
          block.textContent = numberOfSlide;
        });
      }

      container.style.transform = `translateX(${transform}%)`;
    });
  });

  leftBtns.forEach((leftBtn) => {
    leftBtn.addEventListener('click', () => {
      if (transform !== 0) {
        transform += 100;
        numberOfSlide -= 1;

        slideNumber.forEach((block) => {
          block.textContent = numberOfSlide;
        });
      } else {
        transform = -200;
        numberOfSlide = 3;

        slideNumber.forEach((block) => {
          block.textContent = numberOfSlide;
        });
      }

      container.style.transform = `translateX(${transform}%)`;
    });
  });
}

shiftFeatures();
