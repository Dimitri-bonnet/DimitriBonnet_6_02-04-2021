class Modal {
  constructor() {
    this.modal =  document.querySelector(".bgGround")
  }
  lauchModal(e) {
    const modal = document.querySelector(".bgGround"); //false
    const clossModal = document.querySelectorAll(".modal__close");
    const modalContent = document.querySelector(".modal__content"); //true
    const contentModalForm = document.querySelector(".modal__content-form");
    const contentModalMedia = document.querySelector(".modal__content-media");
    const containerPhotographerSelected = document.querySelector(".containerPhotographerSelected");
    containerPhotographerSelected .setAttribute("aria-hidden", "true")
    modal.setAttribute("aria-hidden", "false")
    modal.style.display = "flex";
    modal.focus()
    if (e.target.classList.contains("modalOpenForm")) {
      contentModalMedia.style.display = "none";
      contentModalForm.style.display = "block";
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.closeModal();
        }
      });
    } else if (e.target.classList.contains("modalOpenMedia")) {
      contentModalForm.style.display = "none";
      contentModalMedia.style.display = " block";
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.closeModal();
        }
      });
    }
    clossModal.forEach((btn) =>
      btn.addEventListener("click", () => {
        this.closeModal();
      })
    );
  }
  closeModal() {
   this.modal.style.display = "none";
  }
  
}
