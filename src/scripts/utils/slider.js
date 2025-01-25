export const slider = () => {
  const slides = document.querySelectorAll('.features__block');
  let currentSlide = 0;
  const totalSlides = slides.length;

  const prevArrow = document.querySelector('.slider__arrows-left');
  const nextArrow = document.querySelector('.slider__arrows-right');
  const slideNumberNow = document.querySelector('.slider__number-now');
  const slideNumberAll = document.querySelector('.slider__number-max');

  function updateSlider() {
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    slideNumberNow.textContent = String(currentSlide + 1).padStart(2, '0');
  }

  prevArrow.addEventListener('click', function () {
    currentSlide = currentSlide === 0 ? totalSlides - 1 : currentSlide - 1;
    updateSlider();
  });

  nextArrow.addEventListener('click', function () {
    currentSlide = currentSlide === totalSlides - 1 ? 0 : currentSlide + 1;
    updateSlider();
  });

  slideNumberAll.textContent = String(totalSlides).padStart(2, '0');
  updateSlider();
};
