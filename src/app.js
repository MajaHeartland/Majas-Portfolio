//POPUP
function openPopup() {
  document.getElementById("popup").classList.add("popup--active");
}

function closePopup(event) {
  if (
    event.target.id === "popup" ||
    event.target.classList.contains("popup__close")
  ) {
    document.getElementById("popup").classList.remove("popup--active");
  }
}
