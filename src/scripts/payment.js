'use strict';

const paymentForm = document.forms['payment-data'];

paymentForm.onsubmit = function() {
  window.location.href = 'thanks.html';

  return false;
};
