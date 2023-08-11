/* eslint-disable */
'use strict';
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let mybutton;

window.addEventListener('DOMContentLoaded', (event) => {

mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", function() {topFunction()});
window.onscroll = function() {scrollFunction()};

let bLeft = document.getElementById('left'),
    bRight = document.getElementById('right');

bLeft.addEventListener('click', function() {plusDivs(-1)});
bRight.addEventListener('click', function() {plusDivs(1)});

let leftF = document.getElementById('left-features'),
    rightF = document.getElementById('right-features'),
    now = document.getElementById('now');

leftF.addEventListener('click', function() {plusDivsFeatures(-1)});
rightF.addEventListener('click', function() {plusDivsFeatures(1)});
});
var slideIndex = 1;
var slideIndexFeatures = 1;
showDivs(slideIndex);
showDivsFeatures(slideIndexFeatures);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivsFeatures(n) {
  showDivsFeatures(slideIndexFeatures += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";
}

function showDivsFeatures(n) {
  var i;
  var x = document.getElementsByClassName("mySlides-features");
  if (n > x.length) {slideIndexFeatures = 1}
  if (n < 1) {slideIndexFeatures = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndexFeatures-1].style.display = "block"; 
  now.textContent = '0' + slideIndexFeatures; 
}

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}