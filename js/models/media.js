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
  itemVideo() {}
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
  itemImage() {}
}
class Factory {
  constructor(type, data) {
    if (type === "image") {
      return new Image(data);
    } else {
      return new Video(data);
    }
  }
}
