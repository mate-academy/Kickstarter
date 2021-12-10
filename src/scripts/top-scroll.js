'use strict';

$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      $('#topNubex').fadeIn();
    } else {
      $('#topNubex').fadeOut();
    }
  });

  $('#topNubex').click(function() {
    $('body,html').animate({ scrollTop: 0 }, 700);
  });
});
