'use strict';

document.getElementById('next').onclick = function() {
  const widthItem = document.querySelector('.features__card-main').offsetWidth;

  document.getElementById('features__id').scrollLeft += widthItem;
};

document.getElementById('prev').onclick = function() {
  const widthItem = document.querySelector('.features__card-main').offsetWidth;

  document.getElementById('features__id').scrollLeft -= widthItem;
};
