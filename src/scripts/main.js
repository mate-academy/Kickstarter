'use strict';

document.addEventListener("DOMContentLoaded", function () {
  initBurgerMenu();
  questionsForm();
  target();
});

function initBurgerMenu() {
  // const header = document.querySelector(".header");
  const burgerMenu = document.querySelector(".burger-menu");
  const aside = document.querySelector(".aside");
  const close = document.querySelector(".close");
  const body = document.body;

  burgerMenu.addEventListener("click", function () {
    aside.classList.toggle("open");
    body.classList.toggle("no-scroll");
  });

  close.addEventListener("click", function () {
    aside.classList.remove("open");
    body.classList.remove('no-scroll');
    // header.style.display = "grid";
  });
}

function questionsForm() {
  const form = document.getElementById("questionsForm");

  if (form) {
      const emailInput = document.getElementById("inputEmail");
      const emailError = document.getElementById("errorMessage");
      const textarea = document.getElementById("textarea");
      const textareaError = document.getElementById("textareaError");
      const successMessage = document.getElementById("successMessage");

      if (!emailInput || !emailError || !successMessage) return;
      const emailPattern = /^[a-zA-Z0-9.%-+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

      emailInput.addEventListener("input", () => {
        const emailValue = emailInput.value.trim().replace(/\s+/g, "");

        if (emailPattern.test(emailValue)) {
          emailInput.style.borderColor = "#0C797A";
          emailError.style.display = "none";
        } else {
          emailInput.style.borderColor = "#EB5757";
        }
      });

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      const emailValue = emailInput.value.trim().replace(/\s+/g, "");
      const textareaValue = textarea.value.trim();

      let isValid = true;

      if (!emailPattern.test(emailValue)) {
        emailError.style.display = "block";
        emailInput.style.borderColor = "#EB5757";
        isValid = false;
      } else {
        emailError.style.display = "none";
        emailInput.style.borderColor = "#828282";
      }

      if (textareaValue === "") {
        textareaError.style.display = "block";
        textarea.style.borderColor = "#EB5757";
        isValid = false;
      } else  {
        textareaError.style.display = "none";
        textarea.style.borderColor = "#828282";
      }

      if (isValid) {
        successMessage.classList.add("show");
        form.reset();

        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 3000);
      }
    });
  }
}

function target() {
  const links = document.querySelectorAll(".page-menu a[href^='#']");
  const body = document.body;
  const aside = document.querySelector(".aside");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetElement = document.querySelector(link.getAttribute("href"));
      if (targetElement) {
        body.classList.remove("no-scroll");
        aside.classList.remove("open");

        setTimeout(() => {
          targetElement.scrollIntoView({behavior: "smooth"});
        }, 100);
      }
    })
  });
}
