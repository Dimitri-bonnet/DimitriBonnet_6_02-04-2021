/* Dom elements */
/* MODAL */
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
  } else if (e.target.classList.contains("modalOpenPicture")) {
    contentModalForm.style.display = "none";
    contentModalPicture.style.display = " block";
    pagePhotographer.displayMediasSlider();
  }
};
/* Close modal */
const closeModal = () => {
  modal.style.display = "none";
};
openModalPicutre.forEach((btn) => btn.addEventListener("click", lauchModal));
openModalForm.forEach((btn) => btn.addEventListener("click", lauchModal));
clossModal.forEach((btn) => btn.addEventListener("click", closeModal));


/* Dom elements */
/* SLIDER */
/* const sliderPicture = new Media() */
const leftSlider = document.querySelector(".fa-chevron-left");
const rightSlider = document.querySelector(".fa-chevron-right");
const itemsPicture = document.querySelectorAll(".carouselPictures__item");//TODO Problème avec la DOM car utilise template literals array VIDE
/* console.log(itemsPicture); */
const nbSlide = itemsPicture.length;
let count = 0;
previousPicture = () => {
  console.log("previous");
  itemsPicture[count].classList.remove("active");
  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }
  itemsPicture[count].classList.add("active");
};
nextPicture = () => {
  console.log("Next");
  itemsPicture[count].classList.remove("active");
  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }
  itemsPicture[count].classList.add("active");
};

keyPress = (e) => {//TODO FONCTIONNE UNIQUEMENT QUAND MODAL PICTURE EST OPEN
  if(e.keyCode === 37){
    previousPicture()
  } else if (e.keyCode === 39){
    nextPicture();  
  }
}
leftSlider.addEventListener("click", previousPicture);
rightSlider.addEventListener("click", nextPicture);
document.addEventListener('keydown', keyPress)