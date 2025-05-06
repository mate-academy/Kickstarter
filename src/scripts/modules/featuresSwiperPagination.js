const prevBtn = document.querySelector('.toggles__toggle--prev');
const nextBtn = document.querySelector('.toggles__toggle--next');
const activeArticle = document.querySelector('.page--active')

const disabled = {
  atribute: 'aria-disabled',
  value: 'true',
}

function checkNum(current, total, first = 1, ) {
  const prevBtnArrow = prevBtn.firstElementChild;
  const nextBtnArrow = nextBtn.firstElementChild;

  if (current === first) {
    prevBtnArrow.setAttribute(disabled.atribute, disabled.value);
  }

  if (current !== first && current !== total) {
    prevBtnArrow.removeAttribute(disabled.atribute);
    nextBtnArrow.removeAttribute(disabled.atribute);
  }

  if (current === total) {
    nextBtnArrow.setAttribute(disabled.atribute, disabled.value);
  }
}

module.exports = {
  pageElement: {
    prevBtn, nextBtn, activeArticle
  },

  checkNumFunc: {
    checkNum,
  },
}
