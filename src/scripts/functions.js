'use strict';

// #region requests and properties

export const querySelector = (selector) => {
  return document.querySelector(`.${selector}`);
};

export const querySelectorAll = (selector) => {
  return document.querySelectorAll(`.${selector}`)
};

export const mediaBreakpoint = (mediaBreakpoint) => {
  return getComputedStyle(document.documentElement)
        .getPropertyValue(mediaBreakpoint)
        .slice(0, -2);
};
// #endregion

// #region moving and positioning elements

// change the position of element or a section
export function changeThePositionOfTheElement (sectionName, elementName) {
  return querySelector(sectionName).appendChild(querySelector(elementName));
};

// toggle to hide or show an item
export function toggleHideAndShow (nameElem, breakpoint) {

  if (window.innerWidth >= breakpoint) {
    nameElem.style.display = (nameElem.style.display === 'none') ? 'block' : 'none';
  }
};
// #endregion

// #region manipulation of classes

// creating and deleting classes
export function classHtml (className, event, newClass) {
  return querySelector(className).classList[event](newClass);
};
// #endregion

// #region templates html

// template for benefits section
export const templateHtmlForBenefits = (name) => {
  return `<article class="benefits__card">
            <img
              class="benefits__image"
              src=${name.image}
              alt="svg"
            >

            <h3 class="benefits__title">${name.title}</h3>
            <p class="benefits__text">${name.text}</p>
          </article>`;
};

// template for about-us section
export const templateHtmlForAboutUs = (name) => {
  return `<article class="about-us__card">
            <h2 class="about-us__title">${name.title}</h2>

            <img
              class="about-us__img"
              src="${name['image']}"
              alt="image"
            >

            <div class="about-us__content">

              <p class="about-us__text">${name.text}</p>

              <a
                href="${name.link}"
                class="about-us__link"
                target="_blank"
              >
                See more about us
              </a>
            </div>
          </article>`;
}

// template for features section
export function templateHtmlForFeatures (name) {
  return `<article class="features__block">
            <h6 class="features__subtitle">${name.title}</h6>

            <ul class="features__list">
              <li class="features__item">${name.list.item_1}</li>
              <li class="features__item">${name.list.item_2}</li>
              <li class="features__item">${name.list.item_3}</li>
              <li class="features__item">${name.list.item_4}</li>
              <li class="features__item">${name.list.item_5}</li>
              <li class="features__item">${name.list.item_6}</li>
            </ul>
          </article>`
}
//#endregion
