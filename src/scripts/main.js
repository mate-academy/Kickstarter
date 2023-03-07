'use strict';

const $ = window.$;

$(function() {
  $('#myImgl').on('click', 'li', function(event) {
    $(this).addClass('header__item--active').siblings()
      .removeClass('header__item--active');
    event.preventDefault();
  });
});
