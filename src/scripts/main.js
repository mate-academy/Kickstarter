'use strict';
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".main__form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            


            form.reset();
        });
    }
});
