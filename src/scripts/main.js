'use strict';

  const sliderItems = document.querySelectorAll('.slider__item');
  const buttonLeft = document.querySelector('.slider__button--left');
  const buttonRight = document.querySelector('.slider__button--right');
  const pageIndicator = document.querySelector('.slider__selectedPage');
  const submitButton = document.querySelector('#id-submit');
  const form = document.querySelector('#id-Form');
  const scrollButton = document.querySelector('#scroll');
  const burgerButton = document.getElementById('burgerButton');
  const menu = document.getElementById('menu');

  let currentIndex = 0;

  const closeMenu = () => {
    document.body.style.overflow = '';
    burgerButton.classList.remove('icon--cross');
    burgerButton.classList.add('icon--menu');
    menu.classList.remove('menu--open');
  };

  const openMenu = () => {
    document.body.style.overflow = 'hidden';
    burgerButton.classList.remove('icon--menu');
    burgerButton.classList.add('icon--cross');
    menu.classList.add('menu--open');
  }

  window.addEventListener('hashchange', (event) => {
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280) {
      closeMenu();
    }
  })

  burgerButton.addEventListener('click', () => {
    if (menu.classList.contains('menu--open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  function showSlide(index) {
    sliderItems.forEach((item, i) => {
      item.classList.toggle('slider__item--disabled', i !== index);
    });
    pageIndicator.textContent = `0${index + 1}`;
  }

  submitButton.addEventListener('click', submitButtonClick);

  function submitButtonClick(event) {
    event.preventDefault();
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (email.value.trim() === '' || message.value.trim() === '') {
        alert("Please fill in all required fields.");
        return;
    }
    form.reset();
    alert("Form submitted successfully!");
  }

  scrollButton.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: 'smooth',
  }));

  buttonLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
    showSlide(currentIndex);
  });

  buttonRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sliderItems.length;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);