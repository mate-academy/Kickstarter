document.addEventListener('DOMContentLoaded', function () {
  const sliderContainer = document.querySelector('.features__slider');

  if (!sliderContainer) {
    return; // Jeśli slider nie istnieje, zakończ skrypt
  }

  const prevButton = sliderContainer.querySelector('.prev');
  const nextButton = sliderContainer.querySelector('.next');
  const contentContainers = document.querySelectorAll('.features__container');
  const numberIndicators = sliderContainer.querySelectorAll('.number');
  const totalTabs = contentContainers.length;
  let currentTab = 1;

  function updateSlider(newTab) {
    currentTab = newTab;

    // Aktualizacja kontenerów z treścią
    contentContainers.forEach((container) => {
      if (container.dataset.tabContent === String(currentTab)) {
        container.classList.add('active');
        container.classList.remove('passive');
      } else {
        container.classList.remove('active');
        container.classList.add('passive');
      }
    });

    // Aktualizacja wskaźników numerów
    numberIndicators.forEach((number) => {
      if (number.dataset.tabContent === String(currentTab)) {
        number.classList.add('active');
        number.classList.remove('passive');
      } else {
        number.classList.remove('active');
        number.classList.add('passive');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    const newTab = currentTab === 1 ? totalTabs : currentTab - 1;
    updateSlider(newTab);
  });

  nextButton.addEventListener('click', () => {
    const newTab = currentTab === totalTabs ? 1 : currentTab + 1;
    updateSlider(newTab);
  });
});
