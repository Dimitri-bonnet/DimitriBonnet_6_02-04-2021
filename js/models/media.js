class Media {
  constructor(date, id, image, likes, photographId, price, tags, title, video) {
    this.date = date;
    this.id = id;
    this.img = image;
    this.likes = likes;
    this.photographId = photographId;
    this.price = price;
    this.tags = tags;
    this.title = title;
    this.video = video;
  }
}
class Video {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.video = data.video;
    this.likes = data.likes;
    this.photographId = data.photographId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
  }
  itemVideo() {
    const video = document.createElement("video");
    video.classList.add("modalOpenMedia");
    video.srcObject = `/assets/${this.photographer.name}/${media.video}`;
    video.setAttribute("aria-label", `${media.title}, closeup view`)
    video.setAttribute("tabindex", "0")
    video.addEventListener("click", (e) => {
      const modal = new Modal();
      modal.lauchModal(e,media)
    })
  }
}
class Image {
  constructor(data) {
    this.date = data.date;
    this.id = data.id;
    this.img = data.image;
    this.likes = data.likes;
    this.photographId = data.photographId;
    this.price = data.price;
    this.tags = data.tags;
    this.title = data.title;
  }
  itemImage() {
    const img = document.createElement("img");
    img.classList.add("modalOpenMedia");
    img.src = `../assets/${this.photographer.name}/${media.img}`;
    img.setAttribute("aria-label", `${media.title}, closeup view`);
    img.setAttribute("tabindex", "0");
    img.addEventListener("click", (e) => {
      const modal = new Modal();
      modal.lauchModal(e, media);
    });
  }
}
class Factory {
  constructor(media, data) {
    if (media === "image") {
      return new Image(data);
    } else {
      return new Video(data);
    }
  }
}
