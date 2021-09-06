class Slider {
  constructor() {
    this.index;
    this.itemSlider;
    this.nbSlider;
  }
  findIndex(index) {
    const itemMediaSlider = document.querySelectorAll(".carouselMedias__item");
    itemMediaSlider.forEach((item) => {
      item.classList.remove("active");
    });
    itemMediaSlider[index].classList.add("active");
    this.index = index;
    this.itemSlider = itemMediaSlider;
    this.nbSlider = itemMediaSlider.length;
  }
  previousMedia() {
    this.itemSlider[this.index].classList.remove("active");
    if (this.index > 0) {
      this.index--;
    } else {
      this.index = this.nbSlider - 1;
    }
    this.itemSlider[this.index].classList.add("active");
  }
  nextMedia() {
    this.itemSlider[this.index].classList.remove("active");
    if (this.index < this.nbSlider - 1) {
      this.index++;
    } else {
      this.index = 0;
    }
    this.itemSlider[this.index].classList.add("active");
  }
  closeSlider() {
    this.index = 0;
  }
  keyPress() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.closeSlider();
      } else if (e.keyCode === 37) {
        this.previousMedia();
      } else if (e.keyCode === 39) {
        this.nextMedia();
      } else if (e.keyCode === 27) {
        this.closeSlider();
      }
    });
  }

}
