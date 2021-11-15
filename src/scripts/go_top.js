'use strict';
/* eslint no-use-before-define: 0 */  // --> OFF

$(document).ready(function() {

  $('body').append('<a href="#" id="go-top" title="Go to top"></a>');
});

$(function() {
  $.fn.scrollToTop = function() {
    $(this).hide().removeAttr('href');
    if ($(window).scrollTop() >= '250') $(this).fadeIn('slow')

    let scrollDiv = $(this);

    $(window).scroll(function() {
      if ($(window).scrollTop() <= '250') $(scrollDiv).fadeOut('slow');
      else $(scrollDiv).fadeIn('slow');
    });

    $(this).click(function() {
      $('html, body').animate({ scrollTop: 0 }, 'slow')
    })
}
});

$(function() {
  $('#go-top').scrollToTop();
});
