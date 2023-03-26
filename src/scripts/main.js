"use strict";

const button = document.querySelector('.contact__send');
const wrapper = document.querySelector('.contact__button-wrapper');
const emailInput = document.querySelector('#email-input');
const messageInput = document.querySelector('#message-input');

button.addEventListener('mouseenter', () => {
  wrapper.addEventListener('mousemove', moveButton);
});

button.addEventListener('mouseleave', () => {
  wrapper.removeEventListener('mousemove', moveButton);
});

function moveButton(event) {
  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();

    const wrapperRect = wrapper.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const mouseX = event.clientX;

    const buttonWidth = buttonRect.width;
    const wrapperWidth = wrapperRect.width;

    let newPosition = 0;

    if (mouseX > buttonRect.left + buttonWidth / 2) {
      newPosition = buttonRect.left - wrapperRect.left - buttonWidth;
    } else {
      newPosition = buttonRect.left - wrapperRect.left + buttonWidth;
    }

    if (newPosition < 0) {
      newPosition = wrapperWidth - buttonWidth;
    } else if (newPosition + buttonWidth > wrapperWidth) {
      newPosition = 0;
    }

    button.style.left = newPosition + 'px';
  }
}
