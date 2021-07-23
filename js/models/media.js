class Media {
  constructor(date, id, image, likes, price, tags, title, video) {
    this.date = date;
    this.id = id;
    this.img = image;
    this.likes = likes;
    this.price = price;
    this.tags = tags;
    this.title = title;
    this.video = video;
  }
  createPictureItem = () => {
    const templateMedia = `
        <div class="picture">
          <div class="picture__img">
            <img class="modalOpenPicture" alt="${this.title}, closeup view" src="../assets/Ellie Rose/${this.img}">
          </div>
          <div class="picture__info">
           <span class="picture__info-name">${this.title}</span>
           <div class="picture__info-info">
            <div class="mr-2">
              <p>${this.price}</p>
            </div>
            <div>
                <p aria-label="">
                ${this.likes}
                <i class="fas fa-heart ml-2"></i>
                </p>
            </div>
           </div>
          </div>
        </div>
      `;
    return templateMedia;
  };
  createPictureItemSlider = () => {
    const templateItemPictureSlider = `
      <div class="carouselPictures__item">
        <img src="../assets/Ellie Rose/${this.img}"alt="">
        <p class="carouselPictures__name">${this.title}</p>
      </div>
      `;
    return templateItemPictureSlider;
  };
}
