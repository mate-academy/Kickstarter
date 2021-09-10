'use strict';

const list = document.querySelector('.slider-list');
const counter = document.querySelector('.features__counter-this');
const countItem = document.querySelector('.features__counter-all');
const prev = document.querySelector('.button--prev');
const next = document.querySelector('.button--next');

const videoButton = document.querySelector('.video-promo__butt');

let position = 0;

move(0);

// Ждём клик от пользователя на кнопке Next
next.addEventListener('click', function() {
  move(1);
});

// Ждём клик от пользователя на кнопке Prev
prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  // Узнаём сколько детей в списке
  const count = list.children.length;

  // Меняем позицию на указанное значение
  position += shift;

  // Добавляем или убираем у кнопок атрибут disabled
  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;

  // Если нужно добавляем и убираем классы в зависимости от позиции
  list.classList.remove(`list--${position - 1}`);
  list.classList.remove(`list--${position + 1}`);
  list.classList.add(`list--${position}`);

  // Нормируем позицию от 0 до count - 1
  position = (position + count) % count;

  // Записывает текст в элемент
  counter.textContent = `${position + 1}`;
  countItem.textContent = ` / ${count}`;

  // Меняем стили списка
  // transform: translateX(-100%); // 0, -200%, -300%
  list.style.transform = `translateX(${-position * 107}%)`;
}

function viewVideo() {
  document.getElementById('video').style.display = 'block';
};

videoButton.addEventListener('click', function() {
  viewVideo();
});
