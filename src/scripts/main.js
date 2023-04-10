"use strict";

const nextBtn = document.querySelector(".slider--btn-right");
const prevBtn = document.querySelector(".slider--btn-left");
const block = document.querySelectorAll(".feature--mobile");
const Email = document.querySelector(".input__email");
const comment = document.querySelector(".input__message");
const btn = document.querySelector(".submit__button");
const slideNumber = document.querySelector(".slide__current");
let currSlide = 0;
const maxSlide = block.length;

const goToSlide = function (slide) {
  slideNumber.textContent = `0${slide + 1}`;
  block.forEach(
    (s, i) => (s.style.transform = `translateX(${150 * (i - slide)}%)`)
  );
};

nextBtn.addEventListener("click", () => {
  prevBtn.classList.add("active");
  if (currSlide === 1) {
    nextBtn.classList.remove("active");
  }
  if (currSlide === maxSlide - 1) {
    return;
  }
  currSlide++;

  goToSlide(currSlide);
});

prevBtn.addEventListener("click", () => {
  nextBtn.classList.add("active");
  if (currSlide === 1) {
    prevBtn.classList.remove("active");
  }
  if (currSlide === 0) {
    return;
  }
  currSlide--;
  goToSlide(currSlide);
});

document.querySelectorAll(".input").forEach((element) => {
  element.addEventListener("keydown", () => {
    document.querySelector(".error").textContent = "";
  });
});

function reset() {
  document.querySelector(".success__sent").style.display = "none";
  Email.classList.remove("success");
  comment.classList.remove("success");
}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  if (Email.value.length === 0 || Email.value.indexOf("@") === -1) {
    document.querySelector(".error").textContent =
      "please enter valid email ID";
  } else if (comment.value.trim().length < 10) {
    document.querySelector(".error").textContent =
      "please enter atleast 10 character in message";
  }
  if (
    Email.value.indexOf("@") !== -1 &&
    Email.value.length > 0 &&
    comment.value.length >= 10
  ) {
    document.querySelector(".error").textContent = "";
    document.querySelector(".success__sent").style.display = "block";
    Email.classList.add("success");
    comment.classList.add("success");
    Email.value = "";
    comment.value = "";
    setInterval(reset, 3000);
  }
});

document.querySelector("#ukraine").addEventListener("click", (e) => {
  // eslint-disable-next-line quotes
  if (e.target.checked) {
    document.querySelector(".header__content").style.display = "none";
    document.querySelector(".nav").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".ukraine__title").style.display = "block";
  }
});

document.querySelector("#english").addEventListener("click", (e) => {
  // eslint-disable-next-line quotes
  if (e.target.checked) {
    document.querySelector(".header__content").style.display = "flex";
    document.querySelector(".nav").style.display = "block";
    document.querySelector("main").style.display = "block";
    document.querySelector(".footer").style.display = "block";
    document.querySelector(".ukraine__title").style.display = "none";
  }
});
