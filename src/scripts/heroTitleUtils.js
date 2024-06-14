const fontSizeOnMobile = 40;
const minFontSize = 12;
const lineHeight = '1.3';

function adaptTitleFontSize() {
  const title = document.querySelector('[data-lang="hero__title"]');

  let currentFontSize = fontSizeOnMobile;

  if (title.scrollWidth > title.clientWidth) {
    title.style.lineHeight = lineHeight;
  } else {
    removeTitleFontStyle();
  }

  while (title.scrollWidth > title.clientWidth) {
    currentFontSize--;

    if (currentFontSize <= minFontSize) {
      break;
    }

    title.style.fontSize = `${currentFontSize}px`;
  }
}

function removeTitleFontStyle() {
  const title = document.querySelector('[data-lang="hero__title"]');

  title.removeAttribute('style');
}

module.exports = {
  adaptTitleFontSize,
  removeTitleFontStyle,
};
