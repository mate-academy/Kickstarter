'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const callBackButton = document.querySelector('#header__buy-callback');
  const modal1 = document.querySelector('#modal-buy');
  const closeButton = modal1.querySelector('.modal-buy__close');
  const tagBody = document.getElementsByTagName('body');

  callBackButton.onclick = function(e) {
    e.preventDefault();
    modal1.classList.add('modal-buy__active');
    tagBody.classList.add('modal-buy__hidden');
  };

  closeButton.onclick = function(e) {
    e.preventDefault();
    modal1.classList.remove('modal-buy__active');
    tagBody.classList.remove('modal-buy__hidden');
  };

  modal1.onmousedown = function(e) {
    const modalContent = modal1.querySelector('.modal-buy__content');

    if (e.target.closest('.' + modalContent.className) === null) {
      this.classList.remove('modal-buy__active');
      tagBody.classList.remove('modal-buy__hidden');
    }
  };
});
