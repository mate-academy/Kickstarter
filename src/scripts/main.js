"use strict";

const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__links");
const navToggle = document.querySelector(".header__menu--toggler");

navToggle.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");

  if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    menu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  });
});

// BENEFITS SLIDER //

const benefitsList = document.querySelector(".benefits__slider-list");
const benefitsPrev = document.querySelector(".benefits__prev");
const benefitsNext = document.querySelector(".benefits__next");
const benefitsDots = document.querySelector(".benefits__dot-container");

let benefitPosition = 0;
const benefitsCount = benefitsList.children.length;

for (let i = 0; i < benefitsDots.children.length; i++) {
  benefitsDots.children[i].addEventListener("click", () => {
    moveBenefits(i);
  });
}

function highLightDot(newPosition) {
  const activeDot = benefitsDots.querySelector(".benefits__dot--active");

  if (activeDot) {
    activeDot.classList.remove("benefits__dot--active");
  }

  const selectedDot = benefitsDots.children[newPosition];

  selectedDot.classList.add("benefits__dot--active");
}

function moveBenefits(pos) {
  benefitPosition = pos;

  if (benefitPosition > benefitsCount - 1) {
    benefitPosition = 0;
  } else if (benefitPosition < 0) {
    benefitPosition = benefitsCount - 1;
  }

  highLightDot(benefitPosition);

  benefitsList.style.transform = `translateX(${-benefitPosition * 100}%)`;
}

benefitsNext.addEventListener("click", () => {
  moveBenefits(benefitPosition + 1);
});

benefitsPrev.addEventListener("click", () => {
  moveBenefits(benefitPosition - 1);
});

moveBenefits(0);

// FEATURES SLIDER //

const featureList = document.querySelector(".features__article");
const featurePrev = document.querySelector(".features__btn-left");
const featureNext = document.querySelector(".features__btn-right");
const featureCounter = document.querySelector(".features__counter");

let currentPosition = 1;
const count = featureList.children.length;

function moveTo(position) {
  currentPosition = position;

  if (currentPosition > count - 1) {
    currentPosition = 0;
  } else if (currentPosition < 0) {
    currentPosition = count - 1;
  }
  featureCounter.textContent = "0" + (currentPosition + 1).toString();

  featureList.style.transform = `translateX(${-currentPosition * 100}%)`;
}

featureNext.addEventListener("click", () => {
  moveTo(currentPosition + 1);
});

featurePrev.addEventListener("click", () => {
  moveTo(currentPosition - 1);
});
