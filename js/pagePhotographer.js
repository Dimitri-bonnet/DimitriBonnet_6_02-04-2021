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
    this.medias.forEach((m) => {
      m.photographerName = this.photographer.name;
    });
  }
  async filterPhotographer() {
    const service = new Service();
    const dataPhotographers = await service.getPhotographers();
    this.photographer = dataPhotographers.filter(
      (photographer) => photographer.id == photographerId
    )[0];
  }
  displayPhotographerBanner() {
    this.photographer.createphotographerBanner();
  }
  displayItemMedias() {
    this.medias.forEach((m) => {
      m.displayItemMedias();
    });
  }
  displayMediasSlider() {
    this.medias.forEach((m) => {
      m.displayItemMediasSlider();
    });
  }
  totalLikes() {
    let totalLikes = 0;
    this.medias.forEach((media) => {
      totalLikes += media.likes;
    });
    const stickyBannerLikes = document.querySelector(".stickyBanner__like p");
    stickyBannerLikes.append(totalLikes);
  }
  openModalSlider() {
    const modal = document.querySelector(".bgGround");
    console.log(modal);
    const medias = document.querySelectorAll(".media");
    medias.forEach((m, index) => {
      m.addEventListener("click", (e) => {
        this.modal.lauchModal(e, this.slider);
        this.slider.findIndex(index);
      });
      m.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.modal.lauchModal(e, this.slider);
          this.slider.findIndex(index);
        }
      });
    });
  }

  /* SORT */
  sortByPop() {
    const btnSortLikes = document.querySelector(".pop");
    const openModal = document.querySelectorAll(".media")
    btnSortLikes.addEventListener("click", () => {
      this.removeMedia();
      const i = this.medias.sort((a, b) => {
        return b.likes - a.likes;
      });
      this.sortedMedias = i
      console.log(this.sortedMedias);
      this.sortedMedias.forEach((m) => {
        m.displayItemMedias()
    
      })
      console.log(openModal);
    });
  }
  sortByName() {
    const btnSortName = document.querySelector(".name");
    btnSortName.addEventListener("click", () => {
      this.removeMedia();
      this.medias.sort((a, b) => a.title.localeCompare(b.title));
      this.displayItemMedias();
    });
  }
  sortByDate() {
    const btnSortDate = document.querySelector(".date");
    btnSortDate.addEventListener("click", () => {
      this.removeMedia();
      this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      this.displayItemMedias();
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
  pagePhotographer.displayPhotographerBanner();
  pagePhotographer.displayItemMedias();
  pagePhotographer.displayMediasSlider();
  pagePhotographer.totalLikes();
  /* SORT */
  pagePhotographer.sortByPop();
  pagePhotographer.sortByName();
  pagePhotographer.sortByDate();
  /* SLIDER */
  pagePhotographer.openModalSlider();
  pagePhotographer.nextMediaSlider();
  pagePhotographer.previousMediaSlider();
  pagePhotographer.closeSlider();
})();
