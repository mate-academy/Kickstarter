export const initSlider = () => {
  const section = document.querySelector('.features');

  if (!section) {
    return;
  }

  const track = section.querySelector('.features__track');
  const slides = section.querySelectorAll('.features__slide');
  const btnPrev = section.querySelector('.icon--prev');
  const btnNext = section.querySelector('.icon--next');
  const currentEl = section.querySelector('.pagination__active');
  const totalEl = section.querySelector('.pagination__total');

  if (slides.length === 0) {
    return;
  }

  if (totalEl) {
    totalEl.textContent = String(slides.length).padStart(2, '0');
  }

  const scrollToSlide = (direction) => {
    const currentIndex = Math.round(track.scrollLeft / track.clientWidth);
    let targetIndex = currentIndex + direction;

    if (targetIndex < 0) {
      targetIndex = 0;
    }

    if (targetIndex >= slides.length) {
      targetIndex = slides.length - 1;
    }

    track.scrollTo({
      left: track.clientWidth * targetIndex,
      behavior: 'smooth',
    });
  };

  btnNext?.addEventListener('click', () => scrollToSlide(1));
  btnPrev?.addEventListener('click', () => scrollToSlide(-1));

  track.addEventListener(
    'scroll',
    () => {
      let index = Math.round(track.scrollLeft / track.clientWidth);

      index = Math.max(0, Math.min(index, slides.length - 1));

      if (currentEl) {
        currentEl.textContent = String(index + 1).padStart(2, '0');
      }
    },
    { passive: true },
  );
};
