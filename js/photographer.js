const _urlApi =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeDataFR.json";
class PagePhotographer {
  constructor() {
    this.photographers = [];
    this.medias = [];
    /* this.selectedPhotographer = [] */
  }

  async getPhotogrpahers() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataPhotographers = data["photographers"];
    dataPhotographers.forEach((photographer) => {
      this.photographers.push(
        new Photographer(
          photographer.id,
          photographer.name,
          photographer.portrait,
          photographer.country,
          photographer.city,
          photographer.price,
          photographer.tagline,
          photographer.tags
        )
      );
    });
    this.filterSelectedPhotographer();
  }

  async getMedias() {
    const queryString = window.location.search;
    const photographerId = queryString.split("?").join("");
    const integerPhotographerId = parseInt(photographerId);
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataMedia = data["media"];
    const result = dataMedia.filter(
      (media) => media.photographerId === integerPhotographerId
    );
    console.log(result);
    let total = 0;
    result.forEach((media) => {
      this.medias.push(
        new Media(
          media.date,
          media.id,
          media.image,
          media.likes,
          media.price,
          media.tags,
          media.video
        )
      );
      total += media.likes
  
      console.log(media.likes);
 
    }); 
    console.log(this.medias)
    const stickyBannerLikes = document.querySelector(
      ".stickyBanner__like p"
    );
    stickyBannerLikes.classList.add('mr-2')
    stickyBannerLikes.append(total);
    console.log(total);
    
  }
  

  async displayMedias() {
    await this.getMedias();
    /* FOREACH ON MEDIAS */
    this.medias.forEach((media) => {
      media.createPictureItem();
    });
  }

  filterSelectedPhotographer() {
    const queryString = window.location.search;
    const photographerId = queryString.split("?").join("");
    const integerPhotographerId = parseInt(photographerId);
    const result = this.photographers.filter(
      (photographer) => photographer.id === integerPhotographerId
    );
    /* console.log(result); */
    result.forEach((photographer) => {
      /* DOM */
      /* BANNER */
      const bannerName = document.querySelector(
        ".photographerBanner__info-name h1"
      );
      bannerName.append(photographer.name);
      const bannerLocation = document.querySelector(
        ".photographerBanner__info-country"
      );
      bannerLocation.append(`${photographer.country}, ${photographer.city}`);
      const bannerTagline = document.querySelector(
        ".photographerBanner__info-tagline"
      );
      bannerTagline.append(photographer.tagline);
      const bannerImg = document.querySelector(".photographerBanner__img img");
      bannerImg.src = `../assets/Photographers ID Photos/${photographer.portrait}`;
      const bannerLabels = document.querySelector(
        ".photographerBanner__info-labels"
      );
      /* console.log(photographer.tags); */
      photographer.tags.forEach((tag) => {
        const labelPhotographer = document.createElement("a");
        const spanLabel = document.createElement("span");
        labelPhotographer.append(spanLabel);
        spanLabel.append("#" + tag);
        labelPhotographer.classList.add("btnLabel");
        bannerLabels.append(labelPhotographer);
      });
      /* Sticky Banner */
     
      const stickyBannerPrice = document.querySelector(
        ".stickyBanner__price p"
      );
      stickyBannerPrice.append(photographer.price + "€" + "/jour");

      /* Modal contact */
      const modalContactName = document.querySelector(".modal__name");
      modalContactName.append(photographer.name);
    });
  }
}

const pagePhotographer = new PagePhotographer();
pagePhotographer.getPhotogrpahers();
pagePhotographer.displayMedias();
/* pagePhotographer.calcLikes(); */
class Photographer {
  constructor(id, name, portrait, country, city, price, tagline, tags) {
    this.id = id;
    this.name = name;
    this.portrait = portrait;
    this.country = country;
    this.city = city;
    this.price = price;
    this.tagline = tagline;
    this.tags = tags;
  }
}
class Media {
  constructor(date, id, image, likes, price, tags, video) {
    this.date = date;
    this.id = id;
    this.img = image;
    this.likes = likes;
    this.price = price;
    this.tags = tags;
    this.video = video;
  }
  createPictureItem = () => {
    /* Container DOM pictures  */
    const containerPictures = document.querySelector(
      ".containerPhotographerSelected__imgs"
    );
    /* APPEND TO CONTAINER */
    const containerPicture = document.createElement("div");
    containerPicture.classList.add("picture");
    containerPictures.append(containerPicture);
    /*  */
    const contentPictur = document.createElement("div");
    contentPictur.classList.add("picture__img");
    containerPicture.append(contentPictur);
    const imgPicture = document.createElement("img");
    imgPicture.classList.add("modalOpenPicture");
    contentPictur.append(imgPicture);
    imgPicture.src = "../assets/Ellie Rose/Architecture_Connected_Curves.jpg";
    /*  */
    const containerPictureInfo = document.createElement("div");
    containerPictureInfo.classList.add("picture__info");
    const pictureInfoName = document.createElement("span");
    pictureInfoName.classList.add("picture__info-name");
    pictureInfoName.append(this.name);
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
  };
}

/* calcLikesPhotogrpaher(){
    this.price
} */
/* createPictureItem(); */
