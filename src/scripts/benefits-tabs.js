document.addEventListener('DOMContentLoaded', function () {
  const benefitsNav = document.querySelector('.benefits__nav');

  if (!benefitsNav) {
    return; // Jeśli nawigacja nie istnieje, zakończ skrypt
  }

  const tabs = benefitsNav.querySelectorAll('.benefits__tab');
  const contentContainers = document.querySelectorAll('.benefits__container');

  benefitsNav.addEventListener('click', function (event) {
    const clickedTab = event.target.closest('.benefits__tab');

    if (!clickedTab) {
      return; // Kliknięto poza przyciskiem
    }

    const tabNumber = clickedTab.dataset.tab;

    // Aktualizacja klas dla przycisków (zakładek)
    tabs.forEach((tab) => {
      tab.classList.remove('active');
      tab.classList.add('passive');
    });

    clickedTab.classList.add('active');
    clickedTab.classList.remove('passive');

    // Pokazywanie/ukrywanie odpowiedniej treści
    contentContainers.forEach((container) => {
      if (container.dataset.tabContent === tabNumber) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    });
  });
});
