'use strict';
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('message');
const form = document.getElementById('questions_form');

emailInput.addEventListener('input', () => {
  const value = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  if (value === "") {
    emailInput.classList.remove('success', 'error');
  } else if (isValid) {
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
  } else {
    emailInput.classList.add('error');
    emailInput.classList.remove('success');
  }
});

// Очистка при фокусе
[emailInput, messageInput].forEach(el => {
  el.addEventListener('focus', () => {
    el.value = "";
    el.classList.remove('success', 'error'); // сбрасываем классы тоже
  });
});

// Отправка формы
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("Email:", emailInput.value);
  console.log("Сообщение:", messageInput.value);

  // Очистка значений
  emailInput.value = "";
  messageInput.value = "";

  // Сброс классов (валидация к исходному состоянию)
  emailInput.classList.remove('success', 'error');
});

const cards = document.querySelectorAll('.features_cart_1, .features_cart_2, .features_cart_3');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateArrows() {
  prevBtn.classList.toggle('disabled', currentIndex === 0);
  nextBtn.classList.toggle('disabled', currentIndex === cards.length - 1);
}

function showCard(newIndex) {
  cards.forEach((card) => card.classList.remove('active'));
  currentIndex = newIndex;
  cards[currentIndex].classList.add('active');

  document.getElementById('current').textContent = String(currentIndex + 1).padStart(2, '0');
  updateArrows();
}

nextBtn.addEventListener('click', () => {
  if (!nextBtn.classList.contains('disabled')) {
    showCard(currentIndex + 1);
  }
});

prevBtn.addEventListener('click', () => {
  if (!prevBtn.classList.contains('disabled')) {
    showCard(currentIndex - 1);
  }
});


showCard(currentIndex);
document.getElementById('total').textContent = String(cards.length).padStart(2, '0');

const burgerToggle = document.getElementById("burgerToggle");
const burgerBlock = document.querySelector(".burger_block");
const burgerClose = document.getElementById("burgerClose");
const burgerLinks = document.querySelectorAll(".burger_link");

burgerToggle.addEventListener("click", () => {
  burgerBlock.classList.add("show");
  document.body.style.overflow = "hidden"; // блокируем скролл страницы
});

burgerClose.addEventListener("click", () => {
  burgerBlock.classList.remove("show");
  document.body.style.overflow = ""; // возвращаем скролл
});

burgerLinks.forEach(link => {
  link.addEventListener("click", () => {
    burgerBlock.classList.remove("show");
    document.body.style.overflow = "";
  });
});


const langSpans = document.querySelectorAll(".lang-pill span");
const langToggle = document.getElementById("langToggle");
let currentLang = "en";


langToggle.addEventListener("click", () => {

  currentLang = currentLang === "en" ? "uk" : "en";

  langSpans.forEach(span => {
    span.classList.toggle("active", span.getAttribute("data-lang-label") === currentLang);
  });
});

const langSpansBurger = document.querySelectorAll(".lang-pill_burger span");
const langToggleBurger = document.getElementById("langToggle_burger");


langToggleBurger.addEventListener("click", () => {

  currentLang = currentLang === "en" ? "uk" : "en";


  langSpans.forEach(span => {
    span.classList.toggle("active", span.getAttribute("data-lang-label") === currentLang);
  });
});

const button = document.querySelector(".header_button");
setTimeout(() => {
  button.disabled = false;
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#questions_form");
  const inputs = form.querySelectorAll("input[required], textarea[required]");
  const button = form.querySelector(".questions_button");

  function checkForm() {
    let allFilled = true;
    inputs.forEach(input => {
      if (!input.value.trim()) {
        allFilled = false;
      }
    });
    button.disabled = !allFilled;
  }

  inputs.forEach(input => {
    input.addEventListener("input", checkForm);
  });
  checkForm();
});
