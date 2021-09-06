const params = new URLSearchParams(window.location.search);
const photographerId = params.get("");
class PagePhotographer {
  constructor() {
    this.photographer = {};
    this.medias = [];
    this.sortedMedias = [];
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
      /* this.openModalSlider() */
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
    const medias = document.querySelectorAll(".media");
    medias.forEach((m, index) => {
      m.addEventListener("click", (e) => {
        this.slider.findIndex(index);
      });
      m.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.slider.findIndex(index)
        }
      });
    });
  }

  /* SORT */
  sortBy(){
    const btnsSort = document.querySelectorAll(".sort")
    console.log(btnsSort);
    btnsSort.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.removeMedia()
        if(e.target.classList.contains("pop")){
          console.log('pop');
          const result = this.medias.sort((a, b ) => {
            return b.likes - a.likes
          })
          this.sortedMedias = result
        } else if (e.target.classList.contains("date")){
          console.log("date");
          const result =   this.medias.sort((a, b) =>  new Date(b.date) - new Date(a.date));
          this.sortedMedias = result

        } else if (e.target.classList.contains("name")){
          console.log('name');
          const result = this.medias.sort((a, b) => a.title.localeCompare(b.title));
          this.sortedMedias = result
        }
        this.sortedMedias.forEach((m) => {
          m.displayItemMedias()
          m.displayItemMediasSlider()
        })
        const medias = document.querySelectorAll(".media")
        console.log(medias);
        medias.forEach((m, index) => {
          m.addEventListener("click", (e) => {
            console.log(index);
            console.log(medias);
            this.slider.findIndex(index);
          });
          m.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
              this.slider.findIndex(index)
            }
          });
        });
      })
    })
  }

  removeMedia() {
    const medias = document.querySelectorAll(".media");
    const mediasSlider = document.querySelectorAll(".carouselMedias__item")
    console.log(mediasSlider);
    medias.forEach((m) => {
      m.remove();
    });
    mediasSlider.forEach((m) => {
      m.remove();
    })
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
  pagePhotographer.sortBy()
  /* SLIDER */
  pagePhotographer.openModalSlider();
  pagePhotographer.nextMediaSlider();
  pagePhotographer.previousMediaSlider();
  pagePhotographer.closeSlider();
})();
/* sortByPop() {
  const btnSortLikes = document.querySelector(".pop");
  const openModal = document.querySelectorAll(".media")
  btnSortLikes.addEventListener("click", () => {
    this.removeMedia();
    const i = this.medias.sort((a, b) => {
      return b.likes - a.likes;
    });
    this.sortedMedias = i
    this.sortedMedias.forEach((m) => {
      m.displayItemMedias()
      m.displayItemMediasSlider()
      })
      console.log(this.sortedMedias);
      const medias = document.querySelectorAll(".media")
      console.log(medias);
      medias.forEach((m, index) => {
        m.addEventListener("click", (e) => {
          console.log(index);
          console.log(medias);
          this.slider.findIndex(index);
        });
        m.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            this.slider.findIndex(index)
          }
        });
      });
  });
}
sortByName() {
  const btnSortName = document.querySelector(".name");
  btnSortName.addEventListener("click", () => {
    this.removeMedia();
    this.medias.sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.sortedMedias);
    this.displayItemMedias();
    this.displayMediasSlider();
    const medias = document.querySelectorAll(".media")
    console.log(medias);
    medias.forEach((m, index) => {
      m.addEventListener("click", (e) => {
        console.log(index);
        console.log(medias);
        this.slider.findIndex(index);
      });
      m.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.slider.findIndex(index)
        }
      });
    });
   
    
  });
}
sortByDate() {
  const btnSortDate = document.querySelector(".date");
  btnSortDate.addEventListener("click", () => {
    this.removeMedia();
    this.medias.sort((a, b) => new Date(b.date) - new Date(a.date));
    this.displayItemMedias();
    this.displayMediasSlider();
    const medias = document.querySelectorAll(".media")
    medias.forEach((m, index) => {
      m.addEventListener("click", (e) => {
        console.log(index);
        console.log(medias);
        this.slider.findIndex(index);
      });
      m.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.slider.findIndex(index)
        }
      });
    });
  });
} */