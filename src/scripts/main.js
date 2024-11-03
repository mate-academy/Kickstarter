"use strict";

const page = document.documentElement;
const arrow = document.querySelector(".footer__arrow-btn");
const startArrow = document.querySelector(".main");
const endArrow = document.querySelector(".header");

startArrow.addEventListener("mouseover", () => {
  arrow.classList.add("footer__arrow-btn--full");
});

endArrow.addEventListener("mouseover", () => {
  arrow.classList.remove("footer__arrow-btn--full");
});

const quoteTextMove = document.querySelector(".quote__text--quote");
const quotePhotoMove = document.querySelector(".quote__photo-wrap");
const quoteTarget = document.querySelector(".quote");

quoteTarget.addEventListener("mouseover", () => {
  quoteTextMove.classList.add("quote__text--quote--move") ||
    quotePhotoMove.classList.add("quote__photo-wrap--move");
});

const emailInput = document.querySelector(".contacts__input--email");
const formBotton = document.querySelector(".contacts__btn");

formBotton.addEventListener("click", (event) => {
  const value = emailInput.value;

  if (!value) {
    emailInput.setAttribute("aria-invalid", "true");
  } else {
    emailInput.removeAttribute("aria-invalid");
  }
});

const buttonRight = document.querySelector(".slider__btn--right");
const buttonLeft = document.querySelector(".slider__btn--left");
const content = document.querySelectorAll(".features__content-box");
const container = document.querySelector(".features__content");
const currentPage = document.querySelector(".slider__pages--current");

let currentIndex = 0;

buttonRight.addEventListener("click", () => {
  if (currentIndex < content.length - 1) {
    content[currentIndex].classList.remove("active");
    currentIndex++;
    content[currentIndex].classList.add("active");
    buttonLeft.removeAttribute("disabled");
    buttonLeft.style.pointerEvents = "all";
    currentPage.textContent = `0${currentIndex + 1}`;

    if (currentIndex === content.length - 1) {
      buttonRight.setAttribute("disabled", "true");
      buttonRight.style.pointerEvents = "none";
    }
  }
});

buttonLeft.addEventListener("click", () => {
  if (currentIndex > 0) {
    content[currentIndex].classList.remove("active");
    currentIndex--;
    content[currentIndex].classList.add("active");
    buttonRight.removeAttribute("disabled");
    buttonRight.style.pointerEvents = "all";
    currentPage.textContent = `0${currentIndex + 1}`;

    if (currentIndex === 0) {
      buttonLeft.setAttribute("disabled", "true");
      buttonLeft.style.pointerEvents = "none";
    }
  }
});
