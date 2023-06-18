'use strict';

const tabletGridColumns = 8;
const desktopGridColumns = 12;

const tabletMinWidth = 768;
const desktopMinWidth = 1280;

const benefits = document.querySelectorAll('.benefit');

const tabletBenefitsColumns = 4;
const desktopBenefitsColumns = 3;

const tabletBenefitsGap = '65px';
const desktopBenefitsGap = 0;

if (window.innerWidth > (tabletMinWidth - 1)) {
  setGridColumnStart(
    tabletGridColumns, benefits, tabletBenefitsColumns
  );

  setGridRowStart(
    tabletGridColumns, benefits, tabletBenefitsColumns
  );

  setGridItemsGap(
    tabletGridColumns, benefits, tabletBenefitsColumns, tabletBenefitsGap
  );
}

if (window.innerWidth > (desktopMinWidth - 1)) {
  setGridColumnStart(
    desktopGridColumns, benefits, desktopBenefitsColumns
  );

  setGridRowStart(
    desktopGridColumns, benefits, desktopBenefitsColumns
  );

  setGridItemsGap(
    desktopGridColumns, benefits, desktopBenefitsColumns, desktopBenefitsGap
  );
}

window.addEventListener('resize', function() {
  if (window.innerWidth > (tabletMinWidth - 1)) {
    setGridColumnStart(
      tabletGridColumns, benefits, tabletBenefitsColumns
    );

    setGridRowStart(
      tabletGridColumns, benefits, tabletBenefitsColumns
    );

    setGridItemsGap(
      tabletGridColumns, benefits, tabletBenefitsColumns, tabletBenefitsGap
    );
  }

  if (window.innerWidth > (desktopMinWidth - 1)) {
    setGridColumnStart(
      desktopGridColumns, benefits, desktopBenefitsColumns
    );

    setGridRowStart(
      desktopGridColumns, benefits, desktopBenefitsColumns
    );

    setGridItemsGap(
      desktopGridColumns, benefits, desktopBenefitsColumns, desktopBenefitsGap
    );
  }
});

function setGridColumnStart(gridColumns, gridItems, gridItemColumns) {
  let itemNumber;
  let startPosition;

  for (let i = 0; i < gridItems.length; i++) {
    itemNumber = 1 + i * gridItemColumns;
    startPosition = setPosition(itemNumber, gridColumns);

    for (let j = 0; j < gridItems[i].children.length; j++) {
      gridItems[i].children[j].style.gridColumnStart = `${startPosition}`;
    }
  }

  function setPosition(position, max) {
    let currentPosition = position;

    while (currentPosition > max) {
      currentPosition -= max;
    }

    return currentPosition;
  }
}

function setGridRowStart(gridColumns, gridItems, gridItemColumns) {
  const gridItemsInRow = gridColumns / gridItemColumns;

  let multiplier;
  let rowStartPosition;

  for (let i = 0; i < gridItems.length; i++) {
    multiplier = getMultiplier(i, gridItemsInRow);

    for (let j = 0; j < gridItems[i].children.length; j++) {
      rowStartPosition = 1 + j + multiplier * gridItems[i].children.length;

      gridItems[i].children[j].style.gridRowStart = `${rowStartPosition}`;
    }
  }

  function getMultiplier(gridItemNumber, gridItemNumbersInRow) {
    const multipl = Math.floor(gridItemNumber / gridItemNumbersInRow);

    return multipl;
  }
}

function setGridItemsGap(gridColumns, gridItems, gridItemColumns, gridItemGap) {
  const gridItemsInRow = gridColumns / gridItemColumns;

  const gridItemsRows = Math.ceil(gridItems.length / gridItemsInRow);

  const countriesWithGaps = (gridItemsRows - 1) * gridItemsInRow;

  for (let i = 0; i < countriesWithGaps; i++) {
    const gridItemLastRow = (gridItems[i].children.length - 1);

    gridItems[i].children[gridItemLastRow].style.marginBottom = gridItemGap;
  }
}

const featuresCategories = document.querySelector('.features__categories');

const backBtn = document.querySelector('.slider__btn--left');
const forwardBtn = document.querySelector('.slider__btn--right');

const sliderItemOrder = document.querySelector('.slider__item-order');
const sliderItemsNumber = document.querySelector('.slider__item-number');

slider(
  featuresCategories, backBtn, forwardBtn, sliderItemOrder, sliderItemsNumber
);

function slider(
  sliderItemsContainer, backButton,
  forwardButton, sliderOrder,
  sliderItemsNumberText
) {
  const sliderItemsAmount = sliderItemsContainer.children.length;

  sliderItemsNumberText.textContent = `0${sliderItemsAmount}`;

  let sliderPosition = 0;
  const endPosition = sliderItemsAmount - 1;

  sliderOrder.textContent = `0${sliderPosition + 1}`;

  if (sliderPosition === 0) {
    backButton.setAttribute('disabled', 'true');
  } else if (sliderPosition === endPosition) {
    forwardButton.setAttribute('disabled', 'true');
  }

  forwardButton.addEventListener('click', function() {
    sliderPosition++;

    sliderOrder.textContent = `0${sliderPosition + 1}`;

    backButton.removeAttribute('disabled');
    forwardButton.removeAttribute('disabled');

    if (sliderPosition === 0) {
      backButton.setAttribute('disabled', 'true');
    } else if (sliderPosition === endPosition) {
      forwardButton.setAttribute('disabled', 'true');
    }

    sliderItemsContainer.style.transform
    = `translateX(${sliderPosition * -100}%)`;
  });

  backButton.addEventListener('click', function() {
    sliderPosition--;

    sliderOrder.textContent = `0${sliderPosition + 1}`;

    backButton.removeAttribute('disabled');
    forwardButton.removeAttribute('disabled');

    if (sliderPosition === 0) {
      backButton.setAttribute('disabled', 'true');
    } else if (sliderPosition === endPosition) {
      forwardButton.setAttribute('disabled', 'true');
    }

    sliderItemsContainer.style.transform
    = `translateX(${sliderPosition * -100}%)`;
  });
}

const questionsForm = document.querySelector('.questions__form');

questionsForm.addEventListener('submit', function(event) {
  questionsForm.reset();
  event.preventDefault();
});
