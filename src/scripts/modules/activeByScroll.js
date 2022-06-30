'use strict';

const activeByScroll = function(selector) {
  const pageUp = document.querySelector(selector);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1200) {
      pageUp.classList.add('active');
    } else {
      pageUp.classList.remove('active');
    }
  });
};

module.exports = { activeByScroll };
