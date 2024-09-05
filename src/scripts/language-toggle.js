const buttons = document.querySelectorAll('.extra-buttons__link');

buttons.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    const active = e.target.classList.contains('extra-buttons__link--active');

    if (active) {
      return;
    }

    buttons.forEach((elem) => {
      if (elem.classList.contains('extra-buttons__link--active')) {
        elem.classList.replace(
          'extra-buttons__link--active',
          'extra-buttons__link--not-active',
        );
      } else {
        elem.classList.replace(
          'extra-buttons__link--not-active',
          'extra-buttons__link--active',
        );
      }
    });
  });
});
