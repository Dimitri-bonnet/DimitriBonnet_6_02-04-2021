const params = new URLSearchParams(window.location.search);
const photographerId = params.get("");
class PagePhotographer {
  constructor() {
    this.photographer = {};
    this.medias = [];
    this.sortedMedias = [];
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
    );
  }
  async displayPhotographerBanner() {
    this.photographer.forEach((photographer) => {
      photographer.createphotographerBanner();
    });
  }
  async displayMedias() {
    const containerPicture = document.querySelector(
      ".containerPhotographerSelected__imgs"
    );

    this.medias.forEach((media) => {
      const content = document.createElement("div");
      content.classList.add("picture");
      /* PICTURE */
      const img = document.createElement("img");
      img.classList.add("modalOpenPicture", "picture__img");
      img.src = `../assets/Mimi Keel/${media.img}`;
      img.setAttribute("aria-label", `${media.title}, closeup view`);
      img.addEventListener("click", (e) => {
        const modal = new Modal();
        modal.lauchModal(e, media);
      });
      /* INFO */
      const pictureInfo = document.createElement("div");
      pictureInfo.classList.add("picture__info");
      const title = document.createElement("p");
      title.classList.add("picture__info-name");
      title.textContent = media.title;
      const pictureInfoInfo = document.createElement("div");
      pictureInfoInfo.classList.add("picture__info-info");
      const price = document.createElement("p");
      price.classList.add("mr-2");
      price.textContent = `${media.price} €`;
      const like = document.createElement("p");
      like.textContent = media.likes;
      const logoLike = document.createElement("i");
      logoLike.classList.add("fas", "fa-heart", "ml-2");
      logoLike.setAttribute("aria-label", "likes");
      logoLike.setAttribute("aria-hidden", "false"); //TODO WHY ARIA HIDDEN IS TRUE ?
      like.append(logoLike);
      content.append(img, pictureInfo);
      pictureInfoInfo.append(price, like);
      pictureInfo.append(title, pictureInfoInfo);
      containerPicture.append(content);
    });
  }
  async displayMediasSlider() {
    const containerSlider = document.querySelector(
      ".carouselPictures__pictures"
    );
    this.medias.forEach((media) => {
      const content = document.createElement("div");
      content.classList.add("carouselPictures__item");
      const img = document.createElement("img");
      img.src = `../assets/Mimi Keel/${media.img}`;
      img.setAttribute("aria-label", `${media.title}`);
      img.alt = `${media.title}`;
      const name = document.createElement("p");
      name.classList.add("carouselPictures__name");
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
  async sortByName() {
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
    const medias = document.querySelectorAll(".picture");
    medias.forEach((m) => {
      m.remove();
    });
  }
}
(async function () {
  const pagePhotographer = new PagePhotographer();
  await pagePhotographer.filterPhotographer();
  await pagePhotographer.filterMedias();
  await pagePhotographer.displayMedias();
  await pagePhotographer.displayPhotographerBanner();
  await pagePhotographer.totalLikes();
  await pagePhotographer.displayMediasSlider();
  pagePhotographer.sortByPop();
  await pagePhotographer.sortByName();
  pagePhotographer.sortByDate();
})();
