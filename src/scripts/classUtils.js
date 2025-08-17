function updateClassesForAboutUsCardText() {
  const paragraphs = document.querySelectorAll('.about-us__card-text');
  paragraphs.forEach((paragraph) => {
    if (window.innerWidth > 767) {
      paragraph.classList.remove('text--secondary');
      paragraph.classList.add('text--main');
    } else {
      paragraph.classList.remove('text--main');
      paragraph.classList.add('text--secondary');
    }
  });
}

function updateClassesForFeaturesInnerText() {
  const items = document.querySelectorAll('.features__inner-item');
  items.forEach((item) => {
    if (window.innerWidth > 1279) {
      item.classList.remove('text--secondary');
      item.classList.add('text--main');
    } else {
      item.classList.remove('text--main');
      item.classList.add('text--secondary');
    }
  });
}

module.exports = {
  updateClassesForAboutUsCardText,
  updateClassesForFeaturesInnerText,
};
