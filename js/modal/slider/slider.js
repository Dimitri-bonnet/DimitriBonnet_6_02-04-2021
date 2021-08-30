class Slider {
  constructor() {
    this.index;
    this.itemSlider;
    this.nbSlider;
  }
  findIndex(index) {
    console.log(index);
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
}
