'use strict';

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('page__section--animation');
    }
  });
}

const options = { threshold: [0.5] };
// eslint-disable-next-line no-undef
const observer = new IntersectionObserver(onEntry, options);
const elements = document.querySelectorAll('.page__section');

for (const elm of elements) {
  observer.observe(elm);
}
