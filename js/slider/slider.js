class Slider {
  constructor() {}
  selectedMedia(media) {
    console.log(media);
    const itemsPictureSlider = document.querySelectorAll(
      ".carouselPictures__item"
    );
    const nbSlide = itemsPictureSlider.length;
    itemsPictureSlider[0].classList.add("active");
  }
  previousPicture(count) {
    console.log(count);

    /*  itemsPictureSlider[count].classList.remove("active");
    console.log("previous");
    if (count > 0) {
      count--;
    } else {
      count = nbSlide - 1;
    }
    itemsPictureSlider[count].classList.add("active"); */
  }

  /*   nextPicture() {
    console.log("next");
    itemsPicture[count].classList.remove("active");
    if (count < nbSlide - 1) {
      count++;
    } else {
      count = 0;
    }
    itemsPicture[count].classList.add("active");
  } */
  keyPress = (e) => {
    //TODO FONCTIONNE UNIQUEMENT QUAND MODAL PICTURE EST OPEN
    if (e.keyCode === 37) {
      this.previousPicture();
    } else if (e.keyCode === 39) {
      this.nextPicture();
    }
  };
}
let count = 0;
const slider = new Slider();
const previousPicture = document.querySelector(".fa-chevron-left");
const nextPicture = document.querySelector(".fa-chevron-right");
previousPicture.addEventListener("click", () => {
  slider.previousPicture(count);
});
nextPicture.addEventListener("click", () => {
  slider.nextPicture();
});
document.addEventListener("keydown", slider.keyPress);
(async function () {
  /* const itemsPictureSlider = document.querySelectorAll(".carouselPictures__item");
console.log(itemsPictureSlider);
const nbSlide = itemsPictureSlider.length;
console.log(nbSlide);
*/
})();

/* Dom elements */
/* SLIDER */
/* const leftSlider = document.querySelector(".fa-chevron-left");
const rightSlider = document.querySelector(".fa-chevron-right");
const itemsPicture = document.querySelectorAll(".carouselPictures__item"); */
/* const nbSlide = itemsPicture.length;
let count = 0; */
/* previousPicture = () => {
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
}; */
