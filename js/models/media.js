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
      /* APPEND TO CONTAINER */
      const containerPicture = document.createElement("div");
      containerPicture.classList.add("picture");
      /*  */
      const contentPictur = document.createElement("div");
      contentPictur.classList.add("picture__img");
      containerPicture.append(contentPictur);
      const imgPicture = document.createElement("img");
      imgPicture.classList.add("modalOpenPicture");
      contentPictur.append(imgPicture);
      imgPicture.src = "../assets/Ellie Rose/Architecture_Connected_Curves.jpg"; //TODO Comment récuprer le nom de mon photographer
      /*  */
      const containerPictureInfo = document.createElement("div");
      containerPictureInfo.classList.add("picture__info");
      const pictureInfoName = document.createElement("span");
      pictureInfoName.classList.add("picture__info-name");
      pictureInfoName.append(this.title);
      containerPictureInfo.append(pictureInfoName);
      const contentPictureInfo = document.createElement("div");
      contentPictureInfo.classList.add("picture__info-info");
      containerPictureInfo.append(contentPictureInfo);
      const wrapperInfoPicturePrice = document.createElement("div");
      wrapperInfoPicturePrice.classList.add("mr-2");
      const infoPicturePrice = document.createElement("p");
      infoPicturePrice.append(this.price + "€");
      wrapperInfoPicturePrice.append(infoPicturePrice);
      const wrapperInfoPictureLikes = document.createElement("div");
      const infoPictureLikes = document.createElement("p");
      infoPictureLikes.append(this.likes);
      const iconLikes = document.createElement("i");
      iconLikes.classList.add("fas", "fa-heart", "ml-2");
      infoPictureLikes.append(iconLikes);
      wrapperInfoPictureLikes.append(infoPictureLikes);
      contentPictureInfo.append(wrapperInfoPicturePrice, wrapperInfoPictureLikes);
      /*  */
      containerPicture.append(contentPictur, containerPictureInfo);
      return containerPicture;
    };

    
  }
  