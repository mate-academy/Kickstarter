'use strict';
var swiper = new Swiper(".mySwiper", {
  autoplay:{
    delay: 3000,
  },
    loop: true,
});

var swiper = new Swiper(".mySwiperFeatures", {
  autoplay:{
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
