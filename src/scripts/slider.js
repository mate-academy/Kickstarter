const sliderLine = document.querySelector('.slider__line');
const prevButton = document.querySelector('.slider__button-prev');
const nextButton = document.querySelector('.slider__button-next');
const currentPage = document.querySelector('.slider__page-current');

let offset = 0;

nextButton.addEventListener('click', () => {
  if (offset > 260) {
    return;
  }

  offset += 260;
  currentPage.innerText = `0${offset / 260 + 1}`;
  sliderLine.style.left = -offset + 'px';

  prevButton.classList.replace(
    'slider__button-prev--disabled',
    'slider__button-prev--active',
  );

  if (offset === 520) {
    nextButton.classList.replace(
      'slider__button-next--active',
      'slider__button-next--disabled',
    );
  }
});

prevButton.addEventListener('click', () => {
  if (offset < 260) {
    return;
  }

  offset -= 260;
  currentPage.innerText = `0${offset / 260 + 1}`;
  sliderLine.style.left = -offset + 'px';

  nextButton.classList.replace(
    'slider__button-next--disabled',
    'slider__button-next--active',
  );

  if (offset === 0) {
    prevButton.classList.replace(
      'slider__button-prev--active',
      'slider__button-prev--disabled',
    );
  }
});
