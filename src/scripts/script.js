let state = 0;
const content = document.getElementsByClassName("section__7-content");
const pageNumber = document.getElementById("slide-curr");

document.getElementById("left-arrow").addEventListener("click", function() {
  content[state].classList.remove("active");
  if(state === 0) {
    state = 2;
  } else {
    state--;
  }

  renderContent();
  event.preventDefault();
});

document.getElementById("right-arrow").addEventListener("click", function() {
  content[state].classList.remove("active");
  if(state === 2) {
    state = 0;
  } else {
    state++;
  }

  renderContent();
  event.preventDefault();
})

function renderContent() {
  content[state].classList.add("active");
  pageNumber.innerHTML = "0" + (state + 1);
}
