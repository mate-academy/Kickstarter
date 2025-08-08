export const fixedHeaderHandler = (state) => {
  const headerTop = document.querySelector('.header-top');

  headerTop.classList.toggle('header-top--scrolled', state);

  return state;
};
