'use strict';

// toggle function to hide the element and show it
export function toggleHideAndShow (nameElem, breakpoint) {

  if (window.innerWidth >= breakpoint) {
    nameElem.style.display = (nameElem.style.display === 'none') ? 'block' : 'none';
  }
}
