const _urlApi =
  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json";
const params = new URLSearchParams(window.location.search);
const photographerId = params.get("");
class PagePhotographer {
  constructor() {
    this.photographer = {};
    this.medias = [];
  }
  async filterPhotographer() {
    const photographers = new Photographers();
    await photographers.fetchPhotographers();
    this.photographer = photographers["photographers"].filter(
      (photographer) => photographer.id == photographerId
    );
  }
  async filterMedias() {
    const medias = new Medias();
    await medias.fetchMedias();
    this.medias = medias["medias"].filter(
      (media) => media.photographId == photographerId
    );

  }
  async displayPhotographerBanner() {
    this.photographer.forEach((photographer) => {
      photographer.createphotographerBanner();
    });
  }
  async displayMedias() {
    this.medias.forEach((media) => {
      media.createPictureItem();
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
  async displayMediasSlider() {
    this.medias.forEach((media) => {
      media.createPictureItemSlider();
    });
  }
}
(async function () {
  const pagePhotographer = new PagePhotographer();
  await pagePhotographer.filterPhotographer();
  await pagePhotographer.filterMedias();
  await pagePhotographer.totalLikes();
  await pagePhotographer.displayMedias();
  await pagePhotographer.displayPhotographerBanner();
  await pagePhotographer.displayMediasSlider();
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
