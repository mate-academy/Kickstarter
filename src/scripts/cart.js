'use strict';

const productColors = document.querySelector('.product__colors');
const productNumber = document.querySelector('.product__number');

productColors.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.className !== 'product__color') {
    return;
  }

  const colorName = document.querySelector('.product__chosen');
  const allColors = productColors.children;

  for (const circle of allColors) {
    if (circle.classList.contains('product__color--circle')) {
      circle.classList.remove('product__color--circle');
    }
  }

  clickEvent.target.classList.add('product__color--circle');
  colorName.textContent = clickEvent.target.getAttribute('data-color');
});

productNumber.addEventListener('click', (clickEvent) => {
  const amount = document.querySelector('#amount');

  if (clickEvent.target
    .classList.contains('product__number--plus')) {
    amount.value = +amount.value + 1;
  }

  if (clickEvent.target
    .classList.contains('product__number--minus')) {
    amount.value = +amount.value - 1;

    if (amount.value < 0) {
      amount.value = 0;
    }
  }
});

productNumber.addEventListener('dblclick', (clickEvent) => {
  clickEvent.preventDefault();
});
