class Modal {
  constructor() {}
  lauchModal(e, media) {
    modal.style.display = "block";
    if (e.target.classList.contains("modalOpenForm")) {
      contentModalMedia.style.display = "none";
      contentModalForm.style.display = "block";
    } else if (e.target.classList.contains("modalOpenMedia")) {
      contentModalForm.style.display = "none";
      contentModalMedia.style.display = " block";
      const slider = new Slider();
      slider.initSlider(media, e);
    }
  }
  closeModal() {
    modal.style.display = "none";
  }
}
/* Dom elements */
/* MODAL */
const modal = document.querySelector(".bgGround");
const clossModal = document.querySelectorAll(".modal__close");
const contentModalForm = document.querySelector(".modal__content-form");
const contentModalMedia = document.querySelector(".modal__content-media");
const openModalForm = document.querySelectorAll(".modalOpenForm");
/* Close modal */
const modale = new Modal();
openModalForm.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    modale.lauchModal(e);
  })
);
clossModal.forEach((btn) =>
  btn.addEventListener("click", () => {
    modale.closeModal();
  })
);
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 27) {
    modale.closeModal();
  }
});
