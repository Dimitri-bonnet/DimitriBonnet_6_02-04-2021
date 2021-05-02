const _urlApi =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
const params = new URLSearchParams(window.location.search);
const photogrpaherId = params.get("");

class PagePhotographer {
  constructor(id) {
    this.photographer = { id: id };
    this.medias = [];
  }
  /* PHOTOGRAPHER */
  async getPhotogrpaher() {
    this.photographer.id = photogrpaherId;
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataPhotographers = data["photographers"];
    const photographerFiltre = dataPhotographers.filter(
      (photographer) => photographer.id == this.photographer.id
    )[0];
    this.photographer = photographerFiltre;
    console.log(this.photographer);
    pagePhotographer.displayPhotographer();
  }

  async displayPhotographer() {
    const bannerName = document.querySelector(
      ".photographerBanner__info-name h1"
    );
    bannerName.append(this.photographer.name);
    const bannerLocation = document.querySelector(
      ".photographerBanner__info-country"
    );
    bannerLocation.append(
      `${this.photographer.country}, ${this.photographer.city}`
    );
    const bannerTagline = document.querySelector(
      ".photographerBanner__info-tagline"
    );
    bannerTagline.append(this.photographer.tagline);
    const bannerImg = document.querySelector(".photographerBanner__img img");
    bannerImg.src = `../assets/Photographers ID Photos/${this.photographer.portrait}`;
    const bannerLabels = document.querySelector(
      ".photographerBanner__info-labels"
    );
    this.photographer.tags.forEach((tag) => {
      const labelPhotographer = document.createElement("a");
      const spanLabel = document.createElement("span");
      labelPhotographer.append(spanLabel);
      spanLabel.append("#" + tag);
      labelPhotographer.classList.add("btnLabel");
      bannerLabels.append(labelPhotographer);
    });
    /* Sticky Banner */
    const stickyBannerPrice = document.querySelector(".stickyBanner__price p");
    stickyBannerPrice.append(this.photographer.price + "€" + "/jour");
    /* Modal contact */
    const modalContactName = document.querySelector(".modal__name");
    modalContactName.append(this.photographer.name);
  }
  /* MEDIA */
  async getMedias() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataMedia = data["media"];
    const result = dataMedia.filter(
      (media) => media.photographerId === this.photographer.id
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
          media.title,
          media.video
        )
      );
      total += media.likes;
    });
    const stickyBannerLikes = document.querySelector(".stickyBanner__like p");
    stickyBannerLikes.classList.add("mr-2");
    stickyBannerLikes.append(total);
    console.log(total);
  }
  async displayMedias() {
    const containerImgs = document.querySelector(
      ".containerPhotographerSelected__imgs"
    );
    setTimeout(() => {
      //todo tableau vide si pas setTimeOut
      console.log(this.medias);
      this.medias.forEach((media) => {
        containerImgs.append(media.createPictureItem());
      });
    }, 1000);
  }
  /* SORT */
  /* Bylikes */
  sortBylikes() {
    this.medias.sort((a, b) => {
      return b.likes - a.likes;
    });
    this.medias = this.medias;
    console.log(this.medias);
    console.log('pop'); //TODO RELOAD ?
  }
  /* Bydate */
  sortByDate() {
    console.log('date');
  }
  /* ByName */
  sortByName(){
    this.medias.sort((a, b) => a.title.localeCompare(b.title))
    console.log(this.medias);
    console.log('name');
  }
}

const pagePhotographer = new PagePhotographer();
pagePhotographer.getPhotogrpaher();
pagePhotographer.getMedias();
pagePhotographer.displayMedias();

const btnSortLikes = document.querySelector(".pop");
btnSortLikes.addEventListener("click", function(){
  pagePhotographer.sortBylikes();
});
const btnSortName = document.querySelector(".name");
btnSortName.addEventListener("click", function(){
  pagePhotographer.sortByName();
})
const btnSortDate = document.querySelector(".date");
btnSortDate.addEventListener("click", function(){
pagePhotographer.sortByDate();
})

