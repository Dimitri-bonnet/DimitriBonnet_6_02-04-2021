const params = new URLSearchParams(window.location.search);
const photographerId = params.get("");
class PagePhotographer {
  constructor() {
    this.photographer = {};
    this.medias = [];
    this.sortedMedias = [];
    this.slider = new Slider();
    this.contactForm = new ContactForm()
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

  displayAllMedia(){
    this.medias.forEach((m) => {
        m.displayItemMedias()
        m.displayItemMediasSlider()
    })
  }
  displayPhotographerBanner() {
    this.photographer.createphotographerBanner();
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
       /*  this.slider.keyPress() */
      });
      m.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.slider.findIndex(index)
        }
      });
    });
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        this.slider.closeSlider();
      } else if (e.keyCode === 37) {
        this.slider.previousMedia();
      } else if (e.keyCode === 39) {
        this.slider.nextMedia();
      } else if (e.keyCode === 27) {
        this.slider.closeSlider();
      }
    });
  }
 
  /* SORT */
  sortBy(){
    const btnsSort = document.querySelectorAll(".sort")
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
            /* console.log(index);
            console.log(medias); */
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
  /* SLIDER */
  nextMediaSlider() {
    const nextMedia = document.querySelector(".nextMedia");
    nextMedia.addEventListener('click', () => {
      this.slider.nextMedia();
    })
  
  }
  previousMediaSlider() {
    const previousMedia = document.querySelector(".previousMedia");
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
  /* FORM */
  submitForm() {
    this.contactForm.submitForm()
  }
}
(async function () {
  const pagePhotographer = new PagePhotographer();
  await pagePhotographer.filterPhotographer();
  await pagePhotographer.filterMedias();
  pagePhotographer.displayPhotographerBanner();
  pagePhotographer.displayAllMedia()
  pagePhotographer.totalLikes();
  /* SORT */
  pagePhotographer.sortBy()
  /* SLIDER */
  pagePhotographer.openModalSlider();
  pagePhotographer.nextMediaSlider();
  pagePhotographer.previousMediaSlider();
  pagePhotographer.closeSlider();
  /* FORM */
  pagePhotographer.submitForm()
  
})();
