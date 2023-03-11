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

function changeText1() {
  count++;

  if (count % 3 === 0) {
    document.getElementById('third-card').style.display = 'unset';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'none';
  } else if (count % 2) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'unset';
    document.getElementById('first-card').style.display = 'none';
  } else {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'unset';
  }
}

function changeText2() {
  count--;

  if (count % 3 === 0) {
    document.getElementById('third-card').style.display = 'unset';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'none';
  } else if (count % 2) {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'unset';
    document.getElementById('first-card').style.display = 'none';
  } else {
    document.getElementById('third-card').style.display = 'none';
    document.getElementById('second-card').style.display = 'none';
    document.getElementById('first-card').style.display = 'unset';
  }
}

const nextBtn = document.getElementById('next-btn');

const prevBtn = document.getElementById('prev-btn');

nextBtn.addEventListener('click', changeText1);
prevBtn.addEventListener('click', changeText2);
