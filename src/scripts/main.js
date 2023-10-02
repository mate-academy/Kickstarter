document.addEventListener('DOMContentLoaded', function() {
  // Тут розміщуємо ваш код
  const slides = document.querySelectorAll('.features__block');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const sliderCounter = document.getElementById('sliderCounter');
  const switched = document.querySelector('.language__switcher');
  const spans = switched.querySelectorAll('.language__text');

  switched.addEventListener('click', function() {
    spans.forEach(span => {
      span.classList.toggle('language__text--active');
    });
  });

  let currentSlide = 0;

  function showSlide(index) {
    // Перевірка для вимкнення кнопки "попередній"
    if (index === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    // Перевірка для вимкнення кнопки "наступний"
    if (index === slides.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    const slideNumber = index + 1;

    sliderCounter.textContent = `${slideNumber.toString().padStart(2, '0')}`;
  }

  function toggleActiveClass() {
    slides[currentSlide].classList.remove('features__block--active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('features__block--active');
  }

  showSlide(currentSlide);
  slides[currentSlide].classList.add('features__block--active');

  nextBtn.addEventListener('click', () => {
    toggleActiveClass();
    showSlide(currentSlide);
  });

  prevBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('features__block--active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('features__block--active');
    showSlide(currentSlide);
  });
});
