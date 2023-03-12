'use strict';

const name = document.getElementById('text');
const email = document.getElementById('email');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  const messages = [];

  if (name === '' || name === null) {
    messages.push('Name is requered');
  }

  if (email === '' || email === null) {
    messages.push('email is requered');
  }

  if (messages.length > 0) {
    event.preventDefault();
  }

  event.preventDefault();
  form.reset();
});

let count = 0;

const number = document.getElementById('first-number');

function changeText1() {
  count++;

  if (count === 2) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'unset';
    number.innerText = '03';
  } else if (count === 1) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'unset';
    document.getElementById('first-card').style.display = 'none';
    number.innerText = '02';
  } else if (count === 0) {
    document.getElementById('third-card').style.display = 'unset';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'none';
    number.innerText = '01';
  }

  if (count > 2) {
    count = 2;
  }
}

function changeText2() {
  count--;

  if (count === 0) {
    document.getElementById('third-card').style.display = 'unset';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'none';
    number.innerText = '01';
  } else if (count === 1) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'unset';
    document.getElementById('first-card').style.display = 'none';
    number.innerText = '02';
  } else if (count === 2) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'unset';
    number.innerText = '02';
  }

  if (count < 0) {
    count = 0;
  }
}

const nextBtn = document.getElementById('next-btn');

const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', changeText1);
prevBtn.addEventListener('click', changeText2);
