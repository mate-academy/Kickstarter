'use strict';

// #region requests and properties

export const querySelector = (selector) => {
  return document.querySelector(`.${selector}`);
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

// #region deleting items

// classes to add or remove
export function classHtml (className, event, newClass) {
  return querySelector(className).classList[event](newClass);
};


// remove a #text node DOM
export const removeTextNodeDom = function (name) {
  for (let i of name) {
      // i.nextSibling.remove();
      i.nextSibling.remove();
  };
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
//#endregion
