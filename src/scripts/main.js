'use strict';

const listItems = document.querySelectorAll('.menu__list-link');

listItems.forEach(item => {
  item.addEventListener('click', () => {
    listItems.forEach(element => {
      element.classList.remove('menu__list-link--active');
    });

    item.classList.add('menu__list-link--active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-undef, no-unused-vars
  const benefits = new Swiper('.swiper-benefits', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    speed: 700,
    spaceBetween: 100,
  });

  if (window.innerWidth >= 740) {
    benefits.destroy();
  }

  // eslint-disable-next-line no-undef, no-unused-vars
  const features = new Swiper('.swiper-features', {
    slidesPerView: 1,
    speed: 700,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: function(number) {
        return '0' + number;
      },
      formatFractionTotal: function(number) {
        return '0' + number;
      },
    },
  });

  if (window.innerWidth >= 1280) {
    features.destroy();
  }
});

const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

document.querySelector('.year').innerHTML = new Date().getFullYear();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const scrollToTopButton = document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  if (document.body.getBoundingClientRect().top < -800) {
    scrollToTopButton.classList.add('scroll-to-top--show');
  } else {
    scrollToTopButton.classList.remove('scroll-to-top--show');
  }
});

const sendButton = document.querySelector('#send-button');

const emailInput = document.getElementById('email');

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

emailInput.addEventListener('focus', () => {
  emailInput.style.borderColor = '#0c797a';
  emailInput.style.color = '#0c797a';
});

emailInput.addEventListener('blur', (e) => {
  const email = e.target.value;

  if (!isValidEmail(email)) {
    emailInput.style.borderColor = '#eb5757';
    emailInput.style.color = '#eb5757';

    sendButton.disabled = true;
    sendButton.style.backgroundColor = '#cfeff0';

    emailInput.insertAdjacentElement('afterend', alertMessage);

    setTimeout(() => {
      alertMessage.remove();

      emailInput.focus();
    }, 3000);
  } else {
    sendButton.disabled = false;
    sendButton.style.backgroundColor = '#39bebf';
  }
});

sendButton.addEventListener('mouseover', () => {
  sendButton.style.backgroundColor = '#0c797a';
});

sendButton.addEventListener('mouseout', () => {
  sendButton.style.backgroundColor = '#39bebf';
});

const alertMessage = document.createElement('span');

alertMessage.setAttribute('class', 'alert-message');

alertMessage.textContent = 
  `Please enter the correct email form: "username@domain.com"`;
