class Modal {
  constructor() {
    this.modal =  document.querySelector(".bgGround")
  }
  lauchModal(e) {
    const ignoreTab = document.querySelectorAll(".ignoreTab")
    ignoreTab.forEach((el) => {
      el.setAttribute("tabindex", "-1")
    })
    const modal = document.querySelector(".bgGround");
    const clossModal = document.querySelectorAll(".modal__close");
    const contentModalForm = document.querySelector(".modal__content-form");
    const contentModalMedia = document.querySelector(".modal__content-media");
    const modalContent = document.querySelector(".modal__content")
    const btn = document.querySelector(".contact")
    modal.style.display = "block";
    if (e.target.classList.contains("modalOpenForm")) {
      btn.style.display =" block"
      contentModalMedia.style.display = "none";
      contentModalForm.style.display = "block";
      document.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          this.closeModal();
        }
      });
    } else if (e.target.classList.contains("modalOpenMedia")) {
      btn.style.display ="none"
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
   const ignoreTab = document.querySelectorAll(".ignoreTab")
   ignoreTab.forEach((el) => {
     el.setAttribute("tabindex", "0   ")
   })
  }
  
}
