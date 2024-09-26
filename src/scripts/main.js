'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.features__slides');
  const leftArrow = document.querySelector('.features__buttons--left');
  const rightArrow = document.querySelector('.features__buttons--right');
  const slideItems = document.querySelectorAll('.features__slide');
  const currentSlideNumber = document.querySelector('.features__numbers--current');
  let currentSlide = 0;
  const totalSlides = slideItems.length;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    updateSlideNumber(index);
    updateLeftArrowFilter(index);
    updateRightArrowFilter(index, totalSlides);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  function updateSlideNumber(index) {
    currentSlideNumber.textContent = String(index + 1).padStart(2, '0');
  }

  function updateLeftArrowFilter(index) {
    if (index > 0) {
      leftArrow.classList.add('features__buttons--isActive');
    } else {
      leftArrow.classList.remove('features__buttons--isActive');
    }
  }

  function updateRightArrowFilter(index, totalSlides) {
    if (index === totalSlides - 1) {
      rightArrow.classList.add('features__buttons--isDisabled');
    } else {
      rightArrow.classList.remove('features__buttons--isDisabled');
    }
  }

  showSlide(currentSlide);

  leftArrow.addEventListener('click', prevSlide);
  rightArrow.addEventListener('click', nextSlide);
});


window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();

  document.getElementById('form').reset();
});

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const submitButton = document.querySelector('.contacts__button');

  function checkFormValidity() {
    if (emailInput.checkValidity() && messageInput.value.trim() !== "") {
      submitButton.classList.remove('contacts__button--disabled');
      submitButton.disabled = false;
    } else {
      submitButton.classList.add('contacts__button--disabled');
      submitButton.disabled = true;
    }
  }

  emailInput.addEventListener('input', checkFormValidity);
  messageInput.addEventListener('input', checkFormValidity);

  checkFormValidity();
});

document.getElementById('scrollToTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const currentPage = window.location.pathname;
const lanLinks = document.querySelectorAll('.menu__lan--link');
const hederLanLinks = document.querySelectorAll('.header__nav--link');

lanLinks.forEach(link => {
  const linkHref = link.getAttribute('href');

  if (currentPage.includes(linkHref)) {
    link.classList.add('menu__lan--link-isActive');
  }
});

hederLanLinks.forEach(link => {
  const linkHref = link.getAttribute('href');

  if (currentPage.includes(linkHref)) {
    link.classList.add('header__nav--link-isActive');
  }
});

gsap.fromTo(
  '.header__contant',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
  }
);

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  '.nav__list',
  {
    opacity: 0,
    y: 100
  },
  {
    opacity: 0.5,
    y: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.nav__list',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.utils.toArray('.benefits__block').forEach((element) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
    }
    }
  );
});

gsap.fromTo(
  '.about__title--mobile',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__title--mobile',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.about__content--first',
  {
    opacity: 0,
    x: 100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__content--first',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.about__picture--first',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__picture--first',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.about__content--second',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__content--second',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.about__picture--second',
  {
    opacity: 0,
    x: 100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.about__picture--second',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.features__title',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.features__title',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.contacts__title',
  {
    opacity: 0,
    x: -100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.contacts__title',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);

gsap.fromTo(
  '.contacts__container ',
  {
    opacity: 0,
    x: 100
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.contacts__container ',
      start: 'top 80%',
      end: 'top 10%',
      toggleActions: 'play none none reverse',
    }
  }
);
