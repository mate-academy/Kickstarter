'use strict';

const modal = function(modalSelector, overlaySelector, close, open) {
  const modalWindow = document.querySelector(modalSelector);
  const overlay = document.querySelector(overlaySelector);
  const btnCloseModal = document.querySelector(close);
  const btnsOpenModal = document.querySelectorAll(open);

  const openModal = function(e) {
    e.preventDefault();
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function() {
    modalWindow.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
      closeModal();
    }
  });
};

module.exports = { modal };
