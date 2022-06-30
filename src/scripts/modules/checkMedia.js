'use strict';

const checkMedia = function(callback) {
  const mediaQuery = window.matchMedia('(max-width: 666px)');

  if (mediaQuery.matches) {
    callback; // eslint-disable-line
  }
};

module.exports = { checkMedia };
