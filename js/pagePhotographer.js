const params = new URLSearchParams(window.location.search);
const photographerId = params.get("");
class PagePhotographer {
  constructor() {
    this.photographer = {};
    this.medias = [];
    this.sortedMedias = [];
    this.modal = new Modal();
    this.slider = new Slider();
  }
  async filterMedias() {
    const service = new Service();
    const dataMedias = await service.getMedias();
    this.medias = dataMedias.filter(
      (media) => media.photographId == photographerId
    );
  }
  async filterPhotographer() {
    const service = new Service();
    const dataPhotographers = await service.getPhotographers();
    this.photographer = dataPhotographers.filter(
      (photographer) => photographer.id == photographerId
    )[0];
  }
  async displayPhotographerBanner() {
    this.photographer.createphotographerBanner();
  }
  async displayMedias() {
    const containerMedia = document.querySelector(
      ".containerPhotographerSelected__medias"
    );
    this.medias.forEach((media, index) => {
      const content = document.createElement("div");
      content.classList.add("media");
      /* Media */
      const img = document.createElement("img");
      img.classList.add("modalOpenMedia");
      img.src = `../assets/${this.photographer.name}/${media.img}`;
      img.setAttribute("aria-label", `${media.title}, closeup view`);
      img.setAttribute("tabindex", "0");
      img.addEventListener("click", (e) => {
        this.modal.lauchModal(e, this.slider);
        this.slider.findIndex(index);
      });
      img.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.modal.lauchModal(e);
          this.slider.findIndex(index);
        }
      });
      /* INFO */
      const mediaInfo = document.createElement("div");
      mediaInfo.classList.add("media__info");
      const title = document.createElement("p");
      title.classList.add("media__info-name");
      title.textContent = media.title;
      const mediaInfoInfo = document.createElement("div");
      mediaInfoInfo.classList.add("media__info-info");
      const price = document.createElement("p");
      price.classList.add("mr-2");
      price.textContent = `${media.price} €`;
      const like = document.createElement("p");
      like.textContent = media.likes;
      const logoLike = document.createElement("i");
      logoLike.classList.add("fas", "fa-heart", "ml-2");
      content.append(img, mediaInfo);
      mediaInfoInfo.append(price, like);
      mediaInfoInfo.appendChild(logoLike);
      mediaInfo.append(title, mediaInfoInfo);
      containerMedia.append(content);
    });
  }
  async displayMediasSlider() {
    const containerSlider = document.querySelector(".carouselMedias__medias");
    this.medias.forEach((media) => {
      const content = document.createElement("div");
      content.classList.add("carouselMedias__item");
      const img = document.createElement("img");
      img.src = `../assets/${this.photographer.name}/${media.img}`;
      img.setAttribute("aria-label", `${media.title}`);
      img.alt = `${media.title}`;
      const name = document.createElement("p");
      name.classList.add("carouselMedias__name");
      name.append(media.title);
      content.append(img, name);
      containerSlider.append(content);
    });
  }
  async totalLikes() {
    let totalLikes = 0;
    this.medias.forEach((media) => {
      totalLikes += media.likes;
    });
    const stickyBannerLikes = document.querySelector(".stickyBanner__like p");
    stickyBannerLikes.append(totalLikes);
  }

  /* SORT */
  sortByPop() {
    const btnSortLikes = document.querySelector(".pop");
    btnSortLikes.addEventListener("click", () => {
      this.removeMedia();
      this.medias.sort((a, b) => {
        return b.likes - a.likes;
      });
      this.displayMedias();
    });
  }
  sortByName() {
    const btnSortName = document.querySelector(".name");
    btnSortName.addEventListener("click", () => {
      this.removeMedia();
      this.medias.sort((a, b) => a.title.localeCompare(b.title));
      this.displayMedias();
    });
  }
  sortByDate() {
    const btnSortDate = document.querySelector(".date");
    btnSortDate.addEventListener("click", () => {
      this.removeMedia();
      this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.displayMedias();
    });
  }
  removeMedia() {
    const medias = document.querySelectorAll(".media");
    medias.forEach((m) => {
      m.remove();
    });
  }
  nextMediaSlider() {
    const nextMedia = document.querySelector(".fa-chevron-right");
    nextMedia.addEventListener("click", () => {
      this.slider.nextMedia();
    });
  }
  previousMediaSlider() {
    const previousMedia = document.querySelector(".fa-chevron-left");
    previousMedia.addEventListener("click", () => {
      this.slider.previousMedia();
    });
  }
  closeSlider() {
    const close = document.querySelector(".modal__close.medias");
    close.addEventListener("click", () => {
      this.slider.closeSlider();
    });
  }
}
(async function () {
  const pagePhotographer = new PagePhotographer();
  await pagePhotographer.filterPhotographer();
  await pagePhotographer.filterMedias();
  pagePhotographer.displayMedias();
  pagePhotographer.displayPhotographerBanner();
  pagePhotographer.totalLikes();
  pagePhotographer.displayMediasSlider();
  /* SORT */
  pagePhotographer.sortByPop();
  pagePhotographer.sortByName();
  pagePhotographer.sortByDate();
  /* SLIDER */
  pagePhotographer.nextMediaSlider();
  pagePhotographer.previousMediaSlider();
  pagePhotographer.closeSlider();
  /*   pagePhotographer.keyPressSlider(); */
})();
