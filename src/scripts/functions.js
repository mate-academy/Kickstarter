'use strict';

// toggle function to hide the element and show it
export function toggleHideAndShow (nameElem, breakpoint) {

  if (window.innerWidth >= breakpoint) {
    nameElem.style.display = (nameElem.style.display === 'none') ? 'block' : 'none';
  }
};

// remove a #text node DOM
export const removeTextNodeDom = function (name) {
  for (let i of name) {
      i.nextSibling.remove()
  };
};

// template for benefits section
export const templateHtml = function(name) {
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
