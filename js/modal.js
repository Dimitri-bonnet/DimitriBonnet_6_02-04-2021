/* MODAL */
/* Dom elements */
const modal = document.querySelector(".bgGround");
const clossModal = document.querySelectorAll(".modal__close");
const contentModalForm = document.querySelector(".modal__content-form");
const contentModalPicture = document.querySelector(".modal__content-picture");
const openModalPicutre = document.querySelectorAll(".modalOpenPicture");
const openModalForm = document.querySelectorAll(".modalOpenForm");
/* OpenModal */
const lauchModal = (e) => {
  modal.style.display = "block";
  if (e.target.classList.contains("modalOpenForm")) {
    contentModalPicture.style.display = "none";
    contentModalForm.style.display = "block";
    console.log("openModalForm");
  } else if (e.target.classList.contains("modalOpenPicture")) {
    contentModalForm.style.display = "none";
    contentModalPicture.style.display = " block";
    console.log("openModalPicture");
  }
};
openModalPicutre.forEach((btn) => btn.addEventListener("click", lauchModal));
openModalForm.forEach((btn) => btn.addEventListener("click", lauchModal));
/* Close modal */
const closeModal = () => {
  modal.style.display = "none";
};
clossModal.forEach((btn) => btn.addEventListener("click", closeModal));