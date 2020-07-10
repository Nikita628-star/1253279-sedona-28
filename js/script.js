var link = document.querySelector(".search");
var popup = document.querySelector(".hotel-search");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("hotel-search-show")
});

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggleClass("hotel-search-show")
});
