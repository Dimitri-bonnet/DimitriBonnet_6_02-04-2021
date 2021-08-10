class Slider {
  constructor() {}
  initSlider(media, e) {
    console.log(media);
    console.log(e.target);
    let count = 0;
    const itemMediaSlider = document.querySelectorAll(
      ".carouselMedias__item"
    );
    console.log(itemMediaSlider);
    itemMediaSlider[4].classList.add("active");
    document.addEventListener("keydown", this.keyPress);
    const nbSlide = itemMediaSlider.length;
    const previousMedia = document.querySelector(".fa-chevron-left");
    const nextMedia = document.querySelector(".fa-chevron-right");
    previousMedia.addEventListener("click", () => {
      this.previousMedia(nbSlide, count);
    });
    nextMedia.addEventListener("click", () => {
      this.nextMedia(nbSlide, count);
    });

  }

  previousMedia(nbSlide, count) {
    console.log("previous");
    console.log(nbSlide);
    console.log(count);
    if (count > 0) {
      count--;
      console.log("count --");
    } else {
      count = nbSlide - 1;
    }
    console.log(count);
    /*  

    itemsMediaSlider[count].classList.remove("active");
    if (count > 0) {
      count--;
    } else {
      count = nbSlide - 1;
    }
    itemsMediaSlider[count].classList.add("active"); */
  }

  nextMedia(nbSlide, count) {
    console.log("next");
    console.log(count);
    console.log(nbSlide);
    /* itemsMedia[count].classList.remove("active"); */
    if (count < nbSlide - 1) {
      count++;
    } else {
      count = 0;
    }
    /*  itemsMedia[count].classList.add("active"); */
  }
  keyPress = (e) => {
    if (e.keyCode === 37) {
      this.previousMedia();
    } else if (e.keyCode === 39) {
      this.nextMedia();
    }
  };
}
