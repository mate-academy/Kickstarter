/* eslint-disable no-undef */
'use strict';

$(document).ready(function() {
  $('.nav__link').click(function(event) {
    $('.header__burger, .nav').removeClass('active');
    $('body').removeClass('lock');
  });
});

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger, .nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
