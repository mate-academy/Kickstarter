export const initLangSwitch = () => {
  const switches = document.querySelectorAll('.lang-switch');

  switches.forEach((langSwitch) => {
    const options = langSwitch.querySelectorAll('.lang-switch__option');

    options.forEach((option) => {
      option.addEventListener('click', (event) => {
        event.preventDefault();

        options.forEach((item) => {
          item.classList.toggle(
            'lang-switch__option--active',
            item === option,
          );
        });
      });
    });
  });
};
