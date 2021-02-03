const burgerButton = document.querySelector('.menu__btn');
const burgerMenu = document.querySelector('.menu__burger')


burgerButton.addEventListener('click', (e) => {
  const flag = e.target.closest('.menu__btn').classList.toggle('flag');

  if (flag) {
    burgerMenu.style.display = 'flex';
  } else {
    burgerMenu.style.display = 'none'
  }

  window.onresize = function(e) {
    let currentWidth = e.target.innerWidth;
    console.log(currentWidth);
    if (currentWidth < 751 && flag) {
      burgerMenu.style.display = 'flex';
    } else {
      burgerMenu.style.display = 'none';
    }
  };
})