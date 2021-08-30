class Video {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.video = data.video;
    this.likes = data.likes;
    this.photographId = data.photographerId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
    this.photographerName = "";
  }
  displayItemMedias() {
    const containerMedia = document.querySelector(
      ".containerPhotographerSelected__medias"
    );
    const templateVideo = `
    <div class="media">
      <video  class="modalOpenMedia" aria-label="${this.title}, closeup view" tabindex="0">
        <source src="/assets/${this.photographerName}/${this.video}"
            type="video/mp4">
         Sorry, your browser doesn't support embedded videos.
        </video>
        <div class="media__info">
            <p class="mr-2"> ${this.title}</p>
            <div class="media__info-info" aria-label="likes" tabindex="0">
              <p>${this.likes}</p>
              <i class="fas fa-heart ml-2"></i>
            </div>
        </div>
    </div>
    `;
    containerMedia.insertAdjacentHTML("beforeend", templateVideo);
  }
  displayItemMediasSlider() {
    const containerSlider = document.querySelector(".carouselMedias__medias");
    const templateVideoSlider = `
    <div class="carouselMedias__item">
      <video controls class="modalOpenMedia" >
        <source src="/assets/${this.photographerName}/${this.video}"
          type="video/mp4">
        Sorry, your browser doesn't support embedded videos.
        </video>
      <p>${this.title}</p>
    </div>
    `;
    containerSlider.insertAdjacentHTML("beforeend", templateVideoSlider);
  }
}
class Image {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.img = data.image;
    this.likes = data.likes;
    this.photographId = data.photographerId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
    this.photographerName = "";
  }
  displayItemMedias() {
    const containerMedia = document.querySelector(
      ".containerPhotographerSelected__medias"
    );
    const templateImg = `
    <div class="media">
      <img class="modalOpenMedia" aria-label="${this.title}, closeup view" tabindex="0" src="/assets/${this.photographerName}/${this.img}" alt="${this.title}">
      <div class="media__info">
        <p class="mr-2">${this.title}</p>
        <div class="media__info-info" aria-label="likes" tabindex="0">
          <p>${this.likes}</p>
          <i class="fas fa-heart ml-2"></i>
        </div>
      </div>
    </div>
    `;
    containerMedia.insertAdjacentHTML("beforeend", templateImg);
  }
  displayItemMediasSlider() {
    const containerSlider = document.querySelector(".carouselMedias__medias");
    const templateImageSlider = `
      <div class="carouselMedias__item">
        <img src="/assets/${this.photographerName}/${this.img}" aria-label="${this.title}" alt="${this.title}">
        <p>${this.title}</p>
      </div>
    `;
    containerSlider.insertAdjacentHTML("beforeend", templateImageSlider);
  }
}
class FactoryMedia {
  constructor(media, data) {
    if (media === "image") {
      return new Image(data);
    } else {
      return new Video(data);
    }
  }
}
