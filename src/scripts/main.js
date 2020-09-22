'use strict';

$(
  '<div class="product-quantity-nav">\n'
  + '<div class="product-quantity-button product-quantity-down">-</div>\n'
    + '<div class="product-quantity-button product-quantity-up">+</div>\n'
    + '</div>').insertAfter('.product-quantity input');

$('.product-quantity').each(
  function() {
    const spinner = $(this);
    const input = spinner.find('input[type="number"]');
    const btnUp = spinner.find('.product-quantity-up');
    const btnDown = spinner.find('.product-quantity-down');
    const min = input.attr('min');
    const max = input.attr('max');

    btnUp.click(function() {
      const oldValue = parseFloat(input.val());
      let newVal = 0;

      if (oldValue >= max) {
        newVal = oldValue;
      } else {
        newVal = oldValue + 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });

    btnDown.click(function() {
      const oldValue = parseFloat(input.val());
      let newVal = 0;

      if (oldValue <= min) {
        newVal = oldValue;
      } else {
        newVal = oldValue - 1;
      }
      spinner.find('input').val(newVal);
      spinner.find('input').trigger('change');
    });
  });
