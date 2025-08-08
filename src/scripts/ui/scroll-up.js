const scrollUpButton = document.querySelector('.scroll-up');

export const handleScrollUpVisibility = (isVisible) => {
  scrollUpButton.style.display = isVisible ? 'block' : 'none';

  return isVisible;
};

export const initScrollUpButton = () => {
  handleScrollUpVisibility();

  scrollUpButton.addEventListener('click', () => {
    window.scrollTo(0, 0);
  });
}
