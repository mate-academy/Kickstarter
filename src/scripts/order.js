'use strict';

let orderQuantity = document.getElementById('order-card__quantity').value;
let orderPriceTotal
  = document.querySelector('.order-card__price--total').innerHTML;
const orderCardBtn = document.querySelector('.order-card__btn-submit');

orderQuantity = Number(orderQuantity);
orderPriceTotal = Number(orderPriceTotal.slice(1));

const btnMinus = document.querySelector('.order-card__btn-minus');
const btnPlus = document.querySelector('.order-card__btn-plus');

btnMinus.addEventListener('click', () => {
  if (orderQuantity > 1) {
    document.getElementById('order-card__quantity').value = orderQuantity -= 1;
  }
});

btnPlus.addEventListener('click', () => {
  document.getElementById('order-card__quantity').value = orderQuantity += 1;
});

orderCardBtn.addEventListener('click', () => {
  document.querySelector('.order-card__price--total').innerHTML
    = `$ ${orderPriceTotal * orderQuantity}.00`;
});

const chooseColor = document.querySelectorAll('.order-card__color-item');
const orderColor = document.querySelector('.order-card__color-name');

chooseColor.forEach(listItem => {
  listItem.addEventListener('click', (event) => {
    chooseColor.forEach(item => {
      item.classList.remove('order-card__color-item--active');
    });
    listItem.classList.add('order-card__color-item--active');
    orderColor.innerHTML = event.target.dataset.color;
  });
});
