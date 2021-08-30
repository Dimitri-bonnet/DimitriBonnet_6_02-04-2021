class Modal {
  constructor() {}
  lauchModal(e, slider) {
    const modal = document.querySelector(".bgGround");
    const clossModal = document.querySelectorAll(".modal__close");
    const modalContent = document.querySelector(".modal__content");
    const contentModalForm = document.querySelector(".modal__content-form");
    const contentModalMedia = document.querySelector(".modal__content-media");
    modal.style.display = "block";
    modalContent.setAttribute("tabIndex", "-1");
    modalContent.focus()
    if (e.target.classList.contains("modalOpenForm")) {
      contentModalMedia.style.display = "none";
      contentModalForm.style.display = "block";
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.closeModal(modal);
        }
      });
    } else if (e.target.classList.contains("modalOpenMedia")) {
      contentModalForm.style.display = "none";
      contentModalMedia.style.display = " block";
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.closeModal(modal);
        } else if (e.keyCode === 37) {
          slider.previousMedia();
        } else if (e.keyCode === 39) {
          slider.nextMedia();
        } else if (e.keyCode === 27) {
          slider.closeSlider();
        }
      });
    }
    clossModal.forEach((btn) =>
      btn.addEventListener("click", () => {
        this.closeModal(modal);
      })
    );
  }
  closeModal(modal) {
    modal.style.display = "none";
  }
}
