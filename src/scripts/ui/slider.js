let visibleList = 0;

const LIST_GAP = 55;
const listWrapper = document.querySelector('.features__lists-inner');
const totalLists = listWrapper.children;
const totalCount = totalLists.length;

const currentSlide = document.querySelector('.features__slider-current');
const totalSlides = document.querySelector('.features__slider-total');
totalSlides.innerHTML = `${totalCount < 10 ? 0 : ''}${totalCount}`;

const buttonNext = document.querySelector('.features__slider-button--next');
const buttonPrev = document.querySelector('.features__slider-button--prev');
const sliderButtons = [buttonNext, buttonPrev];

export const resetSlider = () => {
  visibleList = 0;
  listWrapper.style.transform = `translateX(0px)`;
}

export const updateSlider = () => {
  const offset = (totalLists[0].clientWidth + LIST_GAP) * visibleList;
  listWrapper.style.transform = `translateX(-${offset}px)`;

  currentSlide.innerHTML = `${visibleList < 10 ? 0 : ''}${visibleList + 1}`;
  buttonNext.disabled = visibleList === totalCount - 1;
  buttonPrev.disabled = visibleList === 0;
};

sliderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('features__slider-button--next') && visibleList < totalCount - 1) {
      visibleList++;
    }

    if (button.classList.contains('features__slider-button--prev') && visibleList > 0) {
      visibleList--;
    }

    updateSlider();
  });
});
