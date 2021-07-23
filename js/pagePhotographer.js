const _urlApi ="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
const params = new URLSearchParams(window.location.search);
const photogrpaherId = params.get("");
class PagePhotographer {
  constructor(id) {
    this.photographer = { id: id };
    this.medias = [];
  }
  /* PHOTOGRAPHER */
  async getPhotographer() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataPhotographers = data["photographers"];
    const photographerFiltre = dataPhotographers.filter(
      (photographer) => photographer.id == photogrpaherId
    );
    photographerFiltre.forEach((photographer) => {
      this.photographer = new Photographer(
        photographer.id,
        photographer.name,
        photographer.portrait,
        photographer.country,
        photographer.city,
        photographer.price,
        photographer.tagline,
        photographer.tags
      );
    });
  }
  async displayPhotographerBanner() {
    this.photographer.createphotographerBanner();
  }
  /* MEDIA */
  async getMedias() {
    const response = await fetch(_urlApi);
    const data = await response.json();
    const dataMedia = data["media"];
    const dataMediaFilter = dataMedia.filter(
      (media) => media.photographerId === this.photographer.id
    );
    dataMediaFilter.forEach((media) => {
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
  async displayMedias() {
    this.totalLikes()
    const containerImgs = document.querySelector(
      ".containerPhotographerSelected__imgs"
    );
    this.medias.forEach((media) => {
      const templateMedia = `
        <div class="picture">
          <div class="picture__img">
            <img class="modalOpenPicture" alt="${media.title}, closeup view" src="../assets/${this.photographer.name}/${media.img}">
          </div>
          <div class="picture__info">
           <span class="picture__info-name">${media.title}</span>
           <div class="picture__info-info">
            <div class="mr-2">
              <p>${media.price}</p>
            </div>
            <div>
                <p aria-label="">
                ${media.likes}
                <i class="fas fa-heart ml-2"></i>
                </p>
            </div>
           </div>
          </div>
        </div>
      `;
      containerImgs.insertAdjacentHTML("beforeend", templateMedia);
    });
  }
/*   displayMediasSlider() {
    const contentSliderPicture = document.querySelector(
      ".carouselPictures__pictures"
    );
    this.medias.forEach((media) => {
      contentSliderPicture.insertAdjacentHTML(
        "beforeend",
        media.createPictureItemSlider()
      );
    });
  } */
}
(async function () {
  const pagePhotographer = new PagePhotographer();
  await pagePhotographer.getPhotographer();
  await pagePhotographer.displayPhotographerBanner();
  await pagePhotographer.getMedias();
  await pagePhotographer.displayMedias();
})();










  /* SORT */
  /* Bylikes */
/*   sortBylikes() {
    this.medias.sort((a, b) => {
      return b.likes - a.likes;
    });
    console.log(this.medias);
    console.log("pop"); //TODO RELOAD ?
  } */
  /* Bydate */
/*   sortByDate() {
    console.log("date");
  } */
  /* ByName */
/*   sortByName() {
    this.medias.sort((a, b) => a.title.localeCompare(b.title));
    console.log(this.medias);
    console.log("name");
  } */
  /* const btnSortLikes = document.querySelector(".pop");
btnSortLikes.addEventListener("click", function () {
  pagePhotographer.sortBylikes();
});
const btnSortName = document.querySelector(".name");
btnSortName.addEventListener("click", function () {
  pagePhotographer.sortByName();
});
const btnSortDate = document.querySelector(".date");
btnSortDate.addEventListener("click", function () {
  pagePhotographer.sortByDate();
});
 */
