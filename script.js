const previews = document.querySelectorAll(".preview");
const modal = document.querySelector("#modal");
const modalCloseBtn = document.querySelector(".modal-close-btn");

previews.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "block";
  });
});

modalCloseBtn.addEventListener("click", function () {
  this.parentNode.style.display = "none";
});
