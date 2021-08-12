class Slider {
  constructor() {
    this.count = 0;
  }
  async initSlider(media, e) {
    console.log(media, e);
    const itemMediaSlider = document.querySelectorAll(".carouselMedias__item");
    const nbSlide = itemMediaSlider.length;
    /*  */
    const previousMedia = document.querySelector(".fa-chevron-left");
    previousMedia.addEventListener("click", () => {
      this.previousMedia(nbSlide, itemMediaSlider);
    });
    /*  */
    const nextMedia = document.querySelector(".fa-chevron-right");
    nextMedia.addEventListener("click", () => {
      this.nextMedia(nbSlide, itemMediaSlider);
    });
    /*  */
    const close = document.querySelector(".modal__close.medias");
    console.log(close);
    close.addEventListener("click", () => {
      this.closeSlider(itemMediaSlider);
    });
    /* document.addEventListener("keydown", this.keyPress); */
  }
  previousMedia(nbSlide, itemMediaSlider) {
    console.log("previous");
    itemMediaSlider[this.count].classList.remove("active");
    if (this.count > 0) {
      this.count--;
      console.log(this.count);
    } else {
      this.count = nbSlide - 1;
      console.log(this.count);
    }
    itemMediaSlider[this.count].classList.add("active");
  }
  nextMedia(nbSlide, itemMediaSlider) {
    console.log("next");
    itemMediaSlider[this.count].classList.remove("active");
    if (this.count < nbSlide - 1) {
      this.count++;
      console.log(this.count);
    } else {
      this.count = 0;
      console.log(this.count);
    }
    itemMediaSlider[this.count].classList.add("active");
    console.log(itemMediaSlider);
  }
  closeSlider(itemMediaSlider) {
    this.count = 0;
    itemMediaSlider.forEach((item) => {
      item.classList.remove("active");
    });
    console.log(itemMediaSlider);
  }
  keyPress(e) {
    //TODO WHY SAY NOT A FUNCTION ?
    if (e.keyCode === 37) {
      this.previousMedia();
    } else if (e.keyCode === 39) {
      this.nextMedia();
    } else if (e.keyCode === 27) {
      this.closeSlider();
    }
  }
}
