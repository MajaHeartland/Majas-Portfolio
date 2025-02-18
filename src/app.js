//POPUP
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popup");
  const popupTitle = popup.querySelector(".popup__title");
  const popupImage = popup.querySelector(".popup__image");
  const popupDescription = popup.querySelector(".popup__description");
  const popupProjectBtn = popup.querySelector(".popup__btn--view");
  const popupCodeBtn = popup.querySelector(".popup__btn--code");
  const popupClose = popup.querySelector(".popup__close");
  const projectButtons = document.querySelectorAll(".project__btn");

  projectButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Get additional project details from data attributes
      const title = button.getAttribute("data-title");
      const image = button.getAttribute("data-image");
      const description = button.getAttribute("data-description");
      const projectLink = button.getAttribute("data-project-link");
      const codeLink = button.getAttribute("data-code-link");

      // Update popup content
      popupTitle.innerText = title;
      popupImage.src = image;
      popupDescription.innerText = description;
      popupProjectBtn.href = projectLink;
      popupCodeBtn.href = codeLink;

      // Show popup
      popup.classList.add("popup--active");
    });
  });

  // Close popup when clicking on background or close button
  popup.addEventListener("click", function (event) {
    if (
      event.target === popup ||
      event.target.classList.contains("popup__close")
    ) {
      popup.classList.remove("popup--active");
    }
  });
});
