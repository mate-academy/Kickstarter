'use strict';
$(document).ready(function(){
  $('.description-slider').slick({
    slidesToScroll: 1,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });
})
