var button = document.querySelector(".search");
var popup = document.querySelector(".hotel-search");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  var classes = popup.className.split(' ');

  if (classes.length > 1) {
    popup.classList.remove("hotel-search-show");
  }
  else {
    popup.classList.add("hotel-search-show");
  }
});

